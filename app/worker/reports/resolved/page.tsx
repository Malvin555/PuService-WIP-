import PageHeader from "@/components/common/PageHeader";
import ReportClientSection from "@/components/common/dashboard/ReportInitials";
import {Report} from "@/types/report";
import {getUserReports} from "@/lib/getReport";
import {getCurrentUser} from "@/lib/getCurrentUser";

type Status = "pending" | "in_progress" | "resolved";

export default async function ReportsPageWorker() {
    const rawReports = await getUserReports({includeUser: true});
    const currentUser = await getCurrentUser();

    const transformed: Report[] = rawReports
        .map((r: Report, index: number) => {
            const rawStatus = r.status?.toLowerCase().replace("-", "_") as Status;

            return {
                _id: r._id,
                id: `#${String(index + 1).padStart(2, "0")}`,
                title: r.title,
                description: r.description,
                imageUrl: r.imageUrl,
                response: r.response,
                address: r.address ?? "-",
                category: r.categoryId?.name ?? "Uncategorized",
                status: rawStatus,
                user: r.userId?.name ?? "Unknown",
                date: new Date(r.createdAt).toISOString().split("T")[0],
                createdAt: r.createdAt,
                updatedAt: r.updatedAt,
                userId: r.userId?._id ?? "",
            };
        })
        .filter((r: Report) => r.status === "resolved");

    return (
        <>
            <PageHeader
                title="Manage Resolved Reports"
                titleClassName="text-green-800"
                description="View and manage resolved reports."
            />
            <ReportClientSection
                reports={transformed}
                currentUserRole={
                    currentUser?.role === "admin" ? "admin" : "worker"
                }/>
        </>
    );
}

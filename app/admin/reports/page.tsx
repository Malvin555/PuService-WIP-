import PageHeader from "@/components/common/PageHeader";
import ReportClientSection from "@/components/common/dashboard/ReportInitials";
import {Report} from "@/types/report";
import {getUserReports} from "@/lib/getReport";
import {getCurrentUser} from "@/lib/getCurrentUser"; // 👈 add this

type Status = "pending" | "in_progress" | "resolved";

export default async function ReportsPageWorker() {
    const rawReports = await getUserReports({includeUser: true});
    const currentUser = await getCurrentUser(); // 👈 get role

    const transformed: Report[] = rawReports.map((r: Report, i: number) => ({
        _id: r._id,
        id: `#${String(i + 1).padStart(2, "0")}`,
        title: r.title,
        description: r.description,
        imageUrl: r.imageUrl,
        response: r.response,
        address: r.address ?? "-",
        category: r.categoryId?.name ?? "Uncategorized",
        status: r.status?.toLowerCase().replace("-", "_") as Status,
        user: r.userId?.name ?? "Unknown",
        date: new Date(r.createdAt).toISOString().split("T")[0],
        createdAt: r.createdAt,
        updatedAt: r.updatedAt,
        userId: r.userId?._id ?? "",
    }));

    return (
        <>
            <PageHeader
                title="Manage All Reports"
                description="View and manage all reports in one place."
            />
            <ReportClientSection
                reports={transformed}
                currentUserRole={
                    currentUser?.role === "admin" ? "admin" : "worker"
                }
            />
        </>
    );
}

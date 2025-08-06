import PageHeader from "@/components/common/PageHeader";
import { getUserReports } from "@/lib/getReport";
import ReportClientSection from "@/components/common/dashboard/ReportInitials";
import { Report } from "@/types/report";
type Status = "pending" | "in_progress" | "resolved";

type ReportFromAPI = {
  _id: string;
  title: string;
  description: string;
  imageUrl?: string;
  address?: string;
  status: Status;
  createdAt: string;
  updatedAt: string;
  userId: {
    _id: string;
    name: string;
    email: string;
  };
  categoryId: {
    _id: string;
    name: string;
  };
};

export default async function ReportsPageWorker() {
  const data = await getUserReports({ includeUser: true });

  const transformed: Report[] = (data || []).map(
    (r: ReportFromAPI, index: number) => {
      const rawStatus = r.status?.toLowerCase().replace("-", "_") as Status;

      return {
        _id: r._id,
        id: `#${String(index + 1).padStart(2, "0")}`,
        title: r.title,
        description: r.description,
        address: r.address ?? "-",
        category: r.categoryId?.name ?? "Uncategorized",
        status: rawStatus,
        user: r.userId?.name ?? "Unknown",
        date: new Date(r.createdAt).toISOString().split("T")[0],
        createdAt: r.createdAt,
        updatedAt: r.updatedAt,
        userId: r.userId._id,
      };
    },
  );

  return (
    <>
      <PageHeader
        title="Manage All Reports"
        description="View and manage all reports in one place."
        withSearch
      />
      <ReportClientSection reports={transformed} />
    </>
  );
}

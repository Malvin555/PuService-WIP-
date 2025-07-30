import PageHeader from "@/components/common/PageHeader";
import { getUserReports } from "@/lib/getReport";
import ReportClientSection from "@/components/common/dashboard/ReportInitials";

type Status = "pending" | "in_progress" | "resolved";

type ReportDisplay = {
  _id: string;
  id: string;
  title: string;
  description: string;
  address: string;
  status: Status;
  createdAt: string;
  updatedAt: string;
  category: string;
  userId: string;
  user: string;
  date: string;
};

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

  const transformed: ReportDisplay[] = (data || [])
    .map((r: ReportFromAPI, index: number) => {
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
    })
    .filter((r: ReportDisplay) => r.status === "pending");

  return (
    <>
      <PageHeader
        title="Manage Pending Reports"
        titleClassName="text-yellow-800"
        description="View and manage pending reports."
        withSearch
      />
      <ReportClientSection reports={transformed} />
    </>
  );
}

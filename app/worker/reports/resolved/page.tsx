import PageHeader from "@/components/common/PageHeader";
import ReportCard from "@/components/common/ReportCard";
import ReportTable from "@/components/common/ReportTable";

const reports = [
  {
    id: "#01",
    title: "Network connectivity issue",
    category: "Network",
    status: { label: "Resolved", color: "green" },
    user: "Alice",
    date: "2024-01-05",
  },
  {
    id: "#02",
    title: "Database performance degradation",
    category: "Database",
    status: { label: "Resolved", color: "green" },
    user: "Bob",
    date: "2024-01-10",
  },
  {
    id: "#03",
    title: "Server patch required",
    category: "Server",
    status: { label: "Resolved", color: "green" },
    user: "Charlie",
    date: "2024-01-15",
  },
  {
    id: "#04",
    title: "Application access issues",
    category: "Application",
    status: { label: "Resolved", color: "green" },
    user: "Dana",
    date: "2024-01-18",
  },
  {
    id: "#05",
    title: "Custom report example",
    category: "Custom",
    status: { label: "Resolved", color: "green" },
    user: "Eve",
    date: "2024-02-01",
  },
];

const statusBadgeClass = {
  green: "bg-green-200 text-green-700",
  blue: "bg-blue-200 text-blue-700",
  yellow: "bg-yellow-200 text-yellow-700",
};

export default function ResolvedReportsPageWorker() {
  return (
    <>
      {/* Title */}
      <PageHeader
        title="Manage Resolved Reports"
        description="View and manage resolved reports."
        titleClassName="text-green-600"
        withSearch
      />

      <div>
        {/* Reports Card */}
        <ReportCard
          reports={reports}
          statusBadgeClass={statusBadgeClass}
          onView={(report) => console.log("View", report)}
          onRespond={(report) => console.log("Respond", report)}
        />

        {/* Reports Table */}
        <ReportTable
          reports={reports}
          statusBadgeClass={statusBadgeClass}
          onView={(report) => console.log("View", report)}
          onRespond={(report) => console.log("Respond", report)}
        />
      </div>
    </>
  );
}

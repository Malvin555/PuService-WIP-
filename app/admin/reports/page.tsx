import PageHeader from "@/components/common/PageHeader";

export default function ReportsPageAdmin() {
  return (
    <>
      {/* Title */}
      <PageHeader
        title="Manage Reports"
        description="View and manage all reports in one place."
        withSearch
      />
    </>
  );
}

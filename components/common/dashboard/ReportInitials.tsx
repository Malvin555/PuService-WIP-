"use client";

import ReportCard from "@/components/common/dashboard/report/ReportCard";
import ReportTable from "@/components/common/dashboard/report/ReportTable";
import { Report } from "@/types/report";

export default function ReportClientSection({
  reports,
}: {
  reports: Report[];
}) {
  const handleView = (report: Report) => {
    console.log("View", report);
  };

  const handleRespond = (report: Report) => {
    console.log("Respond", report);
  };

  return (
    <>
      <ReportCard
        reports={reports}
        onView={handleView}
        onRespond={handleRespond}
      />
      <ReportTable
        reports={reports}
        onView={handleView}
        onRespond={handleRespond}
      />
    </>
  );
}

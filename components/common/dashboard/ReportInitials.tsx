"use client";

import { useState } from "react";
import ReportCard from "@/components/common/dashboard/report/ReportCard";
import ReportTable from "@/components/common/dashboard/report/ReportTable";
import { Report } from "@/types/report";

export default function ReportClientSection({
  reports,
}: {
  reports: Report[];
}) {
  const [reportList, setReportList] = useState<Report[]>(reports);

  const handleUpdate = (updated: Report) => {
    setReportList((prev) =>
      prev.map((r) => (r._id === updated._id ? updated : r)),
    );
  };

  return (
    <>
      <ReportCard reports={reportList} onUpdate={handleUpdate} />
      <ReportTable reports={reportList} onUpdate={handleUpdate} />
    </>
  );
}

"use client";

import ReportCard from "@/components/common/dashboard/report/ReportCard";
import ReportTable from "@/components/common/dashboard/report/ReportTable";

type ReportDisplay = {
  _id: string;
  id: string;
  title: string;
  description: string;
  address: string;
  status: "pending" | "in_progress" | "resolved";
  createdAt: string;
  updatedAt: string;
  category: string;
  userId: string;
  user: string;
  date: string;
};

export default function ReportClientSection({
  reports,
}: {
  reports: ReportDisplay[];
}) {
  const handleView = (report: ReportDisplay) => {
    console.log("View", report);
  };

  const handleRespond = (report: ReportDisplay) => {
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

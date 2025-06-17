"use client";

import { useEffect, useState } from "react";
import PageHeader from "@/components/common/PageHeader";
import ReportCard from "@/components/common/dashboard/report/ReportCard";
import ReportTable from "@/components/common/dashboard/report/ReportTable";

type ReportFromAPI = {
  _id: string;
  title: string;
  description: string;
  imageUrl?: string;
  address?: string;
  status: string;
  createdAt: string;
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

type Status = "pending" | "in_progress" | "resolved";

type ReportDisplay = {
  id: string | number;
  title: string;
  category: string;
  status: Status;
  user: string;
  date: string;
};

export default function ReportsPageWorker() {
  const [reports, setReports] = useState<ReportDisplay[]>([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await fetch("/api/function/report");
        const data = await res.json();

        if (!res.ok) {
          console.error("API Error:", data.message);
          return;
        }

        const transformed = (data.reports as ReportFromAPI[]).map(
          (r, index) => {
            const rawStatus = r.status
              .toLowerCase()
              .replace("-", "_") as Status;

            return {
              id: `#${String(index + 1).padStart(2, "0")}`,
              title: r.title,
              category: r.categoryId?.name || "Uncategorized",
              status: rawStatus,
              user: r.userId?.name || "Unknown",
              date: new Date(r.createdAt).toISOString().split("T")[0],
            };
          },
        );

        setReports(transformed);
      } catch (err) {
        console.error("Error fetching reports:", err);
      }
    };

    fetchReports();
  }, []);

  return (
    <>
      <PageHeader
        title="Manage All Reports"
        description="View and manage all reports in one place."
        withSearch
      />

      <div>
        <ReportCard
          reports={reports}
          onView={(report) => console.log("View", report)}
          onRespond={(report) => console.log("Respond", report)}
        />

        <ReportTable
          reports={reports}
          onView={(report) => console.log("View", report)}
          onRespond={(report) => console.log("Respond", report)}
        />
      </div>
    </>
  );
}

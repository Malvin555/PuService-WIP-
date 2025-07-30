"use client";

import StatusBadge from "@/components/common/ReportStatus";
import InfoReportModal from "@/components/modal/InfoReportModal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

type ReportType = {
  _id: string;
  title: string;
  description: string;
  address: string;
  status: "pending" | "in_progress" | "resolved";
  createdAt: string;
  updatedAt: string;
  categoryId?: {
    _id: string;
    name: string;
  };
  userId: string;
};

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TABLE_HEADERS = ["ID", "Title", "Status", "Date", "Action"];

type RecentReportTableProps = {
  reports: ReportType[];
};

export default function RecentReportTable({ reports }: RecentReportTableProps) {
  const [selectedReport, setSelectedReport] = useState<ReportType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleViewDetails(report: ReportType) {
    setSelectedReport(report);
    setIsModalOpen(true);
  }

  return (
    <div className="lg:col-span-2">
      <Card className="shadow-sm min-h-[400px] gap-0 max-h-[400px] overflow-hidden">
        <CardHeader className="border-b bg-muted/20 py-4 w-full flex">
          <CardTitle className="text-lg font-medium text-foreground">
            Recent Reports
          </CardTitle>
        </CardHeader>
        <CardContent className="overflow-auto scrollbar-hide px-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-background">
                {TABLE_HEADERS.map((header) => (
                  <TableHead
                    key={header}
                    className="px-6 text-sm font-medium text-muted-foreground whitespace-nowrap"
                  >
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report, index) => (
                <TableRow
                  key={report._id}
                  className="hover:bg-muted/10 border-b"
                >
                  <TableCell className="px-6 py-4 text-sm text-muted-foreground whitespace-nowrap truncate">
                    {"#" + String(index + 1).padStart(2, "0")}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-sm font-medium text-foreground max-w-[250px] truncate">
                    <span title={report.title}>{report.title}</span>
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <StatusBadge status={report.status} />
                  </TableCell>
                  <TableCell className="px-6 py-4 text-sm text-muted-foreground whitespace-nowrap">
                    {new Date(report.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-sm whitespace-nowrap">
                    <button
                      onClick={() => handleViewDetails(report)}
                      className="text-primary hover:underline font-medium"
                    >
                      View Details
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {selectedReport && (
            <InfoReportModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              report={selectedReport}
            />
          )}
        </CardContent>
        <div className="px-6 py-6 bg-muted/10 border-t flex justify-end">
          <Button
            variant="outline"
            size="sm"
            className="hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            View All Reports
            <svg
              className="ml-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </div>
      </Card>
    </div>
  );
}

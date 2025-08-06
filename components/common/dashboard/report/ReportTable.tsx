"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import StatusBadge from "@/components/common/ReportStatus";
import RespondReportModal from "@/components/modal/RespondReportModal";
import InfoReportModal from "@/components/modal/InfoReportModal";
import { Report } from "@/types/report";

interface ReportTableCardProps {
  reports: Report[];
  onView?: (report: Report) => void;
  onRespond?: (report: Report) => void;
  isLoading?: boolean;
}

export default function ReportTable({
  reports,
  isLoading,
}: ReportTableCardProps) {
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRespondModalOpen, setIsRespondModalOpen] = useState(false);
  const [respondReport, setRespondReport] = useState<Report | null>(null);
  const handleViewDetails = async (report: Report) => {
    try {
      const res = await fetch(`/api/function/report?id=${report._id}`);
      const fresh = await res.json();

      setSelectedReport(fresh); // ← updated report with latest data
      setIsModalOpen(true);
    } catch (err) {
      console.error("Failed to fetch report:", err);
    }
  };

  function handleRespond(report: Report) {
    setRespondReport(report);
    setIsRespondModalOpen(true);
  }

  const [currentPage, setCurrentPage] = useState(1);
  const reportsPerPage = 5;

  const totalPages = isLoading ? 0 : Math.ceil(reports.length / reportsPerPage);
  const startIndex = (currentPage - 1) * reportsPerPage;
  const currentReports = reports.slice(startIndex, startIndex + reportsPerPage);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="hidden md:block">
      <Card className="shadow-sm gap-0 flex flex-col overflow-hidden">
        {/* Table section */}
        <CardContent
          className={`px-0 ${reports.length > 5 ? "overflow-auto scrollbar-hide" : ""}`}
          style={{
            maxHeight: reports.length > 5 ? "calc(5 * 65px)" : "auto",
          }}
        >
          <Table className="min-w-full">
            <TableHeader>
              <TableRow className="hover:bg-background">
                {[
                  "ID",
                  "Title",
                  "Category",
                  "Status",
                  "Submitted By",
                  "Date",
                  "Actions",
                ].map((header) => (
                  <TableHead
                    key={header}
                    className="px-6 py-4 text-sm font-medium text-muted-foreground whitespace-nowrap"
                  >
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentReports.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="text-center text-muted-foreground py-8"
                  >
                    No reports found.
                  </TableCell>
                </TableRow>
              ) : (
                currentReports.map((report, index) => (
                  <TableRow
                    key={report.id}
                    className="hover:bg-muted/10 border-b"
                  >
                    <TableCell className="px-6 py-4 text-sm text-muted-foreground whitespace-nowrap">
                      {"#" + String(startIndex + index + 1).padStart(2, "0")}
                    </TableCell>

                    <TableCell className="px-6 py-4 text-sm font-medium text-foreground max-w-[250px] truncate">
                      <span title={report.title}>{report.title}</span>
                    </TableCell>
                    <TableCell className="px-6 py-4 text-sm text-muted-foreground whitespace-nowrap">
                      {report.category}
                    </TableCell>
                    <TableCell className="px-6 py-4">
                      <StatusBadge status={report.status} />
                    </TableCell>
                    <TableCell className="px-6 py-4 text-sm text-muted-foreground whitespace-nowrap">
                      {report.user}
                    </TableCell>
                    <TableCell className="px-6 py-4 text-sm text-muted-foreground whitespace-nowrap">
                      {report.date}
                    </TableCell>
                    <TableCell className="px-6 py-4 text-sm whitespace-nowrap">
                      <div className="flex space-x-2">
                        <Button
                          variant="link"
                          onClick={() => handleViewDetails(report)}
                          size="sm"
                          className="text-blue-700 p-0 h-auto"
                        >
                          View
                        </Button>
                        <Button
                          variant="link"
                          size="sm"
                          className="text-primary p-0 h-auto"
                          onClick={() => handleRespond(report)}
                        >
                          Respond
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
          {selectedReport && (
            <InfoReportModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              report={selectedReport}
            />
          )}

          {respondReport && (
            <RespondReportModal
              isOpen={isRespondModalOpen}
              onCloseAction={() => setIsRespondModalOpen(false)}
              reportId={respondReport._id}
            />
          )}
        </CardContent>

        {/* Pagination */}

        <div className="px-6 py-4 bg-muted/10 border-t flex flex-col md:flex-row md:items-center md:justify-between gap-4 flex-shrink-0">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-medium">{startIndex + 1}</span> to{" "}
            <span className="font-medium">
              {Math.min(startIndex + reportsPerPage, reports.length)}
            </span>{" "}
            of <span className="font-medium">{reports.length}</span> results
          </p>

          <nav className="flex items-center space-x-1" aria-label="Pagination">
            <Button
              variant="outline"
              size="sm"
              className="rounded-md px-2 py-1 text-muted-foreground"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              ← Previous
            </Button>

            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i}
                variant="outline"
                size="sm"
                className={`rounded-md px-3 py-1 ${
                  currentPage === i + 1
                    ? "bg-primary text-primary-foreground border-primary"
                    : "text-muted-foreground"
                }`}
                onClick={() => goToPage(i + 1)}
              >
                {i + 1}
              </Button>
            ))}

            <Button
              variant="outline"
              size="sm"
              className="rounded-md px-2 py-1 text-muted-foreground"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next →
            </Button>
          </nav>
        </div>
      </Card>
    </div>
  );
}

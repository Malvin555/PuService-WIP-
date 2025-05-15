// components/common/ReportTableCard.tsx

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
import { Badge } from "@/components/ui/badge";

type Report = {
  id: string | number;
  title: string;
  category: string;
  user: string;
  date: string;
  status: {
    label: string;
    color: string;
  };
};

interface ReportTableCardProps {
  reports: Report[];
  statusBadgeClass: Record<string, string>;
  onView?: (report: Report) => void;
  onRespond?: (report: Report) => void;
}

export default function ReportTable({
  reports,
  statusBadgeClass,
}: ReportTableCardProps) {
  return (
    <div className="hidden md:block">
      <Card className="shadow-sm min-h-[400px] gap-0 max-h-[600px] overflow-hidden">
        <CardContent className="overflow-auto scrollbar-hide px-0">
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
              {reports.map((report) => (
                <TableRow
                  key={report.id}
                  className="hover:bg-muted/10 border-b"
                >
                  <TableCell className="px-6 py-4 text-sm text-muted-foreground whitespace-nowrap">
                    {report.id}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-sm font-medium text-foreground max-w-[250px] truncate">
                    <span title={report.title}>{report.title}</span>
                  </TableCell>
                  <TableCell className="px-6 py-4 text-sm text-muted-foreground whitespace-nowrap">
                    {report.category}
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <Badge
                      className={`px-3 py-1 ${statusBadgeClass[report.status.color]}`}
                    >
                      {report.status.label}
                    </Badge>
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
                        size="sm"
                        className="text-blue-700 p-0 h-auto"
                      >
                        View
                      </Button>
                      <Button
                        variant="link"
                        size="sm"
                        className="text-primary p-0 h-auto"
                      >
                        Respond
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        {/* Pagination */}
        <div className="px-6 py-4 bg-muted/10 border-t flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-medium">1</span>
            <span className="mx-1">to</span>
            <span className="font-medium">{reports.length}</span>
            <span className="mx-1">of</span>
            <span className="font-medium">{reports.length}</span> results
          </p>
          <nav className="flex items-center space-x-1" aria-label="Pagination">
            <Button
              variant="outline"
              size="sm"
              className="rounded-md px-2 py-1 text-muted-foreground"
              disabled
            >
              <svg
                className="h-4 w-4 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-md px-3 py-1 font-semibold bg-primary text-primary-foreground border-primary"
            >
              1
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-md px-3 py-1 text-muted-foreground"
            >
              2
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-md px-2 py-1 text-muted-foreground"
            >
              Next
              <svg
                className="h-4 w-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 5l7 7-7 7"
                />
              </svg>
            </Button>
          </nav>
        </div>
      </Card>
    </div>
  );
}

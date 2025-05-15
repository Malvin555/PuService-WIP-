import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Report = {
  id: number | string;
  title: string;
  category: string;
  user: string;
  date: string;
  status: {
    label: string;
    color: string;
  };
};

interface MobileReportCardListProps {
  reports: Report[];
  statusBadgeClass: Record<string, string>;
  onView?: (report: Report) => void;
  onRespond?: (report: Report) => void;
}

export default function ReportCard({
  reports,
  statusBadgeClass,
}: MobileReportCardListProps) {
  return (
    <div className="md:hidden space-y-4">
      {reports.map((report) => (
        <Card key={report.id} className="overflow-hidden gap-0 border">
          <CardHeader className="py-4 border-b">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-lg font-medium text-primary">
                  {report.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {report.id} &bull; {report.category}
                </CardDescription>
              </div>
              <Badge
                className={`px-2 text-xs font-semibold rounded-full ${
                  statusBadgeClass[report.status.color]
                }`}
              >
                {report.status.label}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="py-3 gap-0 bg-secondary">
            <div className="flex justify-between items-center">
              <div className="text-sm text-muted-foreground">
                <p>
                  {report.user} &bull; {report.date}
                </p>
              </div>
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
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

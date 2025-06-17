import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StatusBadge from "@/components/common/ReportStatus";
import { Skeleton } from "@/components/ui/skeleton";

type Report = {
  id: number | string;
  title: string;
  category: string;
  user: string;
  date: string;
  status: "pending" | "in_progress" | "resolved";
};

interface MobileReportCardListProps {
  reports: Report[];
  onView?: (report: Report) => void;
  onRespond?: (report: Report) => void;
  isLoading?: boolean;
}

export default function ReportCard({
  reports,
  onView,
  onRespond,
  isLoading,
}: MobileReportCardListProps) {
  if (isLoading) {
    return (
      <div className="md:hidden space-y-4">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="overflow-hidden gap-0 border">
            <CardHeader className="py-4 border-b">
              <div className="flex justify-between items-start">
                <div className="w-full space-y-2">
                  <Skeleton className="h-5 w-3/4 rounded" />
                  <Skeleton className="h-4 w-1/2 rounded" />
                </div>
                <Skeleton className="h-6 w-16 rounded-full" />
              </div>
            </CardHeader>
            <CardContent className="py-3 bg-secondary">
              <div className="flex justify-between items-center">
                <Skeleton className="h-4 w-1/3" />
                <div className="flex space-x-2">
                  <Skeleton className="h-4 w-12" />
                  <Skeleton className="h-4 w-16" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="md:hidden space-y-4">
      {reports.map((report) => (
        <Card key={report.id} className="overflow-hidden gap-0 border">
          <CardHeader className="py-4 border-b">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-lg truncate font-medium text-primary">
                  {report.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {report.id} &bull; {report.category}
                </CardDescription>
              </div>
              <StatusBadge status={report.status} />
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
                  onClick={() => onView?.(report)}
                >
                  View
                </Button>
                <Button
                  variant="link"
                  size="sm"
                  className="text-primary p-0 h-auto"
                  onClick={() => onRespond?.(report)}
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

import { Card, CardContent } from "@/components/ui/card";
import {
  MapPinIcon,
  CalendarIcon,
  CircleIcon as InformationCircleIcon,
} from "lucide-react";

interface ReportCardProps {
  report: {
    _id: string;
    title: string;
    description: string;
    imageUrl?: string;
    address: string;
    status: "pending" | "in-progress" | "resolved";
    categoryId?: { name?: string };
    userId: string;
    createdAt: string;
    updatedAt: string;
  };
}

export default function ReportCard({ report }: ReportCardProps) {
  return (
    <Card
      key={report._id}
      className="bg-background shadow-sm rounded-md border border-border hover:bg-muted-foreground/10 transition-colors py-4 mb-4"
    >
      <CardContent>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-primary truncate">
            {report.title}
          </p>
          <div className="ml-2 flex-shrink-0 flex">
            <span className="px-2 capitalize inline-flex text-xs leading-5 font-semibold rounded-full">
              {report.status}
            </span>
          </div>
        </div>
        <div className="mt-2 sm:flex sm:justify-between">
          <div className="sm:flex">
            <p className="flex items-center text-sm text-muted-foreground">
              <MapPinIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-muted-foreground" />
              {report.address}
            </p>
            <p className="mt-2 flex items-center text-sm text-muted-foreground sm:mt-0 sm:ml-6">
              <InformationCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-muted-foreground" />
              {report.categoryId?.name || "No category"}
            </p>
          </div>
          <div className="mt-2 flex items-center text-sm text-muted-foreground sm:mt-0">
            <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-muted-foreground" />
            <p>
              Submitted on{" "}
              <time dateTime={report.createdAt}>
                {new Date(report.createdAt).toLocaleDateString()}
              </time>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

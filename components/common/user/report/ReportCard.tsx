"use client";

import { Card, CardContent } from "@/components/ui/card";
import InfoReportModal from "@/components/modal/InfoReportModal";
import { useState, useCallback, useMemo, memo } from "react";
import StatusBadge from "@/components/common/ReportStatus";
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
    status: "pending" | "in_progress" | "resolved";
    categoryId?: { name?: string };
    userId: string;
    createdAt: string;
    updatedAt: string;
  };
}

const ReportCard = memo(function ReportCard({ report }: ReportCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = useCallback(() => setIsModalOpen(true), []);
  const handleModalClose = useCallback(() => setIsModalOpen(false), []);

  const formattedDate = useMemo(
    () => new Date(report.createdAt).toLocaleDateString(),
    [report.createdAt],
  );

  const categoryName = report.categoryId?.name || "No category";

  const iconClassName = "flex-shrink-0 mr-1.5 h-5 w-5 text-muted-foreground";

  return (
    <Card className="bg-background shadow-sm rounded-md border border-border hover:bg-muted-foreground/10 transition-colors py-4 mb-4">
      <CardContent onClick={handleModalOpen}>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-primary truncate">
            {report.title}
          </p>
          <div className="ml-2 flex-shrink-0">
            <StatusBadge status={report.status} />
          </div>
        </div>
        <div className="mt-2 sm:flex sm:justify-between">
          <div className="sm:flex">
            <p className="flex items-center text-sm text-muted-foreground">
              <MapPinIcon className={iconClassName} />
              {report.address}
            </p>
            <p className="mt-2 flex items-center text-sm text-muted-foreground sm:mt-0 sm:ml-6">
              <InformationCircleIcon className={iconClassName} />
              {categoryName}
            </p>
          </div>
          <div className="mt-2 flex items-center text-sm text-muted-foreground sm:mt-0">
            <CalendarIcon className={iconClassName} />
            <p>
              Submitted on{" "}
              <time dateTime={report.createdAt}>{formattedDate}</time>
            </p>
          </div>
        </div>
      </CardContent>
      <InfoReportModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        report={report}
      />
    </Card>
  );
});

export default ReportCard;

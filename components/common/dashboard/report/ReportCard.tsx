import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import StatusBadge from "@/components/common/ReportStatus";
import RespondReportModal from "@/components/modal/RespondReportModal";
import InfoReportModal from "@/components/modal/InfoReportModal";
import { Report } from "@/types/report";

interface MobileReportCardListProps {
  reports: Report[];
  onView?: (report: Report) => void;
  onRespond?: (report: Report) => void;
}

export default function ReportCard({ reports }: MobileReportCardListProps) {
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRespondModalOpen, setIsRespondModalOpen] = useState(false);
  const [respondReport, setRespondReport] = useState<Report | null>(null);

  const handleViewDetails = async (report: Report) => {
    try {
      const res = await fetch(`/api/function/report?id=${report._id}`);
      const fresh = await res.json();

      setSelectedReport(fresh);
      setIsModalOpen(true);
    } catch (err) {
      console.error("Failed to fetch report:", err);
    }
  };

  function handleRespond(report: Report) {
    setRespondReport(report);
    setIsRespondModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setSelectedReport(null);
  }

  function handleCloseRespondModal() {
    setIsRespondModalOpen(false);
    setRespondReport(null);
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
                  onClick={() => handleViewDetails(report)}
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
            </div>
          </CardContent>
        </Card>
      ))}

      {selectedReport && (
        <InfoReportModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          report={selectedReport}
        />
      )}

      {respondReport && (
        <RespondReportModal
          isOpen={isRespondModalOpen}
          onCloseAction={handleCloseRespondModal}
          reportId={respondReport._id}
        />
      )}
    </div>
  );
}

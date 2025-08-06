import Modal from "../layout/modal/Modal";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import StatusBadge from "@/components/common/ReportStatus";
import { Report } from "@/types/report";

interface InfoReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  report: Report | null;
}

export default function InfoReportModal({
  isOpen,
  onClose,
  report,
}: InfoReportModalProps) {
  if (!report) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Report #${report._id.slice(-4).toUpperCase()}`}
      footer={
        <div className="flex  justify-end gap-2">
          <Button
            onClick={onClose}
            variant={"outline"}
            className="bg-gray-100 px-8 py-2 rounded-md text-sm"
          >
            Close
          </Button>
        </div>
      }
    >
      <Card className="border-0 shadow-none">
        <CardContent className="p-0 space-y-4">
          {/* Image */}
          {report.imageUrl && (
            <div className="relative w-full h-64 mt-2 rounded-lg overflow-hidden">
              <Image
                src={report.imageUrl}
                alt="Report image"
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Info Fields */}
          <div className="space-y-3">
            <div>
              <p className="text-xs font-medium text-muted-foreground">
                Status
              </p>
              <div className="mt-1 flex-shrink-0 flex">
                <StatusBadge status={report.status} />
              </div>
            </div>
            <Separator className="my-2" />
            <div>
              <p className="text-xs font-medium text-muted-foreground">
                Category
              </p>
              <p id="modalCategory" className="mt-1 text-sm text-foreground">
                {report.category || "Uncategorized"}
              </p>
            </div>
            <Separator className="my-2" />
            <div>
              <p className="text-xs font-medium text-muted-foreground">
                Address
              </p>
              <p id="modalAddress" className="mt-1 text-sm text-foreground">
                {report.address}
              </p>
            </div>
            <Separator className="my-2" />
            <div className="max-w-full overflow-auto break-words">
              <p className="text-xs font-medium text-muted-foreground">
                Description
              </p>
              <p
                id="modalDescription"
                className="mt-1 text-sm text-foreground whitespace-pre-line"
              >
                {report.description}
              </p>
            </div>

            <Separator className="my-2" />
            <div>
              <p className="text-xs font-medium text-muted-foreground">
                Response
              </p>
              <p id="modalResponse" className="mt-1 text-sm text-foreground">
                {report.response || ""}
              </p>
            </div>
            <Separator className="my-2" />
            <div>
              <p className="text-xs font-medium text-muted-foreground">
                Submitted on
              </p>
              <p id="modalDate" className="mt-1 text-sm text-foreground">
                <time dateTime={report.createdAt}>
                  {new Date(report.createdAt).toLocaleDateString()}
                </time>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Modal>
  );
}

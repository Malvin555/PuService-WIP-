import Modal from "../layout/modal/Modal";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface InfoReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InfoReportModal({
  isOpen,
  onClose,
}: InfoReportModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Report Details"
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
          <div id="modalImageContainer" className="mb-3">
            <image
              id="modalImage"
              className="w-full rounded-lg hidden aspect-video object-cover"
            />
          </div>

          {/* Info Fields */}
          <div className="space-y-3">
            <div>
              <p className="text-xs font-medium text-muted-foreground">
                Status
              </p>
              <Badge
                id="modalStatus"
                variant="outline"
                className="mt-1"
              ></Badge>
            </div>
            <Separator className="my-2" />
            <div>
              <p className="text-xs font-medium text-muted-foreground">
                Category
              </p>
              <p
                id="modalCategory"
                className="mt-1 text-sm text-foreground"
              ></p>
            </div>
            <Separator className="my-2" />
            <div>
              <p className="text-xs font-medium text-muted-foreground">
                Address
              </p>
              <p id="modalAddress" className="mt-1 text-sm text-foreground"></p>
            </div>
            <Separator className="my-2" />
            <div>
              <p className="text-xs font-medium text-muted-foreground">
                Description
              </p>
              <p
                id="modalDescription"
                className="mt-1 text-sm text-foreground"
              ></p>
            </div>
            <Separator className="my-2" />
            <div>
              <p className="text-xs font-medium text-muted-foreground">
                Response
              </p>
              <p
                id="modalResponse"
                className="mt-1 text-sm text-foreground"
              ></p>
            </div>
            <Separator className="my-2" />
            <div>
              <p className="text-xs font-medium text-muted-foreground">
                Submitted on
              </p>
              <p id="modalDate" className="mt-1 text-sm text-foreground"></p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Modal>
  );
}

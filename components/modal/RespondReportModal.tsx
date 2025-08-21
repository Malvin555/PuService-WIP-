"use client";

import Modal from "../layout/modal/Modal";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Report } from "@/types/report";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface RespondReportModalProps {
  isOpen: boolean;
  onCloseAction: () => void;
  reportId: string;
  onResponseSubmit?: (updatedReport: Report) => void;
  onUpdated?: (updated: Report) => void;
}

export default function RespondReportModal({
  isOpen,
  onCloseAction,
  reportId,
  onResponseSubmit,
  onUpdated,
}: RespondReportModalProps) {
  const [responseText, setResponseText] = useState("");
  const [status, setStatus] = useState<"pending" | "in_progress" | "resolved">(
    "pending",
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // 1. First: PATCH the report (send response + status)
      const res = await fetch(`/api/function/report`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reportId,
          response: responseText,
          status,
        }),
      });

      if (res.ok) {
        const fullRes = await fetch(`/api/function/report?id=${reportId}`);
        const fullUpdatedReport = await fullRes.json();

        // 3. Pass full populated report to the parent
        onResponseSubmit?.(fullUpdatedReport);
        onUpdated?.(fullUpdatedReport);
      }

      // Reset form state
      setResponseText("");
      setStatus("pending");
      onCloseAction();
    } catch (err) {
      console.error("Failed to submit response:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onCloseAction}
      title={`Respond to Report #${reportId.slice(-4).toUpperCase()}`}
      footer={
        <div className="flex justify-end gap-2">
          <Button
            onClick={onCloseAction}
            variant={"outline"}
            className="bg-gray-100 px-8 py-2 rounded-md text-sm"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="px-8 py-2 rounded-md text-sm"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>
      }
    >
      <Card className="border-0 shadow-none">
        <CardContent className="p-0 space-y-4 mt-2">
          {/* Status Select */}
          <div>
            <Label htmlFor="status" className="text-xs text-muted-foreground">
              Status
            </Label>
            <Select
              value={status}
              onValueChange={(value) => setStatus(value as typeof status)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="in_progress">In Progress</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Response Textarea */}
          <div>
            <Label htmlFor="response" className="text-xs text-muted-foreground">
              Response
            </Label>
            <Textarea
              id="response"
              placeholder="Write your response here..."
              value={responseText}
              onChange={(e) => setResponseText(e.target.value)}
              rows={5}
              className="mt-1"
            />
          </div>
        </CardContent>
      </Card>
    </Modal>
  );
}

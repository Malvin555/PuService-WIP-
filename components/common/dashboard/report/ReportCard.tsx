import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import StatusBadge from "@/components/common/ReportStatus";
import RespondReportModal from "@/components/modal/RespondReportModal";
import InfoReportModal from "@/components/modal/InfoReportModal";
import {Report} from "@/types/report";

interface MobileReportCardListProps {
    reports: Report[];
    onView?: (report: Report) => void;
    onRespond?: (report: Report) => void;
    onUpdate?: (updated: Report) => void;
    currentUserRole: "admin" | "worker";
}

export default function ReportCard({
                                       reports,
                                       onUpdate,
                                       currentUserRole,
                                   }: MobileReportCardListProps) {
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

    const handleDelete = async (report: Report) => {
        if (!confirm("Are you sure you want to delete this report?")) return;

        try {
            const res = await fetch(`/api/function/report?id=${report._id}`, {
                method: "DELETE",
            });

            if (!res.ok) throw new Error("Failed to delete report");

            if (onUpdate) {
                onUpdate({...report, deleted: true} as Report); // mark deleted
            }

            setIsModalOpen(false); // close modal
        } catch (err) {
            console.error("Delete failed:", err);
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
                <Card key={report._id} className="overflow-hidden gap-0 border">
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
                            <StatusBadge status={report.status}/>
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
                    currentUserRole={currentUserRole}
                    onDelete={handleDelete}
                />
            )}

            {respondReport && (
                <RespondReportModal
                    reportId={respondReport._id} // ✅ This line is required
                    isOpen={isRespondModalOpen}
                    onCloseAction={handleCloseRespondModal}
                    onResponseSubmit={async (updatedPartial) => {
                        try {
                            const res = await fetch(
                                `/api/function/report?id=${updatedPartial._id}`,
                            );
                            const fullUpdated = await res.json();

                            // 🔧 FIX: Apply transformation
                            const transformed: Report = {
                                _id: fullUpdated._id,
                                id: respondReport?.id ?? "#--",
                                title: fullUpdated.title,
                                description: fullUpdated.description,
                                imageUrl: fullUpdated.imageUrl,
                                response: fullUpdated.response,
                                address: fullUpdated.address ?? "-",
                                category: fullUpdated.categoryId?.name ?? "Uncategorized",
                                status: fullUpdated.status?.toLowerCase().replace("-", "_"),
                                user: fullUpdated.userId?.name ?? "Unknown",
                                date: new Date(fullUpdated.createdAt)
                                    .toISOString()
                                    .split("T")[0],
                                createdAt: fullUpdated.createdAt,
                                updatedAt: fullUpdated.updatedAt,
                                userId: fullUpdated.userId?._id ?? "",
                            };

                            if (onUpdate) {
                                onUpdate(transformed); // ✅ Pass the transformed data
                            }

                            handleCloseRespondModal();
                        } catch (err) {
                            console.error("Failed to refetch updated report:", err);
                        }
                    }}
                />
            )}
        </div>
    );
}

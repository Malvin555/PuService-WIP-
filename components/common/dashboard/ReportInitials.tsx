"use client";

import {useState} from "react";
import ReportCard from "@/components/common/dashboard/report/ReportCard";
import ReportTable from "@/components/common/dashboard/report/ReportTable";
import {Report} from "@/types/report";

export default function ReportClientSection({
                                                reports,
                                                currentUserRole, // 👈 add role
                                            }: {
    reports: Report[];
    currentUserRole: "admin" | "worker"; // 👈 type it
}) {
    const [reportList, setReportList] = useState<Report[]>(reports);

    const handleUpdate = (updated: Report) => {
        setReportList((prev) => {
            if ((updated as any).deleted) {
                // if report is marked deleted, remove it from list
                return prev.filter((r) => r._id !== updated._id);
            }
            // otherwise just update it
            return prev.map((r) => (r._id === updated._id ? updated : r));
        });
    };


    return (
        <>
            <ReportCard reports={reportList} onUpdate={handleUpdate} currentUserRole={currentUserRole}/>
            <ReportTable
                reports={reportList}
                onUpdate={handleUpdate}
                currentUserRole={currentUserRole}
            />
        </>
    );
}

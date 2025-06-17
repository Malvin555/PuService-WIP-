"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import InfoReportModal from "@/components/modal/InfoReportModal";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import PageHeader from "@/components/common/PageHeader";
import ReportCard from "@/components/common/user/report/ReportCard";
import StatusBadge from "@/components/common/ReportStatus";

interface ReportCard {
  _id: string;
  title: string;
  description: string;
  imageUrl?: string;
  address: string;
  status: "pending" | "in_progress" | "resolved";
  categoryId?: {
    name?: string;
  };
  userId: string;
  createdAt: string;
  updatedAt: string;
}

type Report = {
  _id: string;
  title: string;
  status: "pending" | "in_progress" | "resolved";
  createdAt: string;
};

type User = {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
};

const RECENT_USERS_LIMIT = 5;
const RECENT_REPORTS_LIMIT = 4;
const TABLE_HEADERS = ["ID", "Title", "Status", "Date", "Action"];

const getInitials = (name: string) => {
  const parts = name.trim().split(" ");
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return parts[0][0].toUpperCase() + parts[1][0].toUpperCase();
};

export default function WorkerDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState<ReportCard | null>(null);

  const handleViewDetails = (report: ReportCard) => {
    setSelectedReport(report);
    setIsModalOpen(true);
  };

  const [reports, setReports] = useState<ReportCard[]>([]);
  const [recentUsers, setRecentUsers] = useState<User[]>([]);
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    inProgress: 0,
    resolved: 0,
  });

  const fetchUsers = useCallback(async () => {
    try {
      const res = await fetch("/api/function/user");
      const data = await res.json();

      if (res.ok) {
        const sorted = [...data].sort(
          (a: User, b: User) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
        setRecentUsers(sorted.slice(0, RECENT_USERS_LIMIT));
      } else {
        console.error("Failed to fetch users:", data.message);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }, []);

  const fetchReports = useCallback(async () => {
    try {
      const res = await fetch("/api/function/report");
      const data = await res.json();

      if (res.ok) {
        const reports = data.reports || [];
        setReports(reports);

        const statusCounts = reports.reduce(
          (
            acc: { pending: number; inProgress: number; resolved: number },
            report: Report,
          ) => {
            if (report.status === "pending") acc.pending++;
            else if (report.status === "in_progress") acc.inProgress++;
            else if (report.status === "resolved") acc.resolved++;
            return acc;
          },
          { pending: 0, inProgress: 0, resolved: 0 },
        );

        setStats({
          total: data.totalReports,
          ...statusCounts,
        });
      } else {
        console.error("Failed to fetch reports:", data.message);
      }
    } catch (error) {
      console.error("Error fetching reports:", error);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
    fetchReports();
  }, [fetchUsers, fetchReports]);

  const statCards = useMemo(
    () => [
      {
        title: "Total Reports",
        value: stats.total,
        bgColor: "bg-primary",
        textColor: "text-primary-foreground",
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
      },
      {
        title: "Pending",
        value: stats.pending,
        bgColor: "bg-yellow-200",
        textColor: "text-yellow-700",
        icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      },
      {
        title: "In Progress",
        value: stats.inProgress,
        bgColor: "bg-blue-200",
        textColor: "text-blue-700",
        icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
      },
      {
        title: "Resolved",
        value: stats.resolved,
        bgColor: "bg-green-200",
        textColor: "text-green-700",
        icon: "M5 13l4 4L19 7",
      },
    ],
    [stats],
  );

  const recentReports = useMemo(
    () => reports.slice(0, RECENT_REPORTS_LIMIT),
    [reports],
  );

  const processedUsers = useMemo(
    () =>
      recentUsers.map((user) => ({
        ...user,
        initials: getInitials(user.name),
        timestamp: new Date(user.createdAt).toLocaleString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          day: "numeric",
          month: "short",
        }),
      })),
    [recentUsers],
  );

  return (
    <>
      <PageHeader
        title="Worker Dashboard"
        description="Welcome back ! Here an overview of your current reports and activities."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statCards.map((stat) => (
          <Card
            key={stat.title}
            className="shadow-sm hover:shadow-md transition-shadow duration-150 border"
          >
            <CardContent className="p-5 flex items-center">
              <div
                className={`flex-shrink-0 ${stat.bgColor} rounded-full p-3 shadow-md`}
              >
                <svg
                  className={`h-6 w-6 ${stat.textColor}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={stat.icon}
                  />
                </svg>
              </div>
              <div className="ml-4 flex-1">
                <div className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                  {stat.title}
                </div>
                <div className="text-3xl font-bold text-foreground mt-1">
                  {stat.value}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="shadow-sm min-h-[400px] gap-0 max-h-[400px] overflow-hidden">
            <CardHeader className="border-b bg-muted/20 py-4 w-full flex">
              <CardTitle className="text-lg font-medium text-foreground">
                Recent Reports
              </CardTitle>
            </CardHeader>
            <CardContent className="overflow-auto scrollbar-hide px-0">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-background">
                    {TABLE_HEADERS.map((header) => (
                      <TableHead
                        key={header}
                        className="px-6 text-sm font-medium text-muted-foreground whitespace-nowrap"
                      >
                        {header}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentReports.map((report, index) => (
                    <TableRow
                      key={report._id}
                      className="hover:bg-muted/10 border-b"
                    >
                      <TableCell className="px-6 py-4 text-sm text-muted-foreground whitespace-nowrap truncate">
                        {"#" + String(index + 1).padStart(2, "0")}
                      </TableCell>
                      <TableCell className="px-6 py-4 text-sm font-medium text-foreground max-w-[250px] truncate">
                        <span title={report.title}>{report.title}</span>
                      </TableCell>
                      <TableCell className="px-6 py-4">
                        <StatusBadge status={report.status} />
                      </TableCell>
                      <TableCell className="px-6 py-4 text-sm text-muted-foreground whitespace-nowrap">
                        {new Date(report.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="px-6 py-4 text-sm whitespace-nowrap">
                        <button
                          onClick={() => handleViewDetails(report)}
                          className="text-primary hover:underline font-medium"
                        >
                          View Details
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {selectedReport && (
                <InfoReportModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  report={selectedReport}
                />
              )}
            </CardContent>
            <div className="px-6 py-4 bg-muted/10 border-t flex justify-end">
              <Button
                variant="outline"
                size="sm"
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                View All Reports
                <svg
                  className="ml-2 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="h-full min-h-[400px] gap-0 max-h-[400px] shadow-sm">
            <CardHeader className="border-b bg-muted/20 py-4 w-full flex">
              <CardTitle className="text-lg font-medium text-foreground">
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 overflow-y-auto scrollbar-hide">
              <ul className="divide-y divide-border">
                {processedUsers.map((user) => (
                  <li
                    key={user._id}
                    className="p-5 hover:bg-muted/10 transition-colors"
                  >
                    <div className="flex">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {user.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <p className="text-sm capitalize font-medium text-foreground">
                          {user.name}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Signed up with
                          <span className="font-medium text-primary ml-1">
                            {user.email}
                          </span>
                        </p>
                        <p className="text-xs text-muted-foreground/70 mt-2">
                          {user.timestamp}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

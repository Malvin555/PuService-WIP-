"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import PageHeader from "@/components/common/PageHeader";

type Report = {
  _id: string;
  title: string;
  status: "pending" | "in_progress" | "resolved";
  createdAt: string;
};

export default function WorkerDashboard() {
  const [reports, setReports] = useState<Report[]>([]);

  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    inProgress: 0,
    resolved: 0,
  });

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await fetch("/api/function/report");
        const data = await res.json();

        if (res.ok) {
          setReports(data.reports || []);

          const pending = data.reports.filter(
            (r: Report) => r.status === "pending",
          ).length;
          const inProgress = data.reports.filter(
            (r: Report) => r.status === "in_progress",
          ).length;
          const resolved = data.reports.filter(
            (r: Report) => r.status === "resolved",
          ).length;

          setStats({
            total: data.totalReports,
            pending,
            inProgress,
            resolved,
          });
        } else {
          console.error("Failed to fetch reports:", data.message);
        }
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };

    fetchReports();
  }, []);
  return (
    <>
      {/* Title */}
      <PageHeader
        title="Worker Dashboard"
        description="Welcome back ! Here an overview of your current reports and activities."
      />

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Total Reports */}
        <Card className="shadow-sm hover:shadow-md transition-shadow duration-150 border">
          <CardContent className="p-5 flex items-center">
            <div className="flex-shrink-0 bg-primary rounded-full p-3 shadow-md">
              <svg
                className="h-6 w-6 text-primary-foreground"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <div className="ml-4 flex-1">
              <div className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                Total Reports
              </div>
              <div className="text-3xl font-bold text-foreground mt-1">
                {stats.total}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pending Reports */}
        <Card className="shadow-sm hover:shadow-md transition-shadow duration-150 border">
          <CardContent className="p-5 flex items-center">
            <div className="flex-shrink-0 bg-yellow-200 rounded-full p-3 shadow-md">
              <svg
                className="h-6 w-6 text-yellow-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="ml-4 flex-1">
              <div className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                Pending
              </div>
              <div className="text-3xl font-bold text-foreground mt-1">
                {stats.pending}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* In Progress Reports */}
        <Card className="shadow-sm hover:shadow-md transition-shadow duration-150 border">
          <CardContent className="p-5 flex items-center">
            <div className="flex-shrink-0 bg-blue-200 rounded-full p-3 shadow-md">
              <svg
                className="h-6 w-6 text-blue-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <div className="ml-4 flex-1">
              <div className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                In Progress
              </div>
              <div className="text-3xl font-bold text-foreground mt-1">
                {stats.inProgress}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resolved Reports */}
        <Card className="shadow-sm hover:shadow-md transition-shadow duration-150 border">
          <CardContent className="p-5 flex items-center">
            <div className="flex-shrink-0 bg-green-200 rounded-full p-3 shadow-md">
              <svg
                className="h-6 w-6 text-green-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="ml-4 flex-1">
              <div className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                Resolved
              </div>
              <div className="text-3xl font-bold text-foreground mt-1">
                {stats.resolved}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Reports */}
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
                    {["ID", "Title", "Status", "Date", "Action"].map(
                      (header) => (
                        <TableHead
                          key={header}
                          className="px-6 text-sm font-medium text-muted-foreground whitespace-nowrap"
                        >
                          {header}
                        </TableHead>
                      ),
                    )}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reports.slice(0, 4).map((report, index) => (
                    <TableRow
                      key={report._id}
                      className="hover:bg-muted/10 border-b"
                    >
                      <TableCell className="px-6 py-4 text-sm text-muted-foreground whitespace-nowrap">
                        {"#" + String(index + 1).padStart(2, "0")}
                      </TableCell>
                      <TableCell className="px-6 py-4 text-sm font-medium text-foreground max-w-[250px] truncate">
                        <span title={report.title}>{report.title}</span>
                      </TableCell>
                      <TableCell className="px-6 py-4">
                        <Badge
                          className={`px-3 py-1 capitalize ${
                            report.status === "resolved"
                              ? "bg-green-200 text-green-700"
                              : report.status === "in_progress"
                                ? "bg-blue-200 text-blue-700"
                                : "bg-yellow-200 text-yellow-700"
                          }`}
                        >
                          {report.status.replace("_", " ")}
                        </Badge>
                      </TableCell>
                      <TableCell className="px-6 py-4 text-sm text-muted-foreground whitespace-nowrap">
                        {new Date(report.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="px-6 py-4 text-sm whitespace-nowrap">
                        <a
                          href={`/reports/${report._id}`}
                          className="text-primary hover:underline font-medium"
                        >
                          View Details
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
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

        {/* Activity Feeds */}
        <div className="lg:col-span-1">
          <Card className="h-full min-h-[400px] gap-0 max-h-[400px] shadow-sm">
            <CardHeader className="border-b bg-muted/20 py-4 w-full flex">
              <CardTitle className="text-lg font-medium text-foreground">
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 overflow-y-auto scrollbar-hide">
              <ul className="divide-y divide-border">
                {[
                  {
                    name: "John Doe",
                    initials: "JD",
                    message: "Submitted a new report:",
                    action: "Network connectivity issue",
                    timestamp: "2 minutes ago",
                  },
                  {
                    name: "Alice Smith",
                    initials: "AS",
                    message: "Updated status to:",
                    action: "In Progress",
                    timestamp: "45 minutes ago",
                  },
                  {
                    name: "Robert Brown",
                    initials: "RB",
                    message: "Created new ticket:",
                    action: "Application access issues",
                    timestamp: "2 hours ago",
                  },
                ].map((activity, index) => (
                  <li
                    key={index}
                    className="p-5 hover:bg-muted/10 transition-colors"
                  >
                    <div className="flex">
                      <Avatar className="h-10 w-10">
                        {/* Could use AvatarImage if available */}
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {activity.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-foreground">
                          {activity.name}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {activity.message}
                          <a
                            href="#"
                            className="font-medium text-primary ml-1 hover:underline"
                          >
                            {activity.action}
                          </a>
                        </p>
                        <p className="text-xs text-muted-foreground/70 mt-2">
                          {activity.timestamp}
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

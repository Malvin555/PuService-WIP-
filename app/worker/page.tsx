import { getUserReports } from "@/lib/getReport";
import InfoCard from "@/components/common/dashboard/InfoCard";
import PageHeader from "@/components/common/PageHeader";
import RecentReportTable from "@/components/common/dashboard/RecentReportTable";
import RecentCard from "@/components/common/dashboard/RecentCard";
import User from "@/models/User";
import { connectToMongoDB } from "@/lib/db";

// Define UserType interface
interface UserType {
  _id: string;
  name: string;
  email: string;
  createdAt: Date;
}

export default async function WorkerDashboardPage() {
  const reports = await getUserReports();
  const recentReports = await getUserReports({ limit: 4, includeUser: true });

  // Stats Card Logic
  const stats = {
    total: reports.length,
    pending: reports.filter((r: { status: string }) => r.status === "pending")
      .length,
    in_progress: reports.filter(
      (r: { status: string }) => r.status === "in_progress",
    ).length,
    resolved: reports.filter((r: { status: string }) => r.status === "resolved")
      .length,
  };

  const statCards = [
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
      value: stats.in_progress,
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
  ];

  await connectToMongoDB();

  const users = await User.find().lean<UserType[]>();

  const userActivities = users
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .slice(0, 5)
    .map((user) => ({
      _id: user._id.toString(),
      name: user.name,
      email: user.email,
      initials: user.name
        .split(" ")
        .map((n) => n[0])
        .join(""),
      timestamp: new Date(user.createdAt).toLocaleString("id-ID", {
        dateStyle: "medium",
        timeStyle: "short",
      }),
    }));

  return (
    <>
      <PageHeader
        title="Worker Dashboard"
        description="Welcome back! Here's an overview of your current reports and activities."
      />
      <InfoCard statCards={statCards} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RecentReportTable reports={recentReports} />
        <RecentCard users={userActivities} />
      </div>
    </>
  );
}

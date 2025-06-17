import Link from "next/link";
import {
  PlusIcon,
  ClockIcon,
  BellIcon,
  UserIcon,
  ChevronRightIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";
import { getCurrentUser } from "@/lib/getCurrentUser";
import { getUserReports } from "@/lib/getReport";
import PageHeader from "@/components/common/PageHeader";
import ReportCard from "@/components/common/user/report/ReportCard";

export const metadata = {
  title: "PuService - User Dashboard",
  description: "User dashboard page",
};

interface UserReport {
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

export default async function UserPage() {
  const user = await getCurrentUser();
  const recentReports = await getUserReports({ userId: user!.id, limit: 3 });

  return (
    <>
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <PageHeader
            title={`Welcome back, ${user?.name ?? "Guest"}!`}
            description="Manage your reports, track updates, and stay informed with
              PuService. Your one-stop dashboard for submitting new reports,
              viewing history, and keeping your information up to date."
          />

          {/* Quick Actions */}
          <>
            <h2 className="text-xl font-semibold text-foreground mb-5">
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
              <Link href="user/reports/new" className="block group">
                <div className="bg-card overflow-hidden shadow-sm rounded-lg border border-border hover:border-primary transition-colors duration-200">
                  <div className="px-4 py-5 sm:p-6 text-center">
                    <div className="mx-auto inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                      <PlusIcon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-foreground">
                      Send Report
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Submit a new report or incident
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/user/reports/history" className="block group">
                <div className="bg-card overflow-hidden shadow-sm rounded-lg border border-border hover:border-primary transition-colors duration-200">
                  <div className="px-4 py-5 sm:p-6 text-center">
                    <div className="mx-auto inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                      <ClockIcon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-foreground">
                      View History
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      See all your past reports
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/user/notifications" className="block group">
                <div className="bg-card overflow-hidden shadow-sm rounded-lg border border-border hover:border-primary transition-colors duration-200">
                  <div className="px-4 py-5 sm:p-6 text-center">
                    <div className="mx-auto inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                      <BellIcon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-foreground">
                      Notifications
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Check your latest updates
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="user/profile" className="block group">
                <div className="bg-card overflow-hidden shadow-sm rounded-lg border border-border hover:border-primary transition-colors duration-200">
                  <div className="px-4 py-5 sm:p-6 text-center">
                    <div className="mx-auto inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                      <UserIcon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-foreground">
                      Edit Profile
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Update your account details
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </>

          {/* Recent Report */}
          <>
            <h2 className="text-xl font-semibold text-foreground mb-5">
              Recent Reports
            </h2>
            {recentReports.length === 0 ? (
              <Card className="bg-background shadow-sm rounded-md border border-border py-4">
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    No reports submitted yet.
                  </p>
                </CardContent>
              </Card>
            ) : (
              recentReports.map((report: UserReport) => (
                <ReportCard key={report._id} report={report} />
              ))
            )}
          </>

          {/* View All Reports Button */}
          <div className="text-center m-5">
            <Link href="/user/reports/history">
              <Button className="inline-flex items-center px-4 py-2 border border-input shadow-sm text-sm font-medium rounded-md text-foreground bg-card hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                View All Reports
                <ChevronRightIcon className="ml-2 -mr-1 h-5 w-5 text-muted-foreground" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

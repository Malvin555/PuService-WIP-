import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Info, CheckCircle, AlertTriangle, Bell, ThumbsUp } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";

export default function NotificationsPage() {
  return (
    <>
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <PageHeader
            title="Notifications"
            description="Stay updated on your reports and service announcements"
          />

          <Card className="w-full shadow-md">
            <CardHeader>
              <CardTitle>Recent Notifications</CardTitle>
            </CardHeader>
            <ul className="divide-y">
              <li className="hover:bg-accent transition-colors">
                <div className="p-4 sm:p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div className="flex items-start sm:items-center">
                      <Avatar className="bg-primary h-8 w-8 flex-shrink-0 flex items-center justify-center">
                        <Info className="h-5 w-5 text-primary-foreground" />
                      </Avatar>
                      <div className="ml-3">
                        <p className="text-sm font-medium">
                          Your report Pothole Repair has been updated to In
                          Progress
                        </p>
                        <p className="text-sm text-muted-foreground">
                          A maintenance crew has been assigned to your report.
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-0 sm:ml-4 flex-shrink-0">
                      <p className="text-sm text-muted-foreground">
                        5 minutes ago
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="hover:bg-accent/50 transition-colors">
                <div className="p-4 sm:p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div className="flex items-start sm:items-center">
                      <Avatar className="bg-primary h-8 w-8 flex-shrink-0 flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-primary-foreground" />
                      </Avatar>
                      <div className="ml-3">
                        <p className="text-sm font-medium">
                          Your report Street Light Outage has been resolved
                        </p>
                        <p className="text-sm text-muted-foreground">
                          The issue has been fixed. Please let us know if you
                          have any further concerns.
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-0 sm:ml-4 flex-shrink-0">
                      <p className="text-sm text-muted-foreground">
                        2 hours ago
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="hover:bg-accent/50 transition-colors">
                <div className="p-4 sm:p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div className="flex items-start sm:items-center">
                      <Avatar className="bg-chart-5 h-8 w-8 flex-shrink-0 flex items-center justify-center">
                        <AlertTriangle className="h-5 w-5 text-primary-foreground" />
                      </Avatar>
                      <div className="ml-3">
                        <p className="text-sm font-medium">
                          Scheduled maintenance in your area
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Water service will be temporarily interrupted on Oak
                          Avenue on March 15 from 9 AM to 12 PM.
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-0 sm:ml-4 flex-shrink-0">
                      <p className="text-sm text-muted-foreground">Yesterday</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="hover:bg-accent/50 transition-colors">
                <div className="p-4 sm:p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div className="flex items-start sm:items-center">
                      <Avatar className="bg-destructive h-8 w-8 flex-shrink-0 flex items-center justify-center">
                        <Bell className="h-5 w-5 text-destructive-foreground" />
                      </Avatar>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-primary-foreground">
                          New feature: Report Sharing
                        </p>
                        <p className="text-sm text-muted-foreground">
                          You can now share your reports with other citizens or
                          community groups.
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-0 sm:ml-4 flex-shrink-0">
                      <p className="text-sm text-muted-foreground">
                        3 days ago
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="hover:bg-accent/50 transition-colors">
                <div className="p-4 sm:p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div className="flex items-start sm:items-center">
                      <Avatar className="bg-primary h-8 w-8 flex-shrink-0 flex items-center justify-center">
                        <ThumbsUp className="h-5 w-5 text-primary-foreground" />
                      </Avatar>
                      <div className="ml-3">
                        <p className="text-sm font-medium">
                          Thank you for your feedback
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Your suggestions have been forwarded to the relevant
                          department.
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-0 sm:ml-4 flex-shrink-0">
                      <p className="text-sm text-muted-foreground">
                        1 week ago
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <CardFooter className=" flex justify-center p-4">
              <Button variant="outline" className="w-full sm:w-auto">
                Load more notifications
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}

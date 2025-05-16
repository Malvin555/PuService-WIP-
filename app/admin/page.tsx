import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import {
  Plus,
  Users,
  FolderPlus,
  Printer,
  PieChart,
  BarChart,
  CheckCircleIcon,
  ClockIcon,
  FileTextIcon,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

export default function AdminDashboard() {
  return (
    <>
      {/* Title */}
      <PageHeader
        title="Admin Dashboard"
        description="Manage users, reports, and site content from the admin dashboard."
      />

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Total Reports */}
        <Card className="shadow-sm hover:shadow-md transition-shadow duration-150 border">
          <CardContent className="p-5 flex items-center">
            <div className="flex-shrink-0 bg-primary rounded-full p-3 shadow-md">
              <FileTextIcon className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="ml-4 flex-1">
              <div className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                Total Reports
              </div>
              <div className="text-3xl font-bold text-foreground mt-1">100</div>
            </div>
          </CardContent>
        </Card>

        {/* Total Users */}
        <Card className="shadow-sm hover:shadow-md transition-shadow duration-150 border">
          <CardContent className="p-5 flex items-center">
            <div className="flex-shrink-0 bg-primary/20 rounded-full p-3 shadow-md">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div className="ml-4 flex-1">
              <div className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                Total Users
              </div>
              <div className="text-3xl font-bold text-foreground mt-1">250</div>
            </div>
          </CardContent>
        </Card>

        {/* In Progress Reports */}
        <Card className="shadow-sm hover:shadow-md transition-shadow duration-150 border">
          <CardContent className="p-5 flex items-center">
            <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 shadow-md">
              <ClockIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4 flex-1">
              <div className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                In Progress
              </div>
              <div className="text-3xl font-bold text-foreground mt-1">90</div>
            </div>
          </CardContent>
        </Card>

        {/* Resolved Reports */}
        <Card className="shadow-sm hover:shadow-md transition-shadow duration-150 border">
          <CardContent className="p-5 flex items-center">
            <div className="flex-shrink-0 bg-green-100 rounded-full p-3 shadow-md">
              <CheckCircleIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4 flex-1">
              <div className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                Resolved
              </div>
              <div className="text-3xl font-bold text-foreground mt-1">80</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Content */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left side (charts) */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Reports by Status */}
            <Card className="shadow-sm gap-0">
              <CardHeader className="py-4">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <PieChart className="h-5 w-5 text-primary" />
                  Reports by Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] w-full flex flex-col justify-center space-y-5 py-2 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-primary"></div>
                        <span>Open</span>
                      </div>
                      <span className="font-medium">20%</span>
                    </div>
                    <Progress value={20} className="h-2 w-full bg-primary/20" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                        <span>In Progress</span>
                      </div>
                      <span className="font-medium">45%</span>
                    </div>
                    <Progress value={45} className="h-2 w-full bg-blue-100" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        <span>Resolved</span>
                      </div>
                      <span className="font-medium">35%</span>
                    </div>
                    <Progress value={35} className="h-2 w-full bg-green-100" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reports by Category */}
            <Card className="shadow-sm gap-0">
              <CardHeader className="py-4">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-primary" />
                  Reports by Category
                </CardTitle>
              </CardHeader>
              <CardContent className="overflow-y-auto pb-6 lg:pb-0">
                <Tabs defaultValue="chart" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4 bg-secondary ">
                    <TabsTrigger value="chart">Chart</TabsTrigger>
                    <TabsTrigger value="table">Table</TabsTrigger>
                  </TabsList>
                  <TabsContent
                    value="chart"
                    className="flex items-center justify-center"
                  >
                    <div className=" w-full space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Maintenance</span>
                          <span className="font-medium">40</span>
                        </div>
                        <div className="w-full h-6 bg-secondary rounded overflow-hidden">
                          <div
                            className="bg-primary h-full"
                            style={{ width: "40%" }}
                          ></div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Safety</span>
                          <span className="font-medium">32</span>
                        </div>
                        <div className="w-full h-6 bg-secondary rounded overflow-hidden">
                          <div
                            className="bg-blue-500 h-full"
                            style={{ width: "32%" }}
                          ></div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Security</span>
                          <span className="font-medium">28</span>
                        </div>
                        <div className="w-full h-6 bg-secondary rounded overflow-hidden">
                          <div
                            className="bg-green-500 h-full"
                            style={{ width: "28%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="table">
                    <div className="text-sm">
                      <div className="grid grid-cols-3 font-medium pb-2 border-b">
                        <div>Category</div>
                        <div className="text-center">Count</div>
                        <div className="text-right">Percentage</div>
                      </div>
                      <div className="grid grid-cols-3 py-2 border-b">
                        <div>Maintenance</div>
                        <div className="text-center">40</div>
                        <div className="text-right">40%</div>
                      </div>
                      <div className="grid grid-cols-3 py-2 border-b">
                        <div>Safety</div>
                        <div className="text-center">32</div>
                        <div className="text-right">32%</div>
                      </div>
                      <div className="grid grid-cols-3 py-2">
                        <div>Security</div>
                        <div className="text-center">28</div>
                        <div className="text-right">28%</div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <Card className="shadow-sm gap-0 h-full">
              <CardHeader className="py-4 border-b">
                <CardTitle className="text-lg font-medium">
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="grid gap-3">
                  <Link
                    href="/admin/reports"
                    className="flex items-center p-3 bg-secondary/50 hover:bg-secondary transition-colors duration-200 rounded-lg"
                  >
                    <div className="flex-shrink-0 h-10 w-10 rounded-md bg-primary flex items-center justify-center text-primary-foreground">
                      <Plus className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-foreground">
                        Create Report
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Add a new incident report
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/admin/users"
                    className="flex items-center p-3 bg-secondary/50 hover:bg-secondary transition-colors duration-200 rounded-lg"
                  >
                    <div className="flex-shrink-0 h-10 w-10 rounded-md bg-primary flex items-center justify-center text-primary-foreground">
                      <Users className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-foreground">
                        Add User
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Create new user account
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/admin/categories"
                    className="flex items-center p-3 bg-secondary/50 hover:bg-secondary transition-colors duration-200 rounded-lg"
                  >
                    <div className="flex-shrink-0 h-10 w-10 rounded-md bg-primary flex items-center justify-center text-primary-foreground">
                      <FolderPlus className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-foreground">
                        Add Category
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Create new report category
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/admin/reports/print"
                    className="flex items-center p-3 bg-secondary/50 hover:bg-secondary transition-colors duration-200 rounded-lg"
                  >
                    <div className="flex-shrink-0 h-10 w-10 rounded-md bg-primary flex items-center justify-center text-primary-foreground">
                      <Printer className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-foreground">
                        Print Reports
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Generate printable reports
                      </p>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

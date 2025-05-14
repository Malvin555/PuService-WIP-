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

export default function Page() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">Worker Dashboard</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Welcome back! Here an overview of your current reports and activities.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card className="shadow-sm hover:shadow transition-shadow duration-200">
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-primary rounded-md p-3">
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
              <div className="ml-5 w-full flex-1">
                <dl>
                  <dt className="text-sm font-medium text-muted-foreground truncate">
                    Total Reports
                  </dt>
                  <dd className="flex items-baseline mt-2">
                    <div className="text-2xl font-semibold text-foreground">
                      100
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow transition-shadow duration-200">
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-yellow-100 rounded-md p-3">
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
              <div className="ml-5 w-full flex-1">
                <dl>
                  <dt className="text-sm font-medium text-muted-foreground truncate">
                    Pending
                  </dt>
                  <dd className="flex items-baseline mt-2">
                    <div className="text-2xl font-semibold text-foreground">
                      29
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow transition-shadow duration-200">
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
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
              <div className="ml-5 w-full flex-1">
                <dl>
                  <dt className="text-sm font-medium text-muted-foreground truncate">
                    In Progress
                  </dt>
                  <dd className="flex items-baseline mt-2">
                    <div className="text-2xl font-semibold text-foreground ">
                      90
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow transition-shadow duration-200">
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-primary rounded-md p-3">
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="ml-5 w-full flex-1">
                <dl>
                  <dt className="text-sm font-medium text-muted-foreground truncate">
                    Resolved
                  </dt>
                  <dd className="flex items-baseline mt-2">
                    <div className="text-2xl font-semibold text-foreground">
                      80
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Reports */}
        <div className="lg:col-span-2">
          <Card className="shadow-sm overflow-hidden">
            <CardHeader className="border-b py-4 px-6 bg-muted/20">
              <CardTitle className="text-lg font-medium text-foreground">
                Recent Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-muted/10">
                      <TableHead className="px-6 text-sm font-medium text-muted-foreground">
                        ID
                      </TableHead>
                      <TableHead className="px-6 text-sm font-medium text-muted-foreground">
                        Title
                      </TableHead>
                      <TableHead className="px-6 text-sm font-medium text-muted-foreground">
                        Status
                      </TableHead>
                      <TableHead className="px-6 text-sm font-medium text-muted-foreground">
                        Date
                      </TableHead>
                      <TableHead className="px-6 text-sm font-medium text-muted-foreground">
                        Action
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="hover:bg-muted/10 border-b">
                      <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                        #01
                      </TableCell>
                      <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground max-w-xs truncate">
                        Network connectivity issue
                      </TableCell>
                      <TableCell className="px-6 py-4 whitespace-nowrap">
                        <Badge className="px-3 py-1">Resolved</Badge>
                      </TableCell>
                      <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                        2024-01-05
                      </TableCell>
                      <TableCell className="px-6 py-4 whitespace-nowrap text-sm">
                        <a
                          href="#"
                          className="text-sm text-primary hover:text-primary/80 font-medium"
                        >
                          View Details
                        </a>
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-muted/10 border-b">
                      <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                        #02
                      </TableCell>
                      <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground max-w-xs truncate">
                        Database performance degradation
                      </TableCell>
                      <TableCell className="px-6 py-4 whitespace-nowrap">
                        <Badge className="px-3 py-1">In Progress</Badge>
                      </TableCell>
                      <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                        2024-01-10
                      </TableCell>
                      <TableCell className="px-6 py-4 whitespace-nowrap text-sm">
                        <a
                          href="#"
                          className="text-sm text-primary hover:text-primary/80 font-medium"
                        >
                          View Details
                        </a>
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-muted/10 border-b">
                      <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                        #03
                      </TableCell>
                      <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground max-w-xs truncate">
                        Server patch required
                      </TableCell>
                      <TableCell className="px-6 py-4 whitespace-nowrap">
                        <Badge variant="secondary" className="px-3 py-1">
                          Pending
                        </Badge>
                      </TableCell>
                      <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                        2024-01-15
                      </TableCell>
                      <TableCell className="px-6 py-4 whitespace-nowrap text-sm">
                        <a
                          href="#"
                          className="text-sm text-primary hover:text-primary/80 font-medium"
                        >
                          View Details
                        </a>
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-muted/10">
                      <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                        #04
                      </TableCell>
                      <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground max-w-xs truncate">
                        Application access issues
                      </TableCell>
                      <TableCell className="px-6 py-4 whitespace-nowrap">
                        <Badge variant="destructive" className="px-3 py-1">
                          Critical
                        </Badge>
                      </TableCell>
                      <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                        2024-01-18
                      </TableCell>
                      <TableCell className="px-6 py-4 whitespace-nowrap text-sm">
                        <a
                          href="#"
                          className="text-sm text-primary hover:text-primary/80 font-medium"
                        >
                          View Details
                        </a>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <div className="px-6 py-4 bg-muted/10 border-t flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  className="inline-flex items-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  View All Reports
                  <svg
                    className="ml-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Activity Feeds */}
        <div className="lg:col-span-1">
          <Card className="h-full shadow-sm">
            <CardHeader className="border-b py-4 px-6 bg-muted/20">
              <CardTitle className="text-lg font-medium text-foreground">
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="overflow-y-auto p-0 max-h-[500px]">
              <ul className="divide-y divide-border">
                <li className="p-5 hover:bg-muted/10 transition-colors">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Avatar className="h-10 w-10 border-2 border-primary/10">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          JD
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-foreground">
                        John Doe
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Submitted a new report:
                        <a
                          href="#"
                          className="font-medium text-primary ml-1 hover:underline"
                        >
                          Network connectivity issue
                        </a>
                      </p>
                      <p className="text-xs text-muted-foreground/70 mt-2">
                        2 Minutes Ago
                      </p>
                    </div>
                  </div>
                </li>
                <li className="p-5 hover:bg-muted/10 transition-colors">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Avatar className="h-10 w-10 border-2 border-primary/10">
                        <AvatarFallback className="bg-secondary text-secondary-foreground">
                          AS
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-foreground">
                        Alice Smith
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Updated status to:
                        <span className="font-medium text-warning ml-1">
                          In Progress
                        </span>
                      </p>
                      <p className="text-xs text-muted-foreground/70 mt-2">
                        45 Minutes Ago
                      </p>
                    </div>
                  </div>
                </li>
                <li className="p-5 hover:bg-muted/10 transition-colors">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Avatar className="h-10 w-10 border-2 border-primary/10">
                        <AvatarFallback className="bg-destructive text-destructive-foreground">
                          RB
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-foreground">
                        Robert Brown
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Created new ticket:
                        <a
                          href="#"
                          className="font-medium text-primary ml-1 hover:underline"
                        >
                          Application access issues
                        </a>
                      </p>
                      <p className="text-xs text-muted-foreground/70 mt-2">
                        2 Hours Ago
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

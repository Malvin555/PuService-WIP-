import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import {
  FilterIcon,
  SearchIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  CircleIcon as InformationCircleIcon,
  CalendarIcon,
} from "lucide-react";
import PageHeader from "@/components/common/PageHeader";
import { getCurrentUser } from "@/lib/getCurrentUser";
import { getUserReports } from "@/lib/getUserReport";

interface UserReport {
  _id: string;
  title: string;
  status: string;
  address: string;
  createdAt: string;
  categoryId?: {
    name?: string;
  };
}

export default async function ReportHistoryPage() {
  const user = await getCurrentUser();
  const recentReports = await getUserReports(user!.id, 5);
  return (
    <>
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <PageHeader
            title="Your Report History"
            description="Track the status of all your submitted reports."
          />

          {/* Filters */}
          <Card className="bg-background shadow-md rounded-lg border border-border mb-6">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="status-filter"
                    className="text-sm font-medium text-foreground mb-2 flex items-center gap-2"
                  >
                    <FilterIcon className="text-muted-foreground" />
                    Status
                  </label>
                  <Select>
                    <SelectTrigger id="status-filter" className="w-full">
                      <SelectValue placeholder="All Statuses" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="resolved">Resolved</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label
                    htmlFor="type-filter"
                    className="text-sm font-medium text-foreground mb-2 flex items-center gap-2"
                  >
                    <FilterIcon className="text-muted-foreground" />
                    Type
                  </label>
                  <Select>
                    <SelectTrigger id="type-filter" className="w-full">
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="category-1">Category 1</SelectItem>
                      <SelectItem value="category-2">Category 2</SelectItem>
                      <SelectItem value="category-3">Category 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label
                    htmlFor="search"
                    className="text-sm font-medium text-foreground mb-2 flex items-center gap-2"
                  >
                    <SearchIcon className="text-muted-foreground" />
                    Search
                  </label>
                  <Input
                    type="text"
                    id="search"
                    className="w-full"
                    placeholder="Search reports..."
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Reports List */}
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
              <Card
                key={report._id}
                className="bg-background shadow-sm rounded-md border border-border hover:bg-muted-foreground/10 transition-colors py-4 mb-4"
              >
                <CardContent>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-primary truncate">
                      {report.title}
                    </p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <span className="px-2 capitalize inline-flex text-xs leading-5 font-semibold rounded-full">
                        {report.status}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-muted-foreground">
                        <MapPinIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-muted-foreground" />
                        {report.address}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-muted-foreground sm:mt-0 sm:ml-6">
                        <InformationCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-muted-foreground" />
                        {report.categoryId?.name ?? "Uncategorized"}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-muted-foreground sm:mt-0">
                      <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-muted-foreground" />
                      <p>
                        Submitted on{" "}
                        <time>
                          {new Date(report.createdAt).toLocaleDateString()}
                        </time>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}

          {/* Pagination */}
          <nav className="flex items-center justify-between border-t border-border mt-6 pt-4">
            <Button
              variant="ghost"
              className="text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-50 flex items-center gap-2"
              disabled
            >
              <ChevronLeftIcon />
              Previous
            </Button>
            <div className="flex space-x-2">
              <Button
                variant="default"
                className="px-4 py-2 text-sm font-medium"
              >
                1
              </Button>
              <Button
                variant="ghost"
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                2
              </Button>
              <Button
                variant="ghost"
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                3
              </Button>
            </div>
            <Button
              variant="ghost"
              className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-2"
            >
              Next
              <ChevronRightIcon />
            </Button>
          </nav>
        </div>
      </div>
    </>
  );
}

import Nav from "@/components/layout/user/nav";
import Footer from "@/components/layout/landing/footer";
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

export default function ReportHistoryPage() {
  return (
    <>
      <Nav />
      <div className="pt-16">
        <div className="container mx-auto px-4 py-10">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">
              Your Report History
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Track the status of all your submitted reports.
            </p>
          </div>

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
          <Card className="bg-background shadow-sm rounded-md border border-border hover:bg-muted-foreground/10 transition-colors">
            <CardContent>
              <ul className="divide-y divide-border">
                <li className="rounded-md">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-primary truncate">
                      Report Title
                    </p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                        Resolved
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-muted-foreground">
                        <MapPinIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-muted-foreground" />
                        123 Main Street
                      </p>
                      <p className="mt-2 flex items-center text-sm text-muted-foreground sm:mt-0 sm:ml-6">
                        <InformationCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-muted-foreground" />
                        Category Name
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-muted-foreground sm:mt-0">
                      <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-muted-foreground" />
                      <p>
                        Submitted on <time>Jan 1, 2023</time>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

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
      <Footer />
    </>
  );
}

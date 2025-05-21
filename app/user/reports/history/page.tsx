import Link from "next/link";
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
} from "lucide-react";
import PageHeader from "@/components/common/PageHeader";
import { getCurrentUser } from "@/lib/getCurrentUser";
import ReportCard from "@/components/common/user/report/ReportCard";

interface ReportCard {
  _id: string;
  title: string;
  description: string;
  imageUrl?: string;
  address: string;
  status: "pending" | "in-progress" | "resolved";
  categoryId?: {
    name?: string;
  };
  userId: string;
  createdAt: string;
  updatedAt: string;
}

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export default async function ReportHistoryPage({ searchParams }: Props) {
  const user = await getCurrentUser();
  const params = await searchParams;

  if (!user)
    return (
      <p className="p-4 text-center text-red-600 font-semibold">
        You must be logged in.
      </p>
    );

  const page = parseInt(params.page ?? "1", 10);
  const limit = 3;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/function/report?userId=${user.id}&page=${page}&limit=${limit}`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    return (
      <p className="p-4 text-center text-red-600 font-semibold">
        Failed to load reports.
      </p>
    );
  }

  const data = await res.json();

  const reports = data.reports || [];
  const totalPages = data.totalPages || 1;

  return (
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

        {reports.length === 0 ? (
          <Card className="bg-background shadow-sm rounded-md border border-border py-4">
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                No reports submitted yet.
              </p>
            </CardContent>
          </Card>
        ) : (
          <>
            {reports.map((report: ReportCard) => (
              <ReportCard key={report._id} report={report} />
            ))}
          </>
        )}

        {/* Pagination */}
        <nav className="flex items-center justify-between border-t border-border mt-6 pt-4">
          <Link
            href={`/user/reports/history?page=${page - 1}`}
            scroll={false}
            className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg ${
              page <= 1
                ? "text-muted-foreground cursor-not-allowed opacity-50"
                : "text-foreground hover:bg-gray-100"
            }`}
            aria-disabled={page <= 1}
            tabIndex={page <= 1 ? -1 : 0}
          >
            <ChevronLeftIcon />
            Previous
          </Link>

          <div className="flex space-x-2">
            {[...Array(totalPages)].map((_, i) => {
              const pageNum = i + 1;
              return (
                <Link
                  key={i}
                  href={`/user/reports/history?page=${pageNum}`}
                  scroll={false}
                  className={`px-4 py-2 text-sm font-medium rounded-lg ${
                    page === pageNum
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-gray-100"
                  }`}
                >
                  {pageNum}
                </Link>
              );
            })}
          </div>

          <Link
            href={`/user/reports/history?page=${page + 1}`}
            scroll={false}
            className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg ${
              page >= totalPages
                ? "text-muted-foreground cursor-not-allowed opacity-50"
                : "text-foreground hover:bg-gray-100"
            }`}
            aria-disabled={page >= totalPages}
            tabIndex={page >= totalPages ? -1 : 0}
          >
            Next
            <ChevronRightIcon />
          </Link>
        </nav>
      </div>
    </div>
  );
}

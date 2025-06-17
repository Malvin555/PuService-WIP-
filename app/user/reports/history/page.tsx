import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";
import { getCurrentUser } from "@/lib/getCurrentUser";
import ReportCard from "@/components/common/user/report/ReportCard";
import ReportFilter from "@/components/common/user/report/ReportFilter";

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

interface Props {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function ReportHistoryPage({ searchParams }: Props) {
  const params = await searchParams;

  const user = await getCurrentUser();

  if (!user) {
    return (
      <p className="p-4 text-center text-red-600 font-semibold">
        You must be logged in.
      </p>
    );
  }

  // Access params as object properties (string | string[] | undefined)
  const page = parseInt(
    Array.isArray(params.page) ? params.page[0] : (params.page ?? "1"),
    10,
  );
  const status = Array.isArray(params.status)
    ? params.status[0]
    : params.status || "";
  const category = Array.isArray(params.category)
    ? params.category[0]
    : params.category || "";
  const search = Array.isArray(params.search)
    ? params.search[0]
    : params.search || "";

  const limit = 3;

  const queryParams = new URLSearchParams({
    userId: user.id,
    page: page.toString(),
    limit: limit.toString(),
  });

  if (status && status !== "all") queryParams.set("status", status);
  if (category && category !== "all") queryParams.set("category", category);
  if (search.trim()) queryParams.set("search", search.trim());

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/function/report?${queryParams.toString()}`,
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

        <ReportFilter />

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
            href={`/user/reports/history?${queryParams.toString().replace(/page=\d+/, `page=${page - 1}`)}`}
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
                  href={`/user/reports/history?${queryParams.toString().replace(/page=\d+/, `page=${pageNum}`)}`}
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
            href={`/user/reports/history?${queryParams.toString().replace(/page=\d+/, `page=${page + 1}`)}`}
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

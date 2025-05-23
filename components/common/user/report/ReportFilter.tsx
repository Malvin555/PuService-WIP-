"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { FilterIcon, SearchIcon } from "lucide-react";

interface Category {
  _id: string;
  name: string;
}

export default function ReportFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [categories, setCategories] = useState<Category[]>([]);
  const [status, setStatus] = useState(searchParams.get("status") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [search, setSearch] = useState(searchParams.get("search") || "");

  // Fetch categories
  useEffect(() => {
    fetch("/api/function/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // Automatically apply filters when status, category, or search changes
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const params = new URLSearchParams();

      if (status && status !== "all") params.set("status", status);
      if (category && category !== "all") params.set("category", category);
      if (search.trim()) params.set("search", search.trim());

      params.set("page", "1"); // Always reset page to 1 when filtering

      router.push(`/user/reports/history?${params.toString()}`, {
        scroll: false,
      });
    }, 400); // debounce delay

    return () => clearTimeout(delayDebounce);
  }, [status, category, search, router]);

  return (
    <Card className="bg-background shadow-md rounded-lg border border-border mb-6">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Status Filter */}
          <div>
            <label
              htmlFor="status-filter"
              className="text-sm font-medium text-foreground mb-2 flex items-center gap-2"
            >
              <FilterIcon className="text-muted-foreground" />
              Status
            </label>
            <Select value={status} onValueChange={setStatus}>
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

          {/* Category Filter */}
          <div>
            <label
              htmlFor="type-filter"
              className="text-sm font-medium text-foreground mb-2 flex items-center gap-2"
            >
              <FilterIcon className="text-muted-foreground" />
              Type
            </label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger id="type-filter" className="w-full">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat._id} value={cat._id}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Search Input */}
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export const metadata = {
  title: "PuService - New Report",
  description: "Create a new service report",
};

export default function NewReportPage() {
  return (
    <>
      <main className="pt-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-primary">
              Submit a New Report
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Please provide details about the issue you&apos;d like to report.
            </p>
          </header>

          <div className="bg-background shadow-md rounded-lg border border-border mb-10">
            <div className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="category_id">Report Type</Label>
                    <Select>
                      <SelectTrigger
                        id="category_id"
                        name="category_id"
                        className="w-full"
                      >
                        <SelectValue placeholder="Select a report type" />
                      </SelectTrigger>
                      <SelectContent>
                        {["Category 1", "Category 2", "Category 3"].map(
                          (category, index) => (
                            <SelectItem
                              key={index}
                              value={`category${index + 1}`}
                            >
                              {category}
                            </SelectItem>
                          ),
                        )}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      type="text"
                      name="title"
                      id="title"
                      placeholder="Brief description of the issue"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    type="text"
                    name="address"
                    id="location"
                    placeholder="Address or location description"
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    rows={4}
                    placeholder="Detailed description of the issue"
                    className="w-full"
                  />
                  <p className="mt-2 text-sm text-muted-foreground">
                    Please provide as much detail as possible.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="file-upload">Photos (optional)</Label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-border rounded-md">
                    <div className="text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-muted-foreground"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-muted-foreground">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-background rounded-md font-medium text-primary hover:text-primary-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"
                        >
                          <span>Upload files</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            multiple
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-3">
                  <Button variant="outline" type="button">
                    <Link href="/user">Cancel</Link>
                  </Button>
                  <Button type="submit">Submit Report</Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

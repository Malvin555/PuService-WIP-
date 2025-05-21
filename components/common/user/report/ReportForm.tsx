"use client";

import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface Category {
  _id: string;
  name: string;
}

interface FormReportProps {
  userId: string;
}

interface FormState {
  categoryId: string;
  title: string;
  description: string;
  imageUrl: string;
  address: string;
}

export default function FormReport({ userId }: FormReportProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [form, setForm] = useState<FormState>({
    categoryId: "",
    title: "",
    description: "",
    imageUrl: "",
    address: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    axios
      .get<Category[]>("/api/function/category")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Failed to load categories", err));
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { categoryId, title, description, address } = form;
    if (!categoryId || !title || !description || !address) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      let imageUrl = form.imageUrl;

      if (imageFile) {
        const imageForm = new FormData();
        imageForm.append("image", imageFile);

        const uploadRes = await axios.post(
          "/api/function/report/upload",
          imageForm,
        );
        imageUrl = uploadRes.data.imageUrl;
      }

      await axios.post("/api/function/report", {
        userId,
        ...form,
        imageUrl,
      });

      alert("Report submitted!");

      // Reset form if needed
      setForm({
        categoryId: "",
        title: "",
        description: "",
        imageUrl: "",
        address: "",
      });
      setImageFile(null);
    } catch (error: unknown) {
      // Improved error typing
      let message = "Failed to submit report.";
      if (axios.isAxiosError(error)) {
        message += error.response?.data?.message
          ? ` ${error.response.data.message}`
          : "";
      } else if (error instanceof Error) {
        message += ` ${error.message}`;
      }
      alert(message);
      console.error("Submit Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background shadow-md rounded-lg border border-border mb-10">
      <div className="p-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="categoryId">Report Type</Label>
              <Select
                value={form.categoryId}
                onValueChange={(value) =>
                  setForm((prev) => ({ ...prev, categoryId: value }))
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a report type" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(({ _id, name }) => (
                    <SelectItem key={_id} value={_id}>
                      {name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                type="text"
                name="title"
                id="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Brief description of the issue"
                className="w-full"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Location</Label>
            <Input
              type="text"
              name="address"
              id="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Address or location description"
              className="w-full"
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              rows={4}
              value={form.description}
              onChange={handleChange}
              placeholder="Detailed description of the issue"
              className="w-full"
              disabled={isSubmitting}
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
                    <span>{imageFile ? imageFile.name : "Upload files"}</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      multiple={false}
                      accept="image/*"
                      disabled={isSubmitting}
                      onChange={(e) => {
                        if (e.target.files?.[0]) {
                          setImageFile(e.target.files[0]);
                        } else {
                          setImageFile(null);
                        }
                      }}
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
            <Button variant="outline" type="button" disabled={isSubmitting}>
              <Link href="/user">Cancel</Link>
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Report"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

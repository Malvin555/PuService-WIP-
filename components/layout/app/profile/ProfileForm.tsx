"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type User = {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
};

export default function UpdateProfileForm({ user }: { user: User | null }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/function/user", {
      method: "PATCH",
      body: formData,
    });

    const result = await res.json();

    if (res.ok) {
      setMessage("✅ Profile updated!");
      router.refresh();
    } else {
      setMessage(result.message || "⚠️ Update failed.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full mx-auto">
      <div className="grid gap-4">
        <div>
          <Label htmlFor="name">Username</Label>
          <div className="mt-2">
            <Input id="name" name="name" defaultValue={user?.name ?? ""} />
          </div>
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <div className="mt-2">
            <Input id="email" name="email" defaultValue={user?.email ?? ""} />
          </div>
        </div>

        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <div className="mt-2">
            <Input
              id="phone"
              name="phone_number"
              defaultValue={user?.phone ?? ""}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="address">Address</Label>
          <div className="mt-2">
            <Input
              id="address"
              name="address"
              defaultValue={user?.address ?? ""}
            />
          </div>
        </div>
      </div>

      {message && (
        <p
          className={`text-sm ${
            message.includes("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}

      <div className="flex flex-col sm:flex-row gap-2 justify-end">
        <Button variant="outline" type="reset" className="w-full sm:w-auto">
          Cancel
        </Button>
        <Button type="submit" disabled={loading} className="w-full sm:w-auto">
          {loading ? "Saving..." : "Submit"}
        </Button>
      </div>
    </form>
  );
}

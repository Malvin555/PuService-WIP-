"use client";

import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function UpdatePasswordForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const formData = new FormData(e.currentTarget);
      const newPassword = formData.get("new_password") as string;
      const confirmPassword = formData.get("confirm_password") as string;

      if (newPassword !== confirmPassword) {
        setMessage("❗ Passwords do not match.");
        setLoading(false);
        return;
      }

      const data = new FormData();
      data.append("password", newPassword);

      const res = await fetch("/api/function/user", {
        method: "PATCH",
        body: data,
      });

      const result = await res.json();

      if (res.ok) {
        setMessage("✅ Password updated!");
        router.refresh();
      } else {
        setMessage(result.message || "⚠️ Update failed.");
      }
    } catch (err) {
      console.error(err);
      setMessage("⚠️ An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full mx-auto">
      <div className="grid gap-4">
        <div>
          <Label htmlFor="new_password">New Password</Label>
          <div className="mt-2">
            <Input
              id="new_password"
              name="new_password"
              type="password"
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="confirm_password">Confirm Password</Label>
          <div className="mt-2">
            <Input
              id="confirm_password"
              name="confirm_password"
              type="password"
              required
            />
          </div>
        </div>
      </div>

      {message && (
        <p
          className={`text-sm ${
            message.startsWith("✅") ? "text-green-600" : "text-red-600"
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
          {loading ? "Saving..." : "Update Password"}
        </Button>
      </div>
    </form>
  );
}

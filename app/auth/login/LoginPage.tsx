"use client";

import Link from "next/link";
import { Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const metadata = {
  title: "PuService - Login",
};

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        credentials: "include", // required to set HTTP-only cookie
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        return;
      }

      // Role-based redirection
      const role = data.user?.role;
      if (role === "admin") router.push("/admin");
      else if (role === "worker") router.push("/worker");
      else router.push("/user");
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
    }
  };
  return (
    <>
      <div className="min-h-screen bg-background">
        <div className="flex flex-col justify-center py-20 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-foreground">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              Or{" "}
              <Link
                href="/auth/register"
                className="font-medium text-primary hover:text-primary/90"
              >
                create a new account
              </Link>
            </p>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-card py-8 px-4 shadow-sm sm:rounded-lg sm:px-10 border border-border">
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                action="#"
                method="POST"
              >
                <div>
                  <Label>Email Address</Label>
                  <div className="mt-1">
                    <Input
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="min-h-[20px] text-destructive"></div>
                </div>

                <div>
                  <Label>Password</Label>
                  <div className="mt-1">
                    <Input
                      name="password"
                      type="password"
                      onChange={handleChange}
                    ></Input>
                  </div>
                  <div className="min-h-[20px] text-destructive"></div>
                </div>

                <div className="flex">
                  <Button className="w-full">Submit</Button>
                </div>
                {error && (
                  <div className="mt-3 p-2 bg-destructive/10 rounded-md border border-destructive text-center text-destructive text-sm font-medium">
                    {error}
                  </div>
                )}
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-card text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div>
                    <a
                      href="#"
                      className="w-full inline-flex justify-center py-2 px-4 border border-input rounded-md shadow-sm bg-card text-sm font-medium text-muted-foreground hover:bg-accent"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="w-full inline-flex justify-center py-2 px-4 border border-input rounded-md shadow-sm bg-card text-sm font-medium text-muted-foreground hover:bg-accent"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

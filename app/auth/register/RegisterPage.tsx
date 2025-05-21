"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Github, Twitter } from "lucide-react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [termsAccepted, setTermsAccepted] = useState(false);

  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        password: form.password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Registration failed");
      return;
    }

    router.push("/auth/login");
  };

  return (
    <>
      <div className="min-h-screen bg-background">
        <div className="min-h-screen flex flex-col justify-center py-20 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-foreground">
              Create a new account
            </h2>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              Or{" "}
              <Link
                href="/auth/login"
                className="font-medium text-primary hover:text-primary/90"
              >
                sign in to your existing account
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
                  <Label>Full Name</Label>
                  <div className="mt-1">
                    <Input
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      onChange={handleChange}
                    ></Input>
                  </div>
                  <div className="min-h-[20px] text-destructive"></div>
                </div>

                <div>
                  <Label>Email Address</Label>
                  <div className="mt-1">
                    <Input
                      name="email"
                      type="email"
                      placeholder="john@doe.com"
                      onChange={handleChange}
                    ></Input>
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

                <div>
                  <Label>Confirm Password</Label>
                  <div className="mt-1">
                    <Input
                      name="confirmPassword"
                      type="password"
                      onChange={handleChange}
                    ></Input>
                  </div>
                  <div className="min-h-[20px] text-destructive"></div>
                </div>

                <div className="flex items-start gap-x-2">
                  <Checkbox
                    id="terms"
                    name="terms"
                    className="h-4 w-4 text-primary focus:ring-primary border-input rounded"
                    onCheckedChange={(checked) =>
                      setTermsAccepted(checked === true)
                    }
                  />
                  <Label htmlFor="terms" className="leading-snug">
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      target="_blank"
                      className="text-primary hover:text-primary/90 underline"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      target="_blank"
                      className="text-primary hover:text-primary/90 underline"
                    >
                      Policy
                    </Link>
                  </Label>
                </div>

                <div>
                  <Button
                    id="registerButton"
                    type="submit"
                    disabled={!termsAccepted}
                    className={`w-full ${
                      termsAccepted
                        ? "bg-primary hover:bg-primary/90"
                        : "bg-muted text-muted-foreground cursor-not-allowed"
                    }`}
                  >
                    Create Account
                  </Button>
                  {error && <p className="text-red-500">{error}</p>}
                </div>
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

import Navbar from "@/components/layout/app/nav";
import Footer from "@/components/layout/app/footer";
import React, { ReactNode } from "react";

type User = {
  name: string;
};

type AppLayoutProps = {
  children: ReactNode;
  role: "user" | "null";
  user?: User | null;
};

export default function AppLayout({ children, role, user }: AppLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar role={role} user={user} />

      {/* Content */}
      <div className="flex-1">{children}</div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

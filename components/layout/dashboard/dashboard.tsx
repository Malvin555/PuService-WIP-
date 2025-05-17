"use client";

import Sidebar from "@/components/layout/dashboard/sidebar";
import Navbar from "@/components/layout/dashboard/navigation";
import Footer from "@/components/layout/dashboard/footer";

type User = {
  name: string;
};

type DashboardLayoutProps = {
  children: React.ReactNode;
  role: "admin" | "worker";
  user: User | null;
};

export default function DashboardLayout({
  children,
  role,
  user,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="md:flex md:w-64 border-r border-border flex-shrink-0">
        <Sidebar user={user} role={role} />
      </aside>

      {/* Main content */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Top navbar */}
        <header className="sticky top-0 z-30 bg-background h-16 border-b">
          <Navbar user={user} />
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 md:p-8 lg:p-10 overflow-auto">
          <div className="max-w-5xl mx-auto w-full">{children}</div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t py-4 px-4 sm:px-6 lg:px-8 mt-auto">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

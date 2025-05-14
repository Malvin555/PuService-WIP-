import DashboardLayout from "@/components/layout/dashboard";

export const metadata = {
  title: "PuService - Worker",
  description:
    "Dashboard for PuService workers to manage tasks, schedules, and account information.",
};

export default function WorkerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}

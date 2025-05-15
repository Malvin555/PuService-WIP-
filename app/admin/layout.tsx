import DashboardLayout from "@/components/layout/dashboard";

export const metadata = {
  title: "PuService - Admin",
  description:
    "Admin dashboard for PuService to oversee users, manage system settings, and monitor reports.",
};

export default function WorkerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}

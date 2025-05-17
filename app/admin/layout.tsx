import DashboardLayout from "@/components/layout/dashboard/dashboard";

import { getCurrentUser } from "@/lib/getCurrentUser";

export const metadata = {
  title: "PuService - Admin",
  description:
    "Admin dashboard for PuService to oversee users, manage system settings, and monitor reports.",
};

export default async function WorkerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  return (
    <DashboardLayout role="admin" user={user}>
      {children}
    </DashboardLayout>
  );
}

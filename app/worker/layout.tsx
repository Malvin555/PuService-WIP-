import DashboardLayout from "@/components/layout/dashboard/dashboard";
import { getCurrentUser } from "@/lib/getCurrentUser";

export default async function WorkerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  return (
    <DashboardLayout user={user} role="worker">
      {children}
    </DashboardLayout>
  );
}

import AppLayout from "@/components/layout/app/app";
import { getCurrentUser } from "@/lib/getCurrentUser";
export const metadata = {
  title: "PuService - User Dashboard",
  description: "User dashboard page",
};

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  return (
    <AppLayout role="user" user={user}>
      {children}
    </AppLayout>
  );
}

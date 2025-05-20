import AppLayout from "@/components/layout/app/app";

export default function WorkerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppLayout user={null} role="null">{children}</AppLayout>;
}

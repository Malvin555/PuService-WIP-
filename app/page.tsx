import { redirect } from "next/navigation";

export default function RootPage() {
  // If you want to redirect to a specific page within your landing section
  // For example, if your landing home is at app/(landing)/page.tsx
  redirect("/landing");

  return null;
}

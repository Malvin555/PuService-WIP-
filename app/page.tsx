import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default function RootPage() {
  // Redirecting to the landing page
  redirect("/landing");
}

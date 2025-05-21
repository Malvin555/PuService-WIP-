import FormReport from "@/components/common/user/report/ReportForm";
import PageHeader from "@/components/common/PageHeader";
import { getCurrentUser } from "@/lib/getCurrentUser";

export const metadata = {
  title: "PuService - New Report",
  description: "Create a new service report",
};

export default async function NewReportPage() {
  const user = await getCurrentUser();

  if (!user) {
    return <p>Please login to submit a report.</p>;
  }

  return (
    <>
      <main className="pt-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <PageHeader
            title="Submit New Report"
            description="Please provide details about the issue you'd like to report."
          />

          {/* Form Report */}
          <FormReport userId={user.id} />
        </section>
      </main>
    </>
  );
}

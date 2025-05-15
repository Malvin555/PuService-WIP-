import PageHeader from "@/components/common/PageHeader";

export default function UserPageAdmin() {
  return (
    <>
      {/* Title */}
      <PageHeader
        title="Manage Users"
        description="Browse the list of users, and manage access permissions"
        withSearch
      />
    </>
  );
}

import PageHeader from "@/components/common/PageHeader";
import UserCardClient from "@/components/common/UserCardClient"; // client component
import { getUsers, type User } from "@/lib/GetUsers";

export default async function UserPageAdmin() {
  const users: User[] = await getUsers();

  return (
    <>
      <PageHeader
        title="Manage Users"
        description="Browse the list of users, and manage access permissions"
      />

      <UserCardClient users={users} />
    </>
  );
}

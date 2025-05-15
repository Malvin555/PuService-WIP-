import PageHeader from "@/components/common/PageHeader";
import UserCard from "@/components/common/UserCard";

const users = [
  {
    id: 1,
    name: "Malvin",
    email: "malvin@example.com",
    role: "User",
    reportsCount: 100,
    joinedDate: "02/01/2025",
    avatarUrl: "",
  },
  {
    id: 2,
    name: "Sophie",
    email: "sophie@example.com",
    role: "Admin",
    reportsCount: 45,
    joinedDate: "11/15/2023",
    avatarUrl: "",
  },
  {
    id: 3,
    name: "Carlos",
    email: "carlos@example.com",
    role: "Moderator",
    reportsCount: 67,
    joinedDate: "07/22/2022",
    avatarUrl: "",
  },
  {
    id: 4,
    name: "Aisha",
    email: "aisha@example.com",
    role: "User",
    reportsCount: 23,
    joinedDate: "03/10/2024",
    avatarUrl: "",
  },
  {
    id: 5,
    name: "Liam",
    email: "liam@example.com",
    role: "User",
    reportsCount: 89,
    joinedDate: "09/30/2021",
    avatarUrl: "",
  },
  {
    id: 6,
    name: "Emily",
    email: "emily@example.com",
    role: "Admin",
    reportsCount: 150,
    joinedDate: "01/05/2020",
    avatarUrl: "",
  },
];

export default function UserPageWorker() {
  return (
    <>
      {/* Title */}
      <PageHeader
        title="Manage Users"
        description="Browse the list of users, and manage access permissions"
        withSearch
      />

      {/* Users Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}

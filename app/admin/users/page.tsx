import PageHeader from "@/components/common/PageHeader";
import UserCardClient from "@/components/common/UserCardClient"; // client component
import {getUsers, type User} from "@/lib/GetUsers";
import {getCurrentUser} from "@/lib/getCurrentUser"; // 👈 import your function

export default async function UserPageAdmin() {
    const users: User[] = await getUsers();
    const currentUser = await getCurrentUser(); // 👈 fetch logged-in user

    if (!currentUser) {
        return <div>You must be logged in to view this page.</div>;
    }

    return (
        <>
            <PageHeader
                title="Manage Users"
                description="Browse the list of users, and manage access permissions"
            />

            <UserCardClient
                users={users}
                currentUserRole={currentUser.role} // 👈 real role
                currentUserId={currentUser.id}     // 👈 real id
            />
        </>
    );
}

"use client";

import {useMemo, useState} from "react";
import Fuse from "fuse.js"; // 👈 import fuse
import UserCard from "./UserCard";
import UserInfoModal from "@/components/modal/UserViewModal";
import EditUserModal from "@/components/modal/EditUserModal";
import {Input} from "@/components/ui/input";

import AddUserModal from "@/components/modal/AddUserModal";
import {type User as APIUser} from "@/lib/GetUsers";

interface Props {
    users: APIUser[];
    currentUserRole: string;
    currentUserId: string;
}

type LocalUser = {
    id: string;
    _id: string;
    name: string;
    email: string;
    role: string;
    phone: string;
    address: string;
    reportsCount: number;
    joinedDate: string;
    createdAt: string;
    updatedAt: string;
};

export default function UserCardClient({
                                           users,
                                           currentUserRole,
                                           currentUserId,
                                       }: Props) {
    const [selectedUser, setSelectedUser] = useState<LocalUser | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [visibleCount, setVisibleCount] = useState(6);
    const [searchQuery, setSearchQuery] = useState(""); // 👈 search state

    const [userList, setUserList] = useState<LocalUser[]>(
        users.map((u) => ({
            id: u._id,
            _id: u._id,
            name: u.name,
            email: u.email,
            role: u.role,
            phone: u.phone || "Not provided",
            address: u.address || "Not provided",
            reportsCount: u.reportsCount || 0,
            joinedDate: new Date(u.createdAt).toLocaleDateString(),
            createdAt: u.createdAt,
            updatedAt: u.updatedAt || u.createdAt,
        }))
    );

    // Setup Fuse.js instance
    const fuse = useMemo(() => {
        return new Fuse(userList, {
            keys: ["name", "email", "role", "phone", "address"], // searchable fields
            threshold: 0.3, // lower = stricter match
        });
    }, [userList]);

    // Run search
    const searchedUsers =
        searchQuery.trim() === ""
            ? userList
            : fuse.search(searchQuery).map((res) => res.item);

    // Apply role filter *after search*
    const filteredUsers =
        currentUserRole === "admin"
            ? searchedUsers.filter((u) => u.id !== currentUserId)
            : currentUserRole === "worker"
                ? searchedUsers.filter((u) => u.role === "user")
                : searchedUsers.filter((u) => u.id === currentUserId);

    const handleView = (user: LocalUser) => {
        setSelectedUser(user);
        setModalOpen(true);
    };

    const handleEdit = (user: LocalUser) => {
        setSelectedUser(user);
        setEditModalOpen(true);
    };

    const handleUpdateUser = (updatedUser: LocalUser) => {
        setUserList((prev) =>
            prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
        );
    };

    const handleAddUser = (newUser: LocalUser) => {
        setUserList((prev) => [newUser, ...prev]);
    };

    const handleDelete = async (userId: string) => {
        try {
            const res = await fetch(`/api/function/user?id=${userId}`, {
                method: "DELETE",
            });
            if (!res.ok) throw new Error("Failed to delete user");

            setUserList((prev) => prev.filter((u) => u.id !== userId));
            setSelectedUser(null);
            setModalOpen(false);
        } catch (err) {
            console.error(err);
            alert("Failed to delete user.");
        }
    };

    const handleClose = () => {
        setSelectedUser(null);
        setModalOpen(false);
    };

    const handleLoadMore = () => setVisibleCount((prev) => prev + 6);

    return (
        <>
            {/* Top bar with search + Add button */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                {/* Search input */}
                <Input
                    type="text"
                    placeholder="Search users..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full sm:max-w-sm"
                />

                {/* Add User button only for admin */}
                {currentUserRole === "admin" && (
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 w-full sm:w-auto"
                    >
                        + Add User
                    </button>
                )}
            </div>


            {/* User Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredUsers.slice(0, visibleCount).map((user) => (
                    <UserCard
                        key={user.id}
                        user={user}
                        onView={() => handleView(user)}
                        onEdit={() => handleEdit(user)}
                        canEdit={currentUserRole === "admin"}
                    />
                ))}
            </div>

            {/* Load More */}
            {visibleCount < filteredUsers.length && (
                <div className="flex justify-center mt-6">
                    <button
                        className="px-6 py-2 w-full bg-primary text-white rounded-md hover:bg-primary/90"
                        onClick={handleLoadMore}
                    >
                        Load More
                    </button>
                </div>
            )}

            {/* Modals */}
            <UserInfoModal
                isOpen={modalOpen}
                onCloseAction={handleClose}
                onDeleteAction={handleDelete}
                user={selectedUser}
                canManage={currentUserRole === "admin"}
            />

            <EditUserModal
                isOpen={editModalOpen}
                onCloseAction={() => setEditModalOpen(false)}
                user={selectedUser}
                onUpdateAction={handleUpdateUser}
            />

            <AddUserModal
                isOpen={isAddModalOpen}
                onCloseAction={() => setIsAddModalOpen(false)}
                onAddAction={handleAddUser}
            />
        </>
    );
}

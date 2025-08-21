"use client";

import { useState } from "react";
import UserCard from "./UserCard";
import UserInfoModal from "@/components/modal/UserViewModal";
import EditUserModal from "@/components/modal/EditUserModal";
import { type User as APIUser } from "@/lib/GetUsers";

interface Props {
  users: APIUser[];
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

export default function UserCardClient({ users }: Props) {
  const [selectedUser, setSelectedUser] = useState<LocalUser | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

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
    })),
  );

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
      prev.map((u) => (u.id === updatedUser.id ? updatedUser : u)),
    );
  };

  const handleClose = () => {
    setSelectedUser(null);
    setModalOpen(false);
  };

  const handleLoadMore = () => setVisibleCount((prev) => prev + 6);

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

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {userList.slice(0, visibleCount).map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onView={() => handleView(user)}
            onEdit={() => handleEdit(user)}
          />
        ))}
      </div>

      {visibleCount < userList.length && (
        <div className="flex justify-center mt-6">
          <button
            className="px-6 py-2 w-full bg-primary text-white rounded-md hover:bg-primary/90"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      )}

      <UserInfoModal
        isOpen={modalOpen}
        onCloseAction={handleClose}
        onDeleteAction={handleDelete}
        user={selectedUser}
      />

      <EditUserModal
        isOpen={editModalOpen}
        onCloseAction={() => setEditModalOpen(false)}
        user={selectedUser}
        onUpdateAction={handleUpdateUser}
      />
    </>
  );
}

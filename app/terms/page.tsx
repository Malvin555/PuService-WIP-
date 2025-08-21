"use client";

import { useState } from "react";
import UserInfoModal from "@/components/modal/UserViewModal";

export default function ModalPreview() {
    const [isOpen, setIsOpen] = useState(false);

    // Mock user data for preview
    const mockUser = {
        _id: "123456",
        name: "John Doe",
        email: "john@example.com",
        role: "user",
        avatarUrl: "https://i.pravatar.cc/150?img=3",
        createdAt: new Date().toISOString(),
    };

    return (
        <div className="p-8">
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => setIsOpen(true)}
            >
                Preview Modal
            </button>

            <UserInfoModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                user={mockUser}
            />
        </div>
    );
}

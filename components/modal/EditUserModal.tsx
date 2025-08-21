"use client";

import {FormEvent, useEffect, useState} from "react";
import Modal from "../layout/modal/Modal";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

type User = {
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

interface UserEditModalProps {
    isOpen: boolean;
    onCloseAction: () => void;
    user: User | null;
    onUpdateAction: (updatedUser: User) => void;
}

export default function UserEditModal({
                                          isOpen,
                                          onCloseAction,
                                          user,
                                          onUpdateAction,
                                      }: UserEditModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        password: "", // optional
        role: "user", // 👈 added
    });

    // Sync form with selected user
    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                password: "", // blank initially
                role: user.role, // 👈 sync role
            });
        }
    }, [user]);

    if (!user) return null;

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!user) return;

        try {
            // Send only non-empty password
            const body: Partial<typeof formData> = {...formData};
            if (!body.password) delete body.password;

            const res = await fetch(`/api/function/user/update?id=${user.id}`, {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body),
            });

            if (!res.ok) throw new Error("Failed to update user");

            const updatedUserFromAPI = await res.json();

            const updatedUser: User = {
                _id: updatedUserFromAPI._id,
                id: updatedUserFromAPI._id,
                name: updatedUserFromAPI.name,
                email: updatedUserFromAPI.email,
                phone: updatedUserFromAPI.phone || "Not provided",
                address: updatedUserFromAPI.address || "Not provided",
                role: updatedUserFromAPI.role,
                reportsCount: updatedUserFromAPI.reportsCount || 0,
                joinedDate: new Date(updatedUserFromAPI.createdAt).toLocaleDateString(),
                createdAt: updatedUserFromAPI.createdAt,
                updatedAt: updatedUserFromAPI.updatedAt,
            };

            onUpdateAction(updatedUser);
            onCloseAction();
        } catch (err) {
            console.error(err);
            alert("Failed to update user.");
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onCloseAction}
            title="Edit User"
            footer={
                <div className="flex justify-end gap-2 w-full">
                    <Button variant="outline" onClick={onCloseAction}>
                        Cancel
                    </Button>
                    <Button variant="default" onClick={handleSubmit}>
                        Save
                    </Button>
                </div>
            }
        >
            <Card className="overflow-hidden">
                <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <InputField
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <InputField
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <InputField
                            label="Phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Leave blank to keep current password"
                        />

                        {/* 👇 Role dropdown */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium">Role</label>
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="border rounded-md p-2"
                            >
                                <option value="user">User</option>
                                <option value="worker">Worker</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </Modal>
    );
}

function InputField({
                        label,
                        ...props
                    }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">{label}</label>
            <Input {...props} />
        </div>
    );
}

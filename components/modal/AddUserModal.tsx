"use client";

import {FormEvent, useState} from "react";
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

interface UserAddModalProps {
    isOpen: boolean;
    onCloseAction: () => void;
    onAddAction: (newUser: User) => void;
}

export default function UserAddModal({
                                         isOpen,
                                         onCloseAction,
                                         onAddAction,
                                     }: UserAddModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone_number: "",
        address: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const fd = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                fd.append(key, value);
            });

            const res = await fetch("/api/function/user", {
                method: "POST",
                body: fd,
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Failed to create user");
            }

            const createdUserFromAPI = await res.json();

            const newUser: User = {
                _id: createdUserFromAPI._id,
                id: createdUserFromAPI._id,
                name: createdUserFromAPI.name,
                email: createdUserFromAPI.email,
                phone: createdUserFromAPI.phone || "Not provided",
                address: createdUserFromAPI.address || "Not provided",
                role: createdUserFromAPI.role,
                reportsCount: createdUserFromAPI.reportsCount || 0,
                joinedDate: new Date(createdUserFromAPI.createdAt).toLocaleDateString(),
                createdAt: createdUserFromAPI.createdAt,
                updatedAt: createdUserFromAPI.updatedAt,
            };

            onAddAction(newUser);
            onCloseAction();

            // reset form
            setFormData({
                name: "",
                email: "",
                phone_number: "",
                address: "",
                password: "",
            });
        } catch (err: any) {
            console.error(err);
            alert(err.message || "Failed to add user.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onCloseAction}
            title="Add User"
            footer={
                <div className="flex justify-end gap-2 w-full">
                    <Button variant="outline" onClick={onCloseAction}>
                        Cancel
                    </Button>
                    <Button
                        variant="default"
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading ? "Saving..." : "Save"}
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
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <InputField
                            label="Phone"
                            name="phone_number"
                            value={formData.phone_number}
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
                            required
                        />
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

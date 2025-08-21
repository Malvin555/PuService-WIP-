"use client";

import { useEffect, useState } from "react";
import PageHeader from "@/components/common/PageHeader";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table";

interface User {
    _id: string;
    name: string;
    role: string;
}

interface Notification {
    _id: string;
    user: string;
    message: string;
    sentAt: string;
}

export default function NotificationsPageWorker() {
    const [users, setUsers] = useState<User[]>([]);
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [selectedUser, setSelectedUser] = useState<string>("");
    const [message, setMessage] = useState("");
    const [loadingUsers, setLoadingUsers] = useState(true);
    const [loadingNotifications, setLoadingNotifications] = useState(true);

    useEffect(() => {
        fetchUsers();
        fetchNotifications();
    }, []);

    const fetchUsers = async () => {
        try {
            setLoadingUsers(true);
            const res = await fetch("/api/function/user");
            const data: User[] = await res.json();
            // Only keep users with role "user"
            const filteredUsers = data.filter(user => user.role === "user");
            setUsers(filteredUsers);
        } catch (err) {
            console.error("Failed to fetch users", err);
        } finally {
            setLoadingUsers(false);
        }
    };


    const fetchNotifications = async () => {
        try {
            setLoadingNotifications(true);
            const res = await fetch("/api/function/notification");
            const data: Notification[] = await res.json();
            setNotifications(data);
        } catch (err) {
            console.error("Failed to fetch notifications", err);
        } finally {
            setLoadingNotifications(false);
        }
    };

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedUser || !message) return;

        try {
            const res = await fetch("/api/function/notification", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId: selectedUser, message }),
            });
            if (res.ok) {
                setMessage("");
                setSelectedUser("");
                const newNotification = await res.json();
                setNotifications(prev => [newNotification, ...prev]);
            } else {
                const err = await res.json();
                alert(err.error || "Failed to send notification");
            }
        } catch (err) {
            console.error(err);
            alert("Failed to send notification");
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this notification?")) return;
        try {
            await fetch(`/api/function/notification?id=${id}`, { method: "DELETE" });
            setNotifications(prev => prev.filter(n => n._id !== id));
        } catch (err) {
            console.error(err);
            alert("Failed to delete notification");
        }
    };

    return (
        <>
            <PageHeader
                title="Manage Notifications"
                description="Send notifications to users and manage notification settings."
            />

            <div className="bg-background">
                <Card className="w-full py-4 mb-6 gap-0">
                    <CardHeader className="mb-4">
                        <CardTitle className="text-primary text-xl">Send New Notification</CardTitle>
                        <CardDescription>
                            Choose a user and compose your message to send a notification.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="flex flex-col gap-6" onSubmit={handleSend}>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="user_id" className="block text-sm font-medium text-foreground">
                                    Select User
                                </label>
                                {loadingUsers ? (
                                    <div className="h-10 w-full bg-muted animate-pulse rounded-md" />
                                ) : (
                                    <Select value={selectedUser} onValueChange={setSelectedUser}>
                                        <SelectTrigger id="user_id" className="w-full bg-card border-border focus:ring-primary">
                                            <SelectValue placeholder="Choose a user" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {users.map(user => (
                                                <SelectItem key={user._id} value={user._id}>
                                                    {user.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                )}
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                                    Message
                                </label>
                                <Textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Type your notification message here..."
                                    className="bg-card border-border focus:ring-primary"
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                />
                            </div>

                            <div className="flex justify-end">
                                <Button type="submit" className="px-6 sm:px-8 bg-primary text-primary-foreground hover:bg-primary/90 transition">
                                    Send Notification
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>

                <div className="bg-background p-6 rounded-xl shadow-md border border-border">
                    <h2 className="text-xl font-semibold text-primary mb-4">Notifications Data</h2>
                    <div className="overflow-x-auto">
                        <Table className="min-w-full">
                            <TableHeader>
                                <TableRow className="hover:bg-background">
                                    {["ID", "User", "Message", "Sent At", "Actions"].map(header => (
                                        <TableHead key={header} className="px-6 py-4 text-sm font-medium text-muted-foreground whitespace-nowrap">
                                            {header}
                                        </TableHead>
                                    ))}
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {loadingNotifications ? (
                                    Array.from({ length: 5 }).map((_, idx) => (
                                        <TableRow key={idx} className="hover:bg-muted/10 border-b">
                                            {Array.from({ length: 5 }).map((_, cellIdx) => (
                                                <TableCell key={cellIdx} className="px-6 py-4">
                                                    <div className="h-4 w-full bg-muted rounded animate-pulse" />
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))
                                ) : notifications.length ? (
                                    notifications.map(n => (
                                        <TableRow key={n._id} className="hover:bg-muted/10 border-b">
                                            <TableCell className="px-6 py-4 text-sm text-muted-foreground whitespace-nowrap">{n._id}</TableCell>
                                            <TableCell className="px-6 py-4 text-sm font-medium text-foreground max-w-[250px] truncate" title={n.user}>
                                                {n.user}
                                            </TableCell>
                                            <TableCell className="px-6 py-4 text-sm text-muted-foreground whitespace-nowrap">{n.message}</TableCell>
                                            <TableCell className="px-6 py-4 text-sm text-muted-foreground whitespace-nowrap">{new Date(n.sentAt).toLocaleString()}</TableCell>
                                            <TableCell className="px-6 py-4 text-sm whitespace-nowrap">
                                                <div className="flex space-x-2">
                                                    <Button
                                                        variant="link"
                                                        size="sm"
                                                        className="text-primary-foreground py-1 px-3 hover:no-underline hover:bg-destructive bg-destructive/85 h-auto"
                                                        onClick={() => handleDelete(n._id)}
                                                    >
                                                        Delete
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={5} className="px-6 py-4 text-center text-muted-foreground">
                                            No notifications found.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    );
}

"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { CheckCircle } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";

interface Notification {
    _id: string;
    message: string;
    sentAt: string;
}

export default function NotificationsPage({ userId }: { userId: string }) {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                setLoading(true);
                const res = await fetch(`/api/function/notification?userId=${userId}`);
                const data: Notification[] = await res.json();
                setNotifications(data);
            } catch (err) {
                console.error("Failed to fetch notifications", err);
            } finally {
                setLoading(false);
            }
        };

        fetchNotifications();
    }, [userId]);

    return (
        <div className="pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <PageHeader
                    title="Notifications"
                    description="Stay updated on your reports and service announcements"
                />

                <Card className="w-full shadow-md gap-0">
                    <CardHeader className="py-4 border-b">
                        <CardTitle>Recent Notifications</CardTitle>
                    </CardHeader>

                    <ul className="divide-y">
                        {loading
                            ? Array.from({ length: 5 }).map((_, idx) => (
                                <li key={idx} className="p-4 sm:p-5 animate-pulse">
                                    <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                                    <div className="h-3 bg-muted rounded w-1/2"></div>
                                </li>
                            ))
                            : notifications.length
                                ? notifications.map((n) => (
                                    <li key={n._id} className="hover:bg-accent/50 transition-colors">
                                        <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between">
                                            <div className="flex items-start sm:items-center">
                                                <Avatar className="bg-green-500 h-8 w-8 flex-shrink-0 flex items-center justify-center">
                                                    <CheckCircle className="h-5 w-5 text-white" />
                                                </Avatar>
                                                <div className="ml-3">
                                                    <p className="text-sm font-medium">{n.message}</p>
                                                </div>
                                            </div>
                                            <div className="mt-2 sm:mt-0 sm:ml-4 flex-shrink-0">
                                                <p className="text-sm text-muted-foreground">
                                                    {new Date(n.sentAt).toLocaleString()}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                ))
                                : (
                                    <li className="p-4 text-center text-muted-foreground">
                                        No notifications found.
                                    </li>
                                )}
                    </ul>
                </Card>
            </div>
        </div>
    );
}

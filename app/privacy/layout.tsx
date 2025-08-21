import { getCurrentUser } from "@/lib/getCurrentUser";
import AppLayout from "@/components/layout/app/app";
import React from "react";

export default async function WorkerLayout({
                                               children,
                                           }: {
    children: React.ReactNode;
}) {
    const user = await getCurrentUser();
    const role = (user?.role ?? "user") as "user" | "worker" | "admin";

    return (
        <AppLayout user={user} role={role}>
            {children}
        </AppLayout>
    );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProfileDropdown from "@/components/common/ProfileDropdown";
import Link from "next/link";
import {
    HomeIcon,
    ClipboardIcon,
    ClockIcon,
    RefreshCcwIcon,
    CheckIcon,
    UsersIcon,
    BellIcon,
} from "lucide-react";

interface NavbarProps {
    user: { name: string } | null;
    role: "admin" | "worker";
}

export default function Navbar({ user, role }: NavbarProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    if (!user) return null;

    const isAdmin = role === "admin";

    return (
        <div className="px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 bg-background border-b relative">
            {/* Mobile menu button */}
            <div className="md:hidden">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleMenu}
                    className="text-muted-foreground hover:text-primary"
                >
                    <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </Button>

                {/* Mobile Dropdown */}
                {menuOpen && (
                    <div className="absolute m-2 top-16 left-0 right-0 bg-white shadow-lg border rounded-md flex flex-col p-2 z-50 max-h-[80vh] overflow-y-auto">
                        <Link
                            href={`/${role}`}
                            className="flex items-center text-muted-foreground gap-2 px-4 py-2 rounded hover:bg-primary/10 hover:text-primary transition-colors"
                            onClick={() => setMenuOpen(false)}
                        >
                            <HomeIcon className="w-5 h-5" />
                            <span>Dashboard</span>
                        </Link>

                        {/* Reports Section */}
                        <div className="mt-2 border-t border-border pt-2">
                            <Link
                                href={`/${role}/reports`}
                                className="flex items-center text-muted-foreground gap-2 px-4 py-2 rounded hover:bg-primary/10 hover:text-primary transition-colors"
                                onClick={() => setMenuOpen(false)}
                            >
                                <ClipboardIcon className="w-5 h-5" />
                                <span>All Reports</span>
                            </Link>

                            {!isAdmin && (
                                <>
                                    <Link
                                        href={`/${role}/reports/pending`}
                                        className="flex items-center gap-2 px-4 py-2 rounded text-yellow-700 hover:bg-yellow-100 hover:text-yellow-700 transition-colors"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        <ClockIcon className="w-5 h-5" />
                                        <span>Pending</span>
                                    </Link>
                                    <Link
                                        href={`/${role}/reports/in-progress`}
                                        className="flex items-center gap-2 px-4 py-2 rounded text-blue-700 hover:bg-blue-100 hover:text-blue-700 transition-colors"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        <RefreshCcwIcon className="w-5 h-5" />
                                        <span>In Progress</span>
                                    </Link>
                                    <Link
                                        href={`/${role}/reports/resolved`}
                                        className="flex items-center gap-2 px-4 py-2 rounded text-green-700 hover:bg-green-100 hover:text-green-700 transition-colors"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        <CheckIcon className="w-5 h-5" />
                                        <span>Resolved</span>
                                    </Link>
                                </>
                            )}
                        </div>

                        {/* Management Section */}
                        <div className="mt-2 border-t border-border pt-2">
                            <Link
                                href={`/${role}/users`}
                                className="flex text-muted-foreground items-center gap-2 px-4 py-2 rounded hover:bg-primary/10 hover:text-primary transition-colors"
                                onClick={() => setMenuOpen(false)}
                            >
                                <UsersIcon className="w-5 h-5" />
                                <span>User Management</span>
                            </Link>
                            <Link
                                href={`/${role}/notifications`}
                                className="flex text-muted-foreground items-center gap-2 px-4 py-2 rounded hover:bg-primary/10 hover:text-primary transition-colors"
                                onClick={() => setMenuOpen(false)}
                            >
                                <BellIcon className="w-5 h-5" />
                                <span>Manage Notifications</span>
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            {/* Desktop: Profile on the right */}
            <div className=" md:flex md:ml-auto">
                <ProfileDropdown user={user} />
            </div>
        </div>
    );
}

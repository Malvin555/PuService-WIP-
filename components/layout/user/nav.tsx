"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, ChevronDown, Menu } from "lucide-react";

export default function Nav() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="fixed w-full z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/user" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-semibold text-primary">
                PuService
              </span>
            </Link>
            <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
              <Link
                href="/user"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ease-in-out ${
                  isActive("/user")
                    ? "text-foreground border-primary"
                    : "text-muted-foreground border-transparent hover:text-foreground hover:border-primary"
                }`}
              >
                Dashboard
              </Link>
              <Link
                href="/user/reports/history"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ease-in-out ${
                  isActive("/user/reports/history")
                    ? "text-foreground border-primary"
                    : "text-muted-foreground border-transparent hover:text-foreground hover:border-primary"
                }`}
              >
                History
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center">
            <button
              type="button"
              className="relative p-1 rounded-full text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary mr-3"
            >
              <Link href="/user/notifications">
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-destructive ring-2 ring-background"></span>
              </Link>
            </button>

            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  id="user-menu-button"
                  className="flex items-center space-x-3 focus:outline-none"
                  aria-expanded={isUserMenuOpen}
                  aria-haspopup="true"
                  onClick={toggleUserMenu}
                >
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium text-xs">
                      MA
                    </div>
                  </div>
                  <div className="text-left">
                    <span className="text-sm font-medium text-foreground">
                      Malvin
                    </span>
                  </div>
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>
              {isUserMenuOpen && (
                <div
                  id="user-menu"
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-card ring-1 ring-border focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                >
                  <Link
                    href="/user/profile"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                    role="menuitem"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/logout"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                    role="menuitem"
                  >
                    Sign out
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              id="mobile-menu-button"
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div id="mobile-menu" className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/user"
              className={`block pl-3 pr-4 py-2 border-l-4 ${
                isActive("/user")
                  ? "border-primary text-primary bg-primary/10"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:bg-accent hover:border-border"
              } text-base font-medium`}
            >
              Dashboard
            </Link>
            <Link
              href="/user/reports/history"
              className={`block pl-3 pr-4 py-2 border-l-4 ${
                isActive("/user/reports/history")
                  ? "border-primary text-primary bg-primary/10"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:bg-accent hover:border-border"
              } text-base font-medium`}
            >
              History
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-border">
            <div className="space-y-1">
              <Link
                href="/user/profile"
                className={`block pl-3 pr-4 py-2 border-l-4 ${
                  isActive("/user/profile")
                    ? "border-primary text-primary bg-primary/10"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:bg-accent hover:border-border"
                } text-base font-medium`}
              >
                Profile{" "}
              </Link>
              <Link
                href="/logout"
                className="block px-4 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent"
              >
                Sign out
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

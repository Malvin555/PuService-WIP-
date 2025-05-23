"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import ProfileDropdown from "@/components/common/ProfileDropdown";

const sections = ["home", "feature", "about"];

interface NavbarProps {
  role: "user" | "null";
  user?: { name: string } | null;
}

export default function NavigationMenu({ role, user }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const hiddenPaths = ["/auth/login", "/auth/register", "/privacy"];
  const shouldHideNav = hiddenPaths.includes(pathname);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map((id) => {
        const el = document.getElementById(id);
        return { id, offsetTop: el?.offsetTop || 0 };
      });

      const scrollY = window.scrollY + 100;

      const current = offsets
        .reverse()
        .find((section) => scrollY >= section.offsetTop);

      if (current) setActiveSection(current.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isUser = role === "user";
  return (
    <nav className="fixed w-full z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/landing" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-semibold text-primary">
                PuService
              </span>
            </Link>
            {!shouldHideNav && !isUser && (
              <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
                {sections.map((id) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ease-in-out ${
                      activeSection === id
                        ? "text-foreground border-primary"
                        : "text-muted-foreground border-transparent hover:text-foreground hover:border-primary"
                    }`}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                ))}
              </div>
            )}

            {/* User Menu Role */}
            {!shouldHideNav && isUser && (
              <>
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
              </>
            )}
          </div>
          {/* Right side: login/register only if not user */}
          {isUser && user ? (
            <ProfileDropdown user={user} />
          ) : (
            <div className="hidden sm:flex sm:items-center sm:space-x-2">
              <Link href="/auth/login">
                <Button variant="ghost" className="hover:bg-transparent">
                  Login
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button className="h-11 px-8">Register</Button>
              </Link>
            </div>
          )}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-primary/90 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors ${
                  activeSection === id
                    ? "border-primary text-primary bg-primary/10"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary hover:border-primary/50"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>

          <div className="pt-4 pb-3 border-t border-border">
            <div className="flex items-center px-4 space-x-3">
              <Link href="/auth/login">
                <Button variant={"ghost"} className="hover:bg-transparent">
                  Login
                </Button>
              </Link>

              <Link href="/auth/register">
                <Button className="px-4 py-2h">Register</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

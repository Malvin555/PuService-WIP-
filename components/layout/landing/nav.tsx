"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const sections = ["home", "feature", "about"];

export default function NavigationMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const hiddenPaths = ["/auth/login", "/auth/register"];
  const shouldHideNav = hiddenPaths.includes(pathname);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
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
            {!shouldHideNav && (
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
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-2">
            <Link href="/auth/login">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary hover:text-primary/90 h-10 px-4 py-2">
                Login
              </button>
            </Link>

            <Link href="/auth/register">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
                Register
              </button>
            </Link>
          </div>
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
              <Link
                href="/login"
                className="block text-base font-medium text-foreground hover:text-primary"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="block px-4 py-2 text-base font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

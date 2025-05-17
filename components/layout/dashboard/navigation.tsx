import { Button } from "@/components/ui/button";
import ProfileDropdown from "@/components/common/ProfileDropdown";

interface NavbarProps {
  user: { name: string } | null;
}

export default function Navigation({ user }: NavbarProps) {
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 flex justify-between h-16">
        <div className="flex items-center md:hidden">
          <Button
            id="sidebar-toggle"
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-primary focus:outline-none"
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
        </div>

        <ProfileDropdown user={user} />
      </div>
    </>
  );
}

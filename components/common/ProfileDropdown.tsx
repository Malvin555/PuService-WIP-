import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLogout } from "../hooks/useLogout";

interface ProfileDropdownProps {
  user: { name: string } | null;
}

export default function ProfileDropdown({ user }: ProfileDropdownProps) {
  const logout = useLogout();

  if (!user?.name) return null; // or fallback UI

  const initials = (() => {
    const parts = user.name.trim().split(" ");
    if (parts.length === 1) {
      return parts[0].slice(0, 2).toUpperCase();
    } else {
      return parts[0][0].toUpperCase() + parts[1][0].toUpperCase();
    }
  })();

  return (
    <div className="flex-1 flex items-center justify-end">
      <div className="ml-4 flex items-center md:ml-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              style={{ backgroundColor: "var(--background)" }}
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span className="sr-only">Open user menu</span>
              <Avatar className="h-9 w-9">
                <AvatarFallback
                  style={{
                    backgroundColor: "var(--primary)",
                    color: "var(--primary-foreground)",
                  }}
                >
                  {initials}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-background border-border border"
          >
            <DropdownMenuItem
              asChild
              className="text-muted-foreground hover:bg-primary/10 "
            >
              <Button variant={"ghost"} onClick={logout} className="w-full">
                Sign out
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

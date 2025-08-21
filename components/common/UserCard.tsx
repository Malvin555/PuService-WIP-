import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type UserCardType = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  role: string;
  reportsCount: number;
  joinedDate: string;
};

type UserCardProps = {
  user: UserCardType;
  onView: (user: UserCardType) => void;
  onEdit: (user: UserCardType) => void;
    canEdit?: boolean;
};

export default function     UserCard({ user, onView, onEdit, canEdit }: UserCardProps) {
  return (
    <Card className="gap-0">
      <CardHeader className="flex flex-row items-start justify-between py-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarFallback className="bg-primary uppercase text-primary-foreground">
              {user.name.slice(0, 2)}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-base capitalize font-medium text-foreground">
              {user.name}
            </h3>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
        </div>
        <Badge className="capitalize">{user.role}</Badge>
      </CardHeader>

      <CardContent className="border-t pt-3 pb-3 px-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              Reports
            </span>
            <span className="mt-1 text-sm font-medium text-foreground">
              {user.reportsCount ?? 0}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              Joined
            </span>
            <span className="mt-1 text-sm font-medium text-foreground">
              {user.joinedDate}
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="[.border-t]:pt-0 bg-secondary px-4 py-2 rounded-b-xl flex justify-between items-center">
        <div className="text-xs text-muted-foreground truncate pr-2">
          ID: #{user.id}
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" size="sm" onClick={() => onView(user)}>
            View
          </Button>
            {canEdit && (
                <Button variant="default" size="sm" onClick={() => onEdit(user)}>
                    Edit
                </Button>
            )}
        </div>
      </CardFooter>
    </Card>
  );
}

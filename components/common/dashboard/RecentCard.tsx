import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type UserActivityType = {
  _id: string;
  name: string;
  email: string;
  initials: string;
  timestamp: string;
};

type RecentCardProps = {
  users: UserActivityType[];
};

export default function RecentCard({ users }: RecentCardProps) {
  return (
    <div className="lg:col-span-1">
      <Card className="h-full min-h-[400px] gap-0 max-h-[400px] shadow-sm">
        <CardHeader className="border-b bg-muted/20 py-4 w-full flex">
          <CardTitle className="text-lg font-medium text-foreground">
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 overflow-y-auto scrollbar-hide">
          <ul className="divide-border">
            {users.map((user) => (
              <li
                key={user._id}
                className="p-5 hover:bg-muted/10 transition-colors"
              >
                <div className="flex">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary uppercase text-primary-foreground">
                      {user.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="text-sm capitalize font-medium text-foreground">
                      {user.name}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Signed up with
                      <span className="font-medium text-primary ml-1">
                        {user.email}
                      </span>
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-2">
                      {user.timestamp}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

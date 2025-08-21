import Modal from "../layout/modal/Modal";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { Phone, MapPin } from "lucide-react";

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  role: string;
  reportsCount: number;
  joinedDate: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
};
interface UserInfoModalProps {
  isOpen: boolean;
  onDeleteAction: (id: string) => void;
  onCloseAction: () => void;
  user: User | null;
    canManage?: boolean;
}

export default function UserInfoModal({
  isOpen,
  onCloseAction,
  onDeleteAction,
  user,
                                          canManage = false,
}: UserInfoModalProps) {
  if (!user) return null;

  const shortId = user.id.slice(-4);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onCloseAction}
      title="User Details"
      footer={
        <div className="flex justify-end w-full gap-2">
          <Button variant="outline" onClick={onCloseAction}>
            Close
          </Button>
            {canManage && (
                <Button
                    variant="destructive"
                    onClick={() => onDeleteAction(user.id)}
                >
                    Delete
                </Button>
            )}
        </div>
      }
    >
      <Card className="overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <Avatar className="w-24 h-24 sm:w-32 sm:h-32 border-4 border-background">
              <AvatarFallback className="text-7xl bg-primary text-primary-foreground">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-center sm:justify-start">
                <h2 className="text-2xl font-bold">{user.name}</h2>
                <Badge variant="outline" className="w-fit capitalize">
                  {user.role}
                </Badge>
              </div>
              <p className="text-muted-foreground">{user.email}</p>
              <p className="text-sm text-muted-foreground">
                Member since {format(new Date(user.joinedDate), "MMMM yyyy")}
              </p>

              {/* Phone and Address Section */}
              <div className="flex flex-col text-muted-foreground sm:flex-row gap-4 pt-2">
                {user.phone && (
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span>{user.phone}</span>
                  </div>
                )}
                {user.address && (
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
                    <span>{user.address}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <Separator className="mx-6 w-auto" />

        <CardContent className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">
                User ID
              </p>
              <p className="font-mono text-sm">#{shortId}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">
                Reports
              </p>
              <p>{user.reportsCount}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">
                Status
              </p>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span>Active</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Modal>
  );
}

import PageHeader from "@/components/common/PageHeader";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export default function NotificationsPageWorker() {
  // Example data for demonstration
  const notifications = [
    {
      id: 1,
      user: "Alice Johnson",
      message: "Welcome to the platform!",
      sentAt: "2024-06-01 10:00",
    },
    {
      id: 2,
      user: "Bob Smith",
      message: "Your account has been updated.",
      sentAt: "2024-06-02 14:30",
    },
    {
      id: 3,
      user: "Charlie Lee",
      message: "Reminder: Complete your profile.",
      sentAt: "2024-06-03 09:15",
    },
  ];

  return (
    <>
      <PageHeader
        title="Manage Notifications"
        description="Send notifications to users and manage notification settings."
      />

      <div className="bg-background">
        <Card className="w-full py-4 mb-6 gap-0">
          <CardHeader className="mb-4">
            <CardTitle className="text-primary text-xl">
              Send New Notification
            </CardTitle>
            <CardDescription>
              Choose a user and compose your message to send a notification.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="user_id"
                  className="block text-sm font-medium text-foreground"
                >
                  Select User
                </label>
                <Select>
                  <SelectTrigger
                    id="user_id"
                    className="w-full bg-card border-border focus:ring-primary"
                  >
                    <SelectValue placeholder="Choose a user" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Alice Johnson</SelectItem>
                    <SelectItem value="2">Bob Smith</SelectItem>
                    <SelectItem value="3">Charlie Lee</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Type your notification message here..."
                  className="bg-card border-border focus:ring-primary"
                />
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="px-6 sm:px-8 bg-primary text-primary-foreground hover:bg-primary/90 transition"
                >
                  Send Notification
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Notifications Table */}
        <div className="bg-background p-6 rounded-xl shadow-md border border-border">
          <h2 className="text-xl font-semibold text-primary mb-4">
            Notifications Data
          </h2>
          <div className="overflow-x-auto">
            <Table className="min-w-full">
              <TableHeader>
                <TableRow className="hover:bg-background">
                  {["ID", "User", "Message", "Sent At", "Actions"].map(
                    (header) => (
                      <TableHead
                        key={header}
                        className="px-6 py-4 text-sm font-medium text-muted-foreground whitespace-nowrap"
                      >
                        {header}
                      </TableHead>
                    ),
                  )}
                </TableRow>
              </TableHeader>
              <TableBody>
                {notifications.map((notification) => (
                  <TableRow
                    key={notification.id}
                    className="hover:bg-muted/10 border-b"
                  >
                    <TableCell className="px-6 py-4 text-sm text-muted-foreground whitespace-nowrap">
                      {notification.id}
                    </TableCell>
                    <TableCell className="px-6 py-4 text-sm font-medium text-foreground max-w-[250px] truncate">
                      <span title={notification.user}>{notification.user}</span>
                    </TableCell>
                    <TableCell className="px-6 py-4 text-sm text-muted-foreground whitespace-nowrap">
                      {notification.message}
                    </TableCell>
                    <TableCell className="px-6 py-4 text-sm text-muted-foreground whitespace-nowrap">
                      {notification.sentAt}
                    </TableCell>
                    <TableCell className="px-6 py-4 text-sm whitespace-nowrap">
                      <div className="flex space-x-2">
                        <Button
                          variant="link"
                          size="sm"
                          className="text-primary-foreground py-1 px-3 hover:no-underline hover:bg-destructive bg-destructive/85 h-auto"
                        >
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {notifications.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="px-6 py-4 text-center text-muted-foreground"
                    >
                      No notifications found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

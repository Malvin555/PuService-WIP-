import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/common/PageHeader";

export default function ProfilePageAdmin() {
  return (
    <>
      <PageHeader
        title="Manage Profile"
        description="This page allows you to view and update your personal information, contact details, and password."
      />

      <div className="bg-card shadow-sm overflow-hidden rounded-lg border border-border mb-10">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
          <div>
            <h3 className="text-lg leading-6 font-medium text-foreground">
              Personal Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
              Update your personal details.
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xl font-medium">
              MA
            </div>
          </div>
        </div>
        <div className="border-t border-border px-4 py-5 sm:p-6">
          <form
            className="space-y-6"
            action="/api/profile/update"
            method="POST"
          >
            <div className="gap-y-10 gap-x-4">
              <div className="sm:col-span-3">
                <Label>Username</Label>

                <div className="mt-1">
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    defaultValue="Malvin"
                  ></Input>
                </div>
              </div>

              <div className="mt-6">
                <Label>Email Adress</Label>
                <div className="mt-1">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    defaultValue="malvin@example.com"
                  ></Input>
                </div>
              </div>

              <div className="mt-6">
                <Label>Phone Number</Label>
                <div className="mt-1">
                  <Input
                    type="text"
                    name="phone_number"
                    id="phone"
                    defaultValue="+44 18 9122 1895"
                  ></Input>
                </div>
              </div>

              <div className="mt-6">
                <Label>Street Address</Label>
                <div className="mt-1">
                  <Input
                    type="text"
                    name="address"
                    id="address"
                    defaultValue="221B Baker Street, London"
                  ></Input>
                </div>
              </div>
            </div>

            <div className="flex gap-2 justify-end">
              <Button variant={"outline"}>Cancel</Button>

              <Button>Submit</Button>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-card shadow-sm overflow-hidden rounded-lg border border-border">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-foreground">
            Password
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
            Update your password.
          </p>
        </div>
        <div className="border-t border-border px-4 py-5 sm:p-6">
          <form
            className="space-y-6"
            action="/api/profile/password"
            method="POST"
          >
            <div>
              <Label>Current Password</Label>
              <div className="mt-1">
                <Input
                  id="current_password"
                  name="current_password"
                  type="password"
                ></Input>
              </div>
            </div>

            <div>
              <Label>New Password</Label>
              <div className="mt-1">
                <Input
                  id="new_password"
                  name="new_password"
                  type="password"
                ></Input>
              </div>
            </div>

            <div>
              <Label>Confirm Password</Label>
              <div className="mt-1">
                <Input
                  id="new_password_confirmation"
                  name="new_password_confirmation"
                  type="password"
                ></Input>
              </div>
            </div>

            <div className="flex justify-end">
              <Button>Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

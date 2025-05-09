import Nav from "@/components/layout/user/nav";
import Footer from "@/components/layout/landing/footer";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  return (
    <>
      <Nav />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Your Profile</h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Manage your account information and preferences.
            </p>
          </div>

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
                <div className="gap-y-6 gap-x-4">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground"
                    >
                      Username
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        defaultValue="Malvin"
                        className="border px-2 py-3 focus:outline-none focus:ring-primary focus:border-primary block w-full sm:text-sm border-input rounded-md bg-background text-foreground"
                      />
                    </div>
                  </div>

                  <div className="mt-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        defaultValue="malvin@example.com"
                        className="border px-2 py-3 focus:outline-none focus:ring-primary focus:border-primary block w-full sm:text-sm border-input rounded-md bg-background text-foreground"
                      />
                    </div>
                  </div>

                  <div className="mt-2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground"
                    >
                      Phone number
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone_number"
                        id="phone"
                        defaultValue="+44 18 9122 1895"
                        className="border px-2 py-3 focus:outline-none focus:ring-primary focus:border-primary block w-full sm:text-sm border-input rounded-md bg-background text-foreground"
                      />
                    </div>
                  </div>

                  <div className="mt-2">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-foreground"
                    >
                      Street address
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="address"
                        id="address"
                        defaultValue="221B Baker Street, London"
                        className="border px-2 py-3 focus:outline-none focus:ring-primary focus:border-primary block w-full sm:text-sm border-input rounded-md bg-background text-foreground"
                      />
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

          <div className="bg-card shadow-sm overflow-hidden rounded-lg border border-border mb-10">
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
                  <label
                    htmlFor="current_password"
                    className="block text-sm font-medium text-foreground"
                  >
                    Current password
                  </label>
                  <div className="mt-1">
                    <input
                      id="current_password"
                      name="current_password"
                      type="password"
                      className="border px-2 py-3 focus:outline-none focus:ring-primary focus:border-primary block w-full sm:text-sm border-input rounded-md bg-background text-foreground"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="new_password"
                    className="block text-sm font-medium text-foreground"
                  >
                    New password
                  </label>
                  <div className="mt-1">
                    <input
                      id="new_password"
                      name="new_password"
                      type="password"
                      className="border px-2 py-3 focus:outline-none focus:ring-primary focus:border-primary block w-full sm:text-sm border-input rounded-md bg-background text-foreground"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="new_password_confirmation"
                    className="block text-sm font-medium text-foreground"
                  >
                    Confirm password
                  </label>
                  <div className="mt-1">
                    <input
                      id="new_password_confirmation"
                      name="new_password_confirmation"
                      type="password"
                      className="border px-2 py-3 focus:outline-none focus:ring-primary focus:border-primary block w-full sm:text-sm border-input rounded-md bg-background text-foreground"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button>Submit</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

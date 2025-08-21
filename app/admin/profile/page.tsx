import UpdateProfileForm from "@/components/layout/app/profile/ProfileForm";
import UpdatePasswordForm from "@/components/layout/app/profile/PasswordForm";
import { getCurrentUser } from "@/lib/getCurrentUser";
import PageHeader from "@/components/common/PageHeader";

// Server Component
export default async function ProfilePage() {
    const user = await getCurrentUser();

    return (
        <div>
            <PageHeader
                title="Your Profile"
                description="Manage your account information and preferences."
            />

            {/* Profile Card */}
            <div className="bg-card shadow-sm overflow-hidden rounded-lg border border-border">
                <div className="px-6 py-5 flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-semibold text-foreground">
                            Personal Information
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Update your name, email, and contact details.
                        </p>
                    </div>
                    <div className="h-16 w-16 hidden rounded-full bg-primary md:flex items-center justify-center text-primary-foreground text-xl font-bold">
                        {user?.name?.slice(0, 2).toUpperCase() || "NA"}
                    </div>
                </div>

                <div className="border-t border-border px-6 py-6">
                    <UpdateProfileForm user={user} />
                </div>
            </div>

            {/* Password Card */}
            <div className="bg-card border mt-10 border-border rounded-lg shadow-sm">
                <div className="px-6 py-5 border-b border-border">
                    <h3 className="text-lg font-semibold text-foreground">
                        Change Password
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Choose a strong password that you don’t use elsewhere.
                    </p>
                </div>
                <div className="px-6 py-6">
                    <UpdatePasswordForm />
                </div>
            </div>
        </div>
    );
}

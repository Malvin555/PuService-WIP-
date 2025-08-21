export type User = {
  _id: string;
  name: string;
  email: string;
  role: string;
  phone: string;
  address: string;
  reportsCount: number; // make sure your API includes this
  createdAt: string;
  updatedAt: string;
  joinedDate?: string; // optional, for display
};

export async function getUsers(): Promise<User[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/function/user`,
      {
        cache: "no-store", // ensures fresh data
      },
    );

    if (!res.ok) throw new Error("Failed to fetch users");

    const data: User[] = await res.json();

    // Map createdAt → joinedDate
    return data.map((user) => ({
      ...user,
      joinedDate: new Date(user.createdAt).toLocaleDateString(),
    }));
  } catch (err) {
    console.error(err);
    return [];
  }
}

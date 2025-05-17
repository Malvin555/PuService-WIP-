import { useRouter } from "next/navigation";

export function useLogout() {
  const router = useRouter();

  return async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      router.push("/auth/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
}

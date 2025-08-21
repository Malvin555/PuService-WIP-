// types/User.ts
export interface UserType {
  _id: string;
  name: string;
  email: string;
  role: "user" | "worker" | "admin";
  password: string;
  phone?: string;
  address?: string;
}

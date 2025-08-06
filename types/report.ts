export type Report = {
  _id: string;
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  address: string;
  status: "pending" | "in_progress" | "resolved";
  createdAt: string;
  response: string;
  updatedAt: string;
  category: string;
  userId: {
    _id: string;
    name: string;
  };
  user: string;
  date: string;
  categoryId?: {
    name: string;
  };
};

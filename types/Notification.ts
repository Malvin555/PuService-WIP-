// types/Notification.ts
export interface NotificationType {
  _id?: string; // optional because Mongoose adds it automatically
  user: string; // this will store the user's name
  message: string;
  sentAt: Date;
}

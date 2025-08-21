import { Schema, model, models } from "mongoose";

interface INotification {
  user: string;
  message: string;
  sentAt: Date;
}

const NotificationSchema = new Schema<INotification>({
  user: { type: String, required: true },
  message: { type: String, required: true },
  sentAt: { type: Date, default: Date.now },
});

// Prevent model overwrite in development
const Notification =
  models.Notification ||
  model<INotification>("Notification", NotificationSchema);

export default Notification;

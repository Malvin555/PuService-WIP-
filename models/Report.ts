import { Schema, model, models } from "mongoose";

const ReportSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String },
    address: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "process", "completed"],
      default: "pending",
    },
  },
  { timestamps: true },
);

const Report = models.Report || model("Report", ReportSchema);

export default Report;

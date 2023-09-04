import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },
  addedDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  userId: {
    type: mongoose.ObjectId,
    required: true,
  },
});

export const Task =
  mongoose.models.tasks || mongoose.model("tasks", taskSchema);

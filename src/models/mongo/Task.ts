import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    _id: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Goal",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const TaskModel = mongoose.model("Task", TaskSchema);

export { TaskModel };

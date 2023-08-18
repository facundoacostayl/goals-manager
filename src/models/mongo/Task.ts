import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
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

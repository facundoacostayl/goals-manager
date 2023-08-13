import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  description: {
    type: "string",
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Goal",
    required: true,
  },
});

const TaskModel = new mongoose.Model("Task", TaskSchema);

export { TaskModel };

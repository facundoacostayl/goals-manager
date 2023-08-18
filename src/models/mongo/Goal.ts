import mongoose from "mongoose";

const GoalSchema = new mongoose.Schema(
  {
    name: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const GoalModel = mongoose.model("Goal", GoalSchema);

export { GoalModel };

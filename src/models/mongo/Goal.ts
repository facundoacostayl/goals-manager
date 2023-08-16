import mongoose from "mongoose";

const GoalSchema = new mongoose.Schema(
  {
    _id: {
      type: "string",
      required: true,
    },
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

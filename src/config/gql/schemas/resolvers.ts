import { Goal, Task } from "../types/types.js";
import { GoalModel, TaskModel } from "../../../models/mongo/index.js";

const resolvers = {
  Query: {
    goals: async () => await GoalModel.find(),
    goal: async (_: any, _id: Goal) => await GoalModel.findById(_id),
    tasks: async () => await TaskModel.find(),
    task: async (_: any, _id: Task) => await TaskModel.findById(_id),
  },
  Mutation: {
    createGoal: async (_: any, { name, description }: Goal) => {
      try {
        const newGoal = new GoalModel({ name, description });
        const savedGoal = await newGoal.save();

        return savedGoal;
      } catch (e) {
        e instanceof Error && console.error(e.message);
      }
    },
    createTask: async (_: any, { description, projectId }: Task) => {
      try {
        const goalFound = await GoalModel.findById(projectId);
        if (!goalFound) throw new Error("Project not found");
        const newTask = new TaskModel({ description, projectId });
        const savedTask = await newTask.save();

        return savedTask;
      } catch (e) {
        e instanceof Error && console.error(e.message);
      }
    },
  },
};

export { resolvers };

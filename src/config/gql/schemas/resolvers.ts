import { Goal, Task } from "../types/types.js";
import { models } from "../../../models/mongo/index.js";

const resolvers = {
  Query: {
    goals: async () => await models.GoalModel.find(),
    tasks: async () => await models.TaskModel.find(),
  },
  Mutation: {
    createGoal: async (_: any, { name, description }: Goal) => {
      try {
        const newGoal = new models.GoalModel({ name, description });
        const savedGoal = await newGoal.save();

        return savedGoal;
      } catch (e) {
        e instanceof Error && console.error(e.message);
      }
    },
    createTask: async (_: any, { description, projectId }: Task) => {
      try {
        const newTask = new models.TaskModel({ description, projectId });
        const savedTask = await newTask.save();

        return savedTask;
      } catch (e) {
        e instanceof Error && console.error(e.message);
      }
    },
  },
};

export { resolvers };

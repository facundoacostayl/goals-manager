import { Goal } from "../types/types.js";
import { models } from "../../../models/mongo/index.js";

const resolvers = {
  Query: {
    getMessage: () => "Hello World",
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
  },
};

export { resolvers };

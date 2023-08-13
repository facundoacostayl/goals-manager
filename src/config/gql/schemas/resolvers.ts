import { Goal } from "../types/types.js";

const resolvers = {
  Query: {
    getMessage: () => "Hello World",
  },
  Mutation: {
    createGoal: (_: any, { name, description }: Goal) => {
      return {};
    },
  },
};

export { resolvers };

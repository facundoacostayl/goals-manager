import { PubSub } from "graphql-subscriptions";

const pubSub = new PubSub();

const resolvers = {
  Query: {
    getMessage() {
      return "Hi There";
    },
  },
  Mutation: {
    sendMessage(_: string, input: string) {
      pubSub.publish("NEW_MESSAGE", { newMessage: input });
      return input;
    },
  },
  Subscription: {
    newMessage: {
      subscribe: () => pubSub.asyncIterator(["NEW_MESSAGE"]),
    },
  },
};

export { resolvers };

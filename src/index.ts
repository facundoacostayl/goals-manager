import { startApolloServer } from "./app";
import { typeDefs } from "./config/gql/schemas/type-defs";
import { resolvers } from "./config/gql/schemas/resolvers";

const main = async () => {
  try {
    await startApolloServer(typeDefs, resolvers);
    console.log("Server is Online");
  } catch (e) {
    console.error(e);
  }
};

main();

import { startApolloServer } from "./app.js";

const main = async () => {
  try {
    //await startApolloServer();
    console.log("Server is Online");
  } catch (e) {
    console.error(e);
  }
};

main();

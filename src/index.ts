import { startApolloServer } from "./app.js";
import { connectDB } from "./config/db/connection.js";

const main = async () => {
  try {
    await connectDB();
    //await startApolloServer();
    console.log("Server is Online");
  } catch (e) {
    console.error(e);
  }
};

main();

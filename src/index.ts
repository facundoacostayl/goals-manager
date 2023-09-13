import { startApolloServer, port } from "./app";
import { connectDB } from "./config/db/connection";

const main = async () => {
  try {
    await connectDB();
    await startApolloServer();
    console.log("Server is Online on port " + port);
  } catch (e) {
    console.error(e);
  }
};

main();

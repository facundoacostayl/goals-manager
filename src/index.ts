import { server, port } from "./app";
import { wsConnect } from "./config/websockets/connection";

const main = () => {
  try {
    const httpServer = server.listen(port);
    console.log("Server is Online");
  } catch (e) {
    console.error(e);
  }
};

main();

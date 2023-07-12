import { app, port } from "./app";

const main = () => {
  try {
    app.listen(port);
    console.log("Server is Online");
  } catch (e) {
    console.error(e);
  }
};

main();

import { WebSocketServer } from "ws";

const wsConnect = (httpServer: Server, path: string) => {
  new WebSocketServer({
    server: httpServer,
    path,
  });
};

export { wsConnect };

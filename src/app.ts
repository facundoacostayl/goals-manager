import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import http from "http";
import cors from "cors";

//Express
const app = express();

//http Server
const httpServer = http.createServer(app);

//Port
const port = process.env.PORT || 4000;

//Start Server
const startApolloServer = async (typeDefs, resolvers) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  //Middleware
  app.use("/graphql", cors(), express.json(), expressMiddleware(server));

  await new Promise(() =>
    httpServer.listen({
      port,
    })
  );
};

export { startApolloServer, port };

import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { typeDefs } from "./config/gql/schemas/type-defs";
import { resolvers } from "./config/gql/schemas/resolvers";
import http from "http";
import cors from "cors";

//Express
const app = express();

//http Server
const httpServer = http.createServer(app);

//Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//Port
const port = process.env.PORT || 4000;

//Start Server
const startApolloServer = async () => {
  try {
    await server.start();

    //Middleware
    app.use("/graphql", cors(), express.json(), expressMiddleware(server));

    await new Promise(() =>
      httpServer.listen({
        port,
      })
    );
  } catch (error) {
    error instanceof Error && console.error(error.message);
  }
};

export { server, startApolloServer, port };

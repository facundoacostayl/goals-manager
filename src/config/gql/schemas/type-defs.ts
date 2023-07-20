import { gql } from "graphql-tag";

const typeDefs = gql`
  type Query {
    getMessage: String
  }

  type Mutation {
    sendMessage(input: String): String
  }

  type Subscription {
    newMessage: String
  }
`;

export { typeDefs };

import { gql } from "graphql-tag";

const typeDefs = gql`
  type Query {
    goals: [Goal]
  }

  type Mutation {
    createGoal(name: String, description: String): Goal
  }

  type Goal {
    _id: ID
    name: String
    description: String
    createdAt: String
    updatedAt: String
  }
`;

export { typeDefs };

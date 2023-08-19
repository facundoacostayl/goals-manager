import { gql } from "graphql-tag";

type BooleanTypeDef = { bool: boolean };

const typeDefs = gql`
  type Query {
    bool(bool: Boolean): Boolean
  }
`;

const resolvers = {
  Query: {
    bool: (_: any, { bool }: BooleanTypeDef) => bool,
  },
};

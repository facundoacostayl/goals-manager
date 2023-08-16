import { gql } from "graphql-tag";

const typeDefs = gql`
  type Query {
    goals: [Goal]
    goal(_id: ID): Goal
    tasks: [Task]
    task(_id: ID): Task
  }

  type Mutation {
    createGoal(name: String, description: String): Goal
    deleteGoal(_id: ID): Task
    createTask(description: String, projectId: ID): Task
    deleteTask(_id: ID): Task
  }

  type Goal {
    _id: ID
    name: String
    description: String
    createdAt: String
    updatedAt: String
  }

  type Task {
    _id: ID
    description: String
    projectId: ID
    createdAt: String
    updatedAt: String
  }
`;

export { typeDefs };

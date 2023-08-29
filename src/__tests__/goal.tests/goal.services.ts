import axios from "axios";

const getGoalsService = () => {
  try {
    const response = axios("http://localhost:4000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        operationName: "getGoals",
        query: `query getGoals { name, description }`,
      },
    });

    return response;
  } catch (e) {
    e instanceof Error && console.error(e.message);
  }
};

export { getGoalsService };

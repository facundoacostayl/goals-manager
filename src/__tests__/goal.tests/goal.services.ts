import axios from "axios";

const url = "http://localhost:4000/graphql";
const headers = `"Content-Type": "application/json"`;

const getGoalsService = async () => {
  try {
    return await axios(url, {
      method: "POST",
      headers: {
        headers,
      },
      data: {
        operationName: "getGoals",
        query: `query getGoals { name, description }`,
      },
    });
  } catch (e) {
    e instanceof Error && console.error(e.message);
  }
};

export { getGoalsService };

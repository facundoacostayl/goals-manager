import fetch from "node-fetch";

const url = "http://localhost:4000/graphql";
const headers = `"Content-Type": "application/json"`;

const getGoalsService = async () => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        headers,
      },
      body: JSON.stringify({
        query: `{
          getGoals {
              name,
              description
          }
        }`,
      }),
    });

    const goals = response.json();
    return goals;
  } catch (e) {
    e instanceof Error && console.error(e.message);
  }
};

export { getGoalsService };

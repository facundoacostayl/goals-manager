import fetch from "node-fetch";

const getGoalsService = async () => {
  try {
    const response = await fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `{
                    goals{
                        name,
                        description
                    }
                }`,
      }),
    });

    const data = await response.json();
    return data;
  } catch (e) {
    e instanceof Error && console.error(e.message);
  }
};

export { getGoalsService };

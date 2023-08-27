import { getGoalsService } from "./goal.services";

const getGoals = async () => {
  const response = await getGoalsService();
  return response;
};

export { getGoals };

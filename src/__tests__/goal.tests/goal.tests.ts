import { getGoals } from "./goal.controllers";
import { getGoalsService } from "./goal.services";

jest.mock("./goal.services");
const mockedGoals = getGoalsService as jest.Mock;

describe("goal", () => {
  describe("get goals", () => {
    describe("given goals exist and these contain name property", () => {
      it("should return true", async () => {
        mockedGoals.mockReturnValueOnce({
          data: { name: "Always do the best", description: "Habit Commitment" },
        });
        const goals = await getGoals();
        expect(goals).toHaveProperty("data");
      });
    });
  });
});

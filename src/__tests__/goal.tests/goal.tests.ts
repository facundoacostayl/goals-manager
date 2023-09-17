import { getGoals } from "./goal.controllers";
import { getGoalsService } from "./goal.services";

jest.mock("./goal.services");
const mockedGoals = getGoalsService as jest.Mock;

beforeEach(() => {
  mockedGoals.mockClear();
});

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

describe("goal", () => {
  describe("get goals", () => {
    describe("given goals query throw an error", () => {
      it("should return false", async () => {
        mockedGoals.mockReturnValueOnce(new Error("Have been an Error"));
        const goals = await getGoals();
        expect(goals).toBeInstanceOf(Error);
      });
    });
  });
});

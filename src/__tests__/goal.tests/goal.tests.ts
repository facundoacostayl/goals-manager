import { getGoals } from "./goal.controllers";
//import { getGoalsService } from "./goal.services";

jest.mock("./goal.services");
//const mockedServices = getGoalsService as jest.Mocked<typeof getGoalsService>;

describe("goal", () => {
  describe("get goals", () => {
    describe("given goals exist and these contain name property", () => {
      it("should return true", async () => {
        const goals = await getGoals();
        goals && console.log(goals.data);
        expect(goals).toHaveProperty("data");
      });
    });
  });
});

//import { getGoals } from "./goal.controllers";
import { getGoalsService } from "./goal.services";

jest.mock("./goal.services");
//const mockedGoals = getGoals as jest.Mocked<typeof getGoals>;

describe("goal", () => {
  describe("get goals", () => {
    describe("given goals exist and these contain name property", () => {
      it("should return true", async () => {
        console.log(await getGoalsService());
        //goals && console.log(goals.data);
        //expect(goals).toHaveProperty("data");
      });
    });
  });
});

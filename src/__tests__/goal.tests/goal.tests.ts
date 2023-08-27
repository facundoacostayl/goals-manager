import { getGoals } from "./goal.controllers";

describe("goal", () => {
  describe("get goals", () => {
    describe("given goals exist and these contain name property", () => {
      it("should return true", async () => {
        const goals = await getGoals();

        console.log(goals.data.goals);
        expect(goals).toHaveProperty("data");
      });
    });
  });
});

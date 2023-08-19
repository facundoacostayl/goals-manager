import supertest from "supertest";
import { app } from "../app.js";

describe("goal", () => {
  describe("get a goal", () => {
    describe("given goal does exist", () => {
      it("should return true", async () => {
        const goalId = "";
        await supertest(app).get("");
      });
    });
  });
});

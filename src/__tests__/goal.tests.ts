import supertest from "supertest";
import { server } from "../app";
import { gql } from "graphql-tag";

describe("goal", () => {
  describe("get a goal", () => {
    describe("given goal does exist", () => {
      it("should return true", async () => {
        const goalId = "";
        await supertest(server).get("");
      });
    });
  });
});

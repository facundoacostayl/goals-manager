//import { server } from "../../app";
//import { gql } from "graphql-tag";
import { request, expect } from "../config";

describe("goal", () => {
  describe("get goals", () => {
    it("should return true", (done) => {
      request
        .post("/")
        .send({
          query: "{ goals { name, description } }",
        })
        .set("Accept", "application/json")
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.be.a("object");
          console.log(res.body.data!.goals[0]);
          //expect(res.body.data!.goals[0].to.have.property("_id"));
          done();
        });

      //expect(result).toBeTruthy();
      //expect(result).toHaveProperty("data");
    });
  });
});

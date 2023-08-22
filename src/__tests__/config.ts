import chai from "chai";
import chaiGraphQL from "chai-graphql";
import supertest from "supertest";
chai.use(chaiGraphQL);

const { assert } = chai;
const baseUrl = "http://localhost:4000/graphql";
const request = supertest(baseUrl);
const expect = chai.expect;

export { assert, request, expect };

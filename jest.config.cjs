/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/**/*.tests.ts"],
  verbose: true,
  forceExit: true,
  // clearMocks: true,
};

import fetch from "node-fetch";
import { getGoalsService } from "./goal.services";

jest.mock("node-fetch");
const mockedFetch = fetch as unknown as jest.Mock;

describe("fetch goal", () => {
  describe("getGoals", () => {
    describe("given data is successfully returned", () => {
      it("should return true", async () => {
        expect(mockedFetch).toHaveBeenCalledTimes(0);

        mockedFetch.mockReturnValueOnce({
          json: () =>
            Promise.resolve({
              text: "Test Pass",
            }),
        });
        1;
        const data = await getGoalsService();
        expect(mockedFetch).toHaveBeenCalledTimes(1);
        data && expect(data.text).toBe("Test Pass");
      });
    });
  });
});

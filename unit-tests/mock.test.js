import { assert } from "chai";
import { send } from "./mocks/response.mock.js";

describe("res", () => {
  it("should return data it was given", () => {
    let testData = ["1", "2", "3"];
    let actualData = send(testData);
    assert.deepEqual(actualData, testData, "should be the same data");
  });
});

// Math.LOG2E
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/LOG2E

const getLog2e = require("../Math.LOG2E");

describe("Math.LOG2E", () => {
  test("the base 2 logarithm of e, approximately 1.442:", () => {
    expect(getLog2e()).toEqual(1.4426950408889634);
  });
});

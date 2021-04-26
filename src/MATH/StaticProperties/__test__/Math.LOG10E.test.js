// Math.LOG10E
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/LOG2E

const getLog10e = require("../Math.LOG10E");

describe("Math.LOG10E", () => {
  test("the base 10 logarithm of e, approximately 0.434:", () => {
    expect(getLog10e()).toEqual(0.4342944819032518);
  });
});

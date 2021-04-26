// Math.SQRT2
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/SQRT2

const getRoot2 = require("../Math.SQRT2");

describe("Math.SQRT2", () => {
  test("the square root of 2, approximately ", () => {
    expect(getRoot2(Math.SQRT2)).toBe(1.4142135623730951);
  });
});

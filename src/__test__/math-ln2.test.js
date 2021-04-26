// Math.LN2
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/LN2

const getNatLog2 = require("../math-ln2");

describe("Math.LN2", () => {
  test("natural logarithm of 2, approximately 0.693", () => {
    expect(getNatLog2()).toEqual(0.6931471805599453);
  });
});

// Math.SQRT1_2
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/SQRT1_2

const getRoot1Over2 = require("../math-SQRT1_2");

describe("Math.SQRT1_2", () => {
  test("the square root of 1/2 which is approximately 0.707:", () => {
    expect(getRoot1Over2()).toEqual(0.7071067811865476);
  });
});

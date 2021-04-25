// Math.PI
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI

const {
  calculateCircumference,
  calculateCircumference_2,
} = require("../math-pi");

describe("Math.PI()", () => {
  test("calculate the circumference test 1", () => {
    expect(calculateCircumference(10)).toBe(62.83185307179586);
  });

  test("calculate the circumference test 1", () => {
    expect(calculateCircumference_2(1)).toBe(6.283185307179586);
  });
});

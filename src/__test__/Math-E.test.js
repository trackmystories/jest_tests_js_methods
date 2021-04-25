// Math.E
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/E

const { compoundOneYear, getNapier } = require("../math-e");

describe("Math.E", () => {
  test("compound interest rate one year", () => {
    expect(compoundOneYear(0.05, 100)).toBe(105.12710963760242);
  });

  test("value of base of natural logarithms, e", () => {
    expect(getNapier(Math.E)).toBe(2.718281828459045);
  });
});

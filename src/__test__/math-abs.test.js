// Math.abs()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

const { difference, testMathAbs } = require("../math-abs");

describe("Math.abs()", () => {
  test("calculate absolute value", () => {
    expect(difference(3, 5)).toEqual(2);
  });

  test("calculate absolute value in reverse", () => {
    expect(difference(5, 3)).toBe(2);
  });

  test("absolute value decimal ints", () => {
    expect(difference(1.23456, 7.89012)).toBe(6.6555599999999995);
  });

  test("Math.abs('-1') returns ", () => {
    expect(testMathAbs("-1")).toEqual(1);
  });

  test("Math.abs(-2) returns ", () => {
    expect(testMathAbs(-2)).toEqual(2);
  });

  test("Math.abs(null)", () => {
    expect(testMathAbs(null)).toEqual(0);
  });

  test("Math.abs(' ') returns ", () => {
    expect(testMathAbs("")).toEqual(0);
  });

  test("Math.abs([]) returns ", () => {
    expect(testMathAbs([])).toEqual(0);
  });

  test("Math.abs([2])", () => {
    expect(testMathAbs([2])).toEqual(2);
  });

  test("Math.abs([1,2])", () => {
    expect(testMathAbs([1, 2])).toBeNaN();
  });

  test("Math.abs({})", () => {
    expect(testMathAbs({})).toBeNaN();
  });

  test("Math.abs('string')", () => {
    expect(testMathAbs("string")).toBeNaN();
  });

  test("Math.abs()", () => {
    expect(testMathAbs()).toBeNaN();
  });
});

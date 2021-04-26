// Math.cos()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cos
// https://en.wikipedia.org/wiki/Trigonometric_functions#cos

const { getCircleX, testMathCos } = require("../Math.cos()");

describe("Math.cos()", () => {
  test("the cosine with input", () => {
    expect(getCircleX(1, 10)).toEqual(5.403023058681398);
  });

  test("the cosine with input", () => {
    expect(getCircleX(2, 10)).toEqual(-4.161468365471424);
  });

  test("the cosine with Math.PI", () => {
    expect(getCircleX(Math.PI, 10)).toEqual(-10);
  });

  test("Math.cos(0) returns ", () => {
    expect(testMathCos(0)).toEqual(1);
  });

  test("Math.cos(1) returns ", () => {
    expect(testMathCos(1)).toEqual(0.5403023058681398);
  });

  test("testMathCos(Math.PI)", () => {
    expect(testMathCos(Math.PI)).toEqual(-1);
  });
});

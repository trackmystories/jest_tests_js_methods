// Math.log10()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log10

const mathlog = require("../math-log10");

describe("Math.log10()", () => {
  test("expected base 10 logarithm of number", () => {
    expect(mathlog(100000)).toBe(5);
  });

  test("expected base 10 logarithm of number", () => {
    expect(mathlog(2)).toEqual(0.3010299956639812);
  });

  test("expected base 10 logarithm of number", () => {
    expect(mathlog(1)).toEqual(0);
  });

  test("expected base 10 logarithm of number", () => {
    expect(mathlog(0)).toEqual(-Infinity);
  });

  test("expected base 10 logarithm of number", () => {
    expect(mathlog(-2)).toBeNaN();
  });
});

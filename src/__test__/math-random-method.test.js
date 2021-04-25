// Math.random()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const getRandomInt = require("../math-random-method");

describe("Math.random()", () => {
  test("expected output: 0", () => {
    expect(getRandomInt(1)).toBe(0);
  });

  test("expected output: 0, 1 or 2", () => {
    expect(getRandomInt(3)).toBeLessThanOrEqual(2);
  });
});

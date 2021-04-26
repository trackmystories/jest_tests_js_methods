// Function.prototype.apply()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

const { min, max, append } = require("../Function.prototype.apply()");

describe("test min, max", () => {
  const numbers = [5, 6, 2, 3, 7];
  const array = ["a", "b"];
  const elements = [0, 1, 2];

  test("max is equal to", () => {
    expect(max(numbers)).toEqual(7);
  });

  test("max is equal to", () => {
    expect(min(numbers)).toEqual(2);
  });

  test("append an array to another", () => {
    expect(append(array, elements)).toBe(5);
  });
});

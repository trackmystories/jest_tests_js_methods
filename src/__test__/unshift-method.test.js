// Array.prototype.unshift()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

const unshiftMethod = require("../unshift-method");

describe("Array.prototype.unshift()", () => {
  const array = [1, 2, 3];

  test("adds one or more to the beginning return new length.", () => {
    expect(unshiftMethod(array, 4, 5)).toBe(5);
  });

  test("if not NAN.", () => {
    expect(unshiftMethod(array, 4, 5)).not.toBeNaN();
  });
});

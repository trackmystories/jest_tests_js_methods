// Array.prototype.shift()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

const shiftMethod = require("../shift-method");

describe("Array.prototype.shift()", () => {
  const arr = [1, 2, 3];

  test(".", () => {
    expect(shiftMethod(arr)).toBe(1);
  });
});

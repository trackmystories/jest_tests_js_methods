// Array.prototype.every()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

const threshold = require("../every-method");

describe("Array.prototype.every()", () => {
  const array = [1, 30, 39, 29, 10, 13];

  test(" expected output: true", () => {
    expect(threshold(array, 40)).toBeTruthy();
  });

  test(" expected output: true", () => {
    expect(threshold(array, 29)).toBeFalsy();
  });
});

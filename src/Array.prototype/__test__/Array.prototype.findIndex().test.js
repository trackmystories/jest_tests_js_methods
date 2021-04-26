// Array.prototype.findIndex()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

const isPrime = require("../Array.prototype.findIndex()");

describe("Array.prototype.find()", () => {
  test("Find a prime number in an array", () => {
    expect([4, 6, 7, 9, 12].findIndex(isPrime)).toEqual(2);
  });
});

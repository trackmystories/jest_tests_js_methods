// Array.prototype.find()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

const isPrime = require("../find-method");

describe("Array.prototype.find()", () => {
  test("Find a prime number in an array", () => {
    expect([4, 5, 8, 12].find(isPrime)).toEqual(5);
  });
});

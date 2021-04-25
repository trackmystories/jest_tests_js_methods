//Array.prototype.join()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

const f = require("../join-method");

describe("Array.prototype.join()", () => {
  test("Joining an array-like object", () => {
    expect(f(1, "a", true)).toBe("1,a,true");
  });
});

// Function.prototype.call()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call

const Food = require("../call-method");

describe("test call()", () => {
  test("expect value to equal", () => {
    expect(new Food("cheese", 5).name).toBe("cheese");
  });

  test("expect value to equal", () => {
    expect(new Food("cheese", 5).price).toEqual(5);
  });
});

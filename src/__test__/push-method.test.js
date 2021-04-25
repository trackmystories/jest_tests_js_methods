//Array.prototype.push()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

const pushMethod = require("../push-method");

describe("test pushTest", () => {
  let a = ["alpha", "beta", "theta"];
  let b = "delta";

  test("if count is 4", () => {
    expect(pushMethod(a, b)).toBe(4);
  });

  test("expect not to be NAN", () => {
    expect(pushMethod(a, b)).not.toBeNaN();
  });

  test("expect not to be undefined", () => {
    expect(pushMethod(a, b)).not.toBeUndefined();
  });

  test("to be greater than or equal to", () => {
    expect(pushMethod(a, b)).toBeGreaterThanOrEqual(4);
  });

  test("to not be less than or equal to", () => {
    expect(pushMethod(a, b)).not.toBeLessThanOrEqual(3);
  });
});

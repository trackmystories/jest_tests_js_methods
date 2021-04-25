// Array.prototype.forEach()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

const forEachMethod = require("../forEach-method");

describe("test forEachMethod", () => {
  const array = ["alpha", "beta", "theta", "delta"];

  test("expect not to be NAN", () => {
    expect(forEachMethod(array)).not.toBeNaN();
  });

  test("expect array undefined", () => {
    expect(forEachMethod(array)).toBeUndefined();
  });
});

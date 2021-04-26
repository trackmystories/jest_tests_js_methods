// Array.prototype.fill()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

const {
  fillMethod1,
  fillMethod2,
  fillMethod3,
} = require("../Array.prototype.fill()");

describe("Array.prototype.fill()", () => {
  const array = [1, 2, 3, 4];

  test("fill with 0 from position 2 until position 4", () => {
    expect(fillMethod1(array)).toContain(1, 2, 0, 0);
  });

  test("fill with 5 from position 1", () => {
    expect(fillMethod2(array)).toContain(1, 5, 5, 5);
  });

  test("expected out equal to ", () => {
    expect(fillMethod3(array)).toContain(6, 6, 6, 6);
  });
});

// Array.prototype.flat()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
const { flatDeep, flatten } = require("../Array.prototype.flat()");

describe("Array.prototype.flat()", () => {
  const arr = [1, 2, [3, 4, [5, 6]]];

  test("deep level flatten use recursion with reduce and concat", () => {
    expect(flatDeep(arr, Infinity)).toContain(1, 2, 3, 4, 5, 6);
  });

  test("non recursive flatten deep using a stack", () => {
    expect(flatten(arr)).toContain(1, 2, 3, 4, 5, 6);
  });
});

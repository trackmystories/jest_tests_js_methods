// Function.prototype.bind()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

const { list, addArguments } = require("../Function.prototype.bind()");

describe("Function.prototype.bind()", () => {
  const list1 = list(1, 2, 3);
  const result1 = addArguments(1, 2);
  const leadingThirtysevenList = list.bind(null, 37);
  const addThirtySeven = addArguments.bind(null, 37);

  test("leadingThirtysevenList", () => {
    expect(leadingThirtysevenList()).toContain(37);
  });

  test("Partially applied functions", () => {
    expect(leadingThirtysevenList(1, 2, 3)).toContain(37, 1, 2, 3);
  });

  test("addThirtySeven", () => {
    expect(addThirtySeven(5)).toEqual(42);
  });

  test("if second argument is ignored", () => {
    expect(addThirtySeven(5, 10)).toEqual(42);
  });
});

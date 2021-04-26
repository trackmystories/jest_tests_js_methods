// Object.prototype.toString()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString

const Dog = require("../Object.prototype.toString()");

describe("Object.prototype.toString()", () => {
  test("", () => {
    const dog1 = new Dog("Gabby");
    expect(dog1.toString()).toBe("Gabby");
  });
});

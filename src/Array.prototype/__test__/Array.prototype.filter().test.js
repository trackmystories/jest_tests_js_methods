// Array.prototype.filter()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const filterMethod = require("../Array.prototype.filter()");

describe("Array.prototype.filter()", () => {
  const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
  ];

  test("word.length > 6", () => {
    expect(filterMethod(words)).toContain(
      "exuberant",
      "destruction",
      "present"
    );
  });
});

// Array.prototype.map();
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const mapMethod = require("../map-method");

describe("test pushTest", () => {
  let arr = ["alpha", "beta", "theta", "delta"];

  const regularExp = [
    expect.stringMatching(/^a/),
    expect.stringMatching(/^be/),
    expect.stringMatching(/^the/),
  ];

  const doesNotContain = [
    expect.stringMatching("random"),
    expect.stringMatching("random"),
  ];

  test("to contain item", () => {
    expect(mapMethod(arr)).toContain("delta");
  });

  test("to contain equal items", () => {
    expect(mapMethod(arr)).toContainEqual("alpha", "beta", "theta", "delta");
  });

  test("matches the recieved value", () => {
    expect(mapMethod(arr)).toEqual(expect.arrayContaining(regularExp));
  });

  test("does not matche the recieved value", () => {
    expect(mapMethod(arr)).toEqual(expect.not.arrayContaining(doesNotContain));
  });

  test("to not contain", () => {
    expect(mapMethod(arr)).toEqual(expect.not.arrayContaining(["random"]));
  });

  test("matches if the recieved value does not contain", () => {
    expect(mapMethod(arr)).toEqual(expect.not.stringMatching("random"));
  });
});

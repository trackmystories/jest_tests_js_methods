//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math#converting_between_degrees_and_radians

//Converting between degrees and radians

const { degToRad, radToDeg } = require("../degrees-and-radians");

describe("degrees and radians", () => {
  test("degree to radians", () => {
    expect(degToRad(10)).toEqual(0.17453292519943295);
  });

  test("radians to degrees", () => {
    expect(radToDeg(10)).toEqual(572.9577951308232);
  });

  // convert 60 degrees to radians, as Math.tan() expects an input value in radians.

  test("Calculating the height of an equilateral triangle", () => {
    expect(50 * Math.tan(degToRad(60))).toEqual(86.60254037844383);
  });
});

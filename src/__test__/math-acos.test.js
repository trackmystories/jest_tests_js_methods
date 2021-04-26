// Math.acos()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/acos

const { calcAngle, testAcos } = require("../math-acos");

describe("Math.acos()", () => {
  test("angle of a right-angle triangle in radians", () => {
    expect(calcAngle(8, 10)).toEqual(0.6435011087932843);
  });

  test("NaN", () => {
    expect(calcAngle(5, 3)).toBeNaN();
  });

  test("Math.acos(-2) // NaN", () => {
    expect(testAcos(-2)).toBeNaN();
  });

  test("Math.acos(-1);  // 3.141592653589793", () => {
    expect(testAcos(-1)).toEqual(3.141592653589793);
  });

  test("Math.acos(0); // 1.5707963267948966", () => {
    expect(testAcos(0)).toEqual(1.5707963267948966);
  });

  test("Math.acos(0.5); // 1.0471975511965979", () => {
    expect(testAcos(0.5)).toEqual(1.0471975511965979);
  });

  test("Math.acos(1); // 0", () => {
    expect(testAcos(1)).toEqual(0);
  });

  test("Math.acos(2) // NaN", () => {
    expect(testAcos(2)).toBeNaN();
  });
});

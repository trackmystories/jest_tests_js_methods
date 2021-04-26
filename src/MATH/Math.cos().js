// Math.cos()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cos
// https://en.wikipedia.org/wiki/Trigonometric_functions#cos

function getCircleX(radians, radius) {
  return Math.cos(radians) * radius;
}

function testMathCos(radians) {
  return Math.cos(radians);
}

module.exports = {
  getCircleX,
  testMathCos,
};

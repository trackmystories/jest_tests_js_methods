// Math.abs()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

function difference(a, b) {
  return Math.abs(a - b);
}

function testMathAbs(x) {
  return Math.abs(x);
}

module.exports = {
  difference,
  testMathAbs,
};

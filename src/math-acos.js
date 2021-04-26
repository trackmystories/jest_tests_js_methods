// Math.acos()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/acos

function calcAngle(adjacent, hypotenuse) {
  return Math.acos(adjacent / hypotenuse);
}

function testAcos(x) {
  return Math.acos(x);
}

module.exports = { calcAngle, testAcos };

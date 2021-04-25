// Math.PI
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI

function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}

function calculateCircumference_2(radius) {
  return Math.PI * (radius + radius);
}

function valueOfPI(pi) {
  return pi;
}

module.exports = {
  calculateCircumference,
  calculateCircumference_2,
  valueOfPI,
};

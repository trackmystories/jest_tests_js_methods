// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Converting between degrees and radians

function degToRad(degrees) {
  return degrees * (Math.PI / 180);
}

function radToDeg(rad) {
  return rad / (Math.PI / 180);
}

module.exports = {
  degToRad,
  radToDeg,
};

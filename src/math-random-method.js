// Math.random()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomInt(max) {
  const m = Math.floor(Math.random() * max);
  return m;
}

module.exports = getRandomInt;

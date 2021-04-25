// Array.prototype.fill()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

function fillMethod1(array) {
  const a = array.fill(0, 2, 4);
  return a;
}

function fillMethod2(array) {
  const a = array.fill(5, 1);
  return a;
}

function fillMethod3(array) {
  const a = array.fill(6);
  return a;
}

module.exports = {
  fillMethod1,
  fillMethod2,
  fillMethod3,
};

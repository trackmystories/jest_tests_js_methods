// Array.prototype.shift()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

function shiftMethod(arr) {
  const firstElement = arr.shift();
  return firstElement;
}

module.exports = shiftMethod;

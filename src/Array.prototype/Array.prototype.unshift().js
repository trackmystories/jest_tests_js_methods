// Array.prototype.unshift()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

function unshiftMethod(arr, a, b) {
  const c = arr.unshift(a, b);
  return c;
}

module.exports = unshiftMethod;

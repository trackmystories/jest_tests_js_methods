// Array.prototype.filter()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

function filterMethod(arr) {
  const result = arr.filter((word) => word.length > 6);
  return result;
}

module.exports = filterMethod;

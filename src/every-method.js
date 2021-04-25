// Array.prototype.every()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

function threshold(array, th) {
  const isBelowThreshold = (currentValue) => currentValue < th;
  return array.every(isBelowThreshold);
}

module.exports = threshold;

// Function.prototype.apply()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

function max(numbers) {
  const mx = Math.max.apply(null, numbers);
  return mx;
}

function min(numbers) {
  const mn = Math.min.apply(null, numbers);
  return mn;
}

function append(array, elements) {
  const arrayAppend = array.push.apply(array, elements);
  return arrayAppend;
}

module.exports = {
  max,
  min,
  append,
};

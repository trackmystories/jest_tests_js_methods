//Array.prototype.push()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

function pushMethod(arr, prop) {
  const total = arr.push(prop);
  return total;
}

module.exports = pushMethod;

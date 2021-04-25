//Array.prototype.join()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

function f(a, b, c) {
  var s = Array.prototype.join.call(arguments);
  return s;
}

module.exports = f;

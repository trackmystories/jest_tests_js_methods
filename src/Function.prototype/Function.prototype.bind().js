// Function.prototype.bind()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

function list() {
  return Array.prototype.slice.call(arguments);
}

function addArguments(arg1, arg2) {
  return arg1 + arg2;
}

module.exports = {
  list,
  addArguments,
};

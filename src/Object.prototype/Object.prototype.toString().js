// Object.prototype.toString()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString

function Dog(name) {
  this.name = name;
}

function dogToString() {
  return this.name;
}

Dog.prototype.toString = dogToString;

module.exports = Dog;

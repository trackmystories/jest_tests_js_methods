// Math.E
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/E

function compoundOneYear(interestRate, currentVal) {
  return currentVal * Math.E ** interestRate;
}

function getNapier(approx) {
  return approx;
}

module.exports = {
  compoundOneYear,
  getNapier,
};

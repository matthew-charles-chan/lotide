const eqArrays = require('./eqArrays');

const assertEqualArrays = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

module.exports = assertEqualArrays;


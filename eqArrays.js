const assertEqual = function(actual, expected) {
  console.log(actual === expected ?
    `✅ Assertion Passed: ${actual} === ${expected}` :
    `❌ Assertion Failed: ${actual} !== ${expected}`
  );
};

const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    // if element w/in array does not match corresponding element in other string, or array lengths different, return false
    if (actual[i] !== expected[i] || actual.length !== expected.length) return false;
  }
  // else return true
  return true;
};


assertEqual(eqArrays([1, 2, 3,], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false);
assertEqual(eqArrays([1, 2, 3,], [1, 2, 3, 4]), false);
assertEqual(eqArrays([1, 2, 3,], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3,], [1, 0, 3]), false);
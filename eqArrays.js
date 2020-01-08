const assertEqual = function(actual, expected) {
  console.log(actual === expected ?
    `✅ Assertion Passed: ${actual} === ${expected}` :
    `❌ Assertion Failed: ${actual} !== ${expected}`
  );
};

const eqArrays = function(ar1, ar2) {
  for (let i = 0; i < ar1.length; i++) {
    // if element w/in array does not match corresponding element in other string, or array lengths different, return false
    if (ar1[i] !== ar2[i] || ar1.length !== ar2.length) return false;
  }
  // esle return true
  return true;
};


assertEqual(eqArrays([1, 2, 3,], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false);
assertEqual(eqArrays([1, 2, 3,], [1, 2, 3, 4]), false);
assertEqual(eqArrays([1, 2, 3,], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3,], [1, 0, 3]), false);
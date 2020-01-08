const assertEqualArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    // if element w/in array does not match corresponding element in other string, or array lengths different, return false
    if (actual[i] !== expected[i] || actual.length !== expected.length) {
      console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
      return;
    }
  }
  // esle return true
  console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
};

assertEqualArrays([1, 2, 3,], [1, 2, 3,]);
assertEqualArrays([1, 2, 3], [1, 2, "3"]);
assertEqualArrays([1, 2, 3,], [1, 2, 3, 4]);
assertEqualArrays([1, 2, 3,], [1, 2, 3]);
assertEqualArrays([1, 2, 3,], [1, 0, 3]);
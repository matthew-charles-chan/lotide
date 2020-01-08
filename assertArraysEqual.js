const assertEqualArrays = function(ar1, ar2) {
  for (let i = 0; i < ar1.length; i++) {
    // if element w/in array does not match corresponding element in other string, or array lengths different, return false
    if (ar1[i] !== ar2[i] || ar1.length !== ar2.length) {
      console.log(`❌ Assertion Failed: ${ar1} !== ${ar2}`);
      return;
    }
  }
  // esle return true
  console.log(`✅ Assertion Passed: ${ar1} === ${ar2}`);
};

assertEqualArrays([1, 2, 3,], [1, 0, 3]);
assertEqualArrays([1, 2, 3], [1, 2, "3"]);
assertEqualArrays([1, 2, 3,], [1, 2, 3, 4]);
assertEqualArrays([1, 2, 3,], [1, 2, 3]);
assertEqualArrays([1, 2, 3,], [1, 0, 3]);
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

const without = function(source, itemsToRemove) {
  let outputArray = [...source];
  for (let i = 0; i < itemsToRemove.length; i ++) {
    outputArray.splice(outputArray.indexOf(itemsToRemove[i]), 1);
  }
  return outputArray;
};

assertEqualArrays((without([1, 2, 3, 4], [1, 4])), [2, 3,]);
assertEqualArrays((without(["1", "2", "3"], [1, 2, "3", 'name'])), [1,2]);

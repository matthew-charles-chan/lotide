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
const flatten = function(array) {
  let flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        flattenedArray.push(array[i][j]);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
};


assertEqualArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertEqualArrays(flatten([['Matthew', 'chan'], [1, 4], 5, ['hello']]), ['Matthew', 'chan', 1, 4, 5, 'hello']);
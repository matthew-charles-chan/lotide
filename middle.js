const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    // if element w/in array does not match corresponding element in other string, or array lengths different, return false
    if (actual[i] !== expected[i] || actual.length !== expected.length) return false;
  }
  // esle return true
  return true;
};

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

const middle = function(array) {
  let midIndex = Math.floor(array.length / 2);
  let midValue = [];
  if (array.length % 2 !== 0) {
    midValue.push(array[midIndex]);
  } else {
    midValue.push(array[(midIndex - 1)],array[midIndex]);
  }
  return midValue;
};


assertEqualArrays(middle([1, 2, 3]),[2]);
assertEqualArrays(middle([1, 2, 3, 4]),[2, 3]);

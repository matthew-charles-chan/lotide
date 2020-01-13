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




const letterPositions = function(str) {
  // create resultObject
  let resultObject = {};
  for (let i = 0; i < str.length; i ++) {
    if (str[i] !== " ") {
      if (resultObject[str[i]]) {
        resultObject[str[i]].push(i);
      } else {
        resultObject[str[i]] = [i];
      }
    }
  }
  return resultObject;
};

module.exports = letterPositions;

// const testLetterPos = letterPositions("hello");

// assertEqualArrays(testLetterPos.h, [0]);
// assertEqualArrays(testLetterPos.e, [1]);
// assertEqualArrays(testLetterPos.l, [2,3]);
// assertEqualArrays(testLetterPos.o, [4]);


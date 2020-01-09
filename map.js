const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = []
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

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

const results1 = map(words, word => word[0]);
assertEqualArrays(results1, ['g', 'c', 't', 'm', 't']);

const itemLengths = map(words, word => word.length);
assertEqualArrays(itemLengths, [6, 7, 2, 5, 3])

const upperCase = map(words, word => word.toUpperCase())
assertEqualArrays(upperCase, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"])

const lastLetter = map(words, word => word[word.length-1])
assertEqualArrays(lastLetter, ['d','l', 'o', 'r', 'm'])
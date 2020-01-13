// const assertEqualArrays = function(actual, expected) {
//   for (let i = 0; i < actual.length; i++) {
//     // if element w/in array does not match corresponding element in other string, or array lengths different, return false
//     if (actual[i] !== expected[i] || actual.length !== expected.length) {
//       console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
//       return;
//     }
//   }
//   // esle return true
//   console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
// };

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      return results;
    } else {
      results.push(item);
    }
  }
  return results;
};

module.exports = takeUntil;



// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// assertEqualArrays(results1, [1,2,5,7,2]);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// assertEqualArrays(results2, ['I\'ve', 'been', 'to', 'Hollywood' ]);


const assertEqual = function(actual, expected) {
  console.log(actual === expected ?
    `✅ Assertion Passed: ${actual} === ${expected}` :
    `❌ Assertion Failed: ${actual} !== ${expected}`
  );
};


const findKey = function(object, callback) {
  const objKeys = Object.keys(object);
  for (let key of objKeys) {
    if (callback(object[key])) {
      return key;
    }
  }
};


// const restaurants = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// };

// const results1 = findKey(restaurants, x => x.stars === 2);
// assertEqual(results1, 'noma');

module.exports = findKey;
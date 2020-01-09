const assertEqual = function(actual, expected) {
  console.log(actual === expected ?
    `✅ Assertion Passed: ${actual} === ${expected}` :
    `❌ Assertion Failed: ${actual} !== ${expected}`
  );
};


const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    // if element w/in array does not match corresponding element in other string, or array lengths different, return false
    if (actual[i] !== expected[i] || actual.length !== expected.length) return false;
  }
  // else return true
  return true;
};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(objectA, objectB) {
  const aKeys = Object.keys(objectA);
  const bKeys = Object.keys(objectB);
  if (aKeys.length !== bKeys.length) {
    return false;
  }
  for (let key of aKeys) {
    if (Array.isArray(objectA[key])) {
      for (let i = 0; i < objectA[key].length; i ++) {
        if (objectA[key][i] !== objectB[key][i] || objectA[key].length !== objectB[key].length) {
          return false;
        }
      }
    } else if (objectA[key] !== objectB[key]) {
      return false;
    }
  }
  return true;
};

const ab = { a: '1', b: '2'};
const ba = { b: '2', a: '1'};
assertEqual(eqObjects(ab, ba), true);


const abc = {a: "1", b: "2", c: "3"};
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);
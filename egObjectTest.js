const assertEqual = function(actual, expected) {
  console.log(actual === expected ?
    `✅ Assertion Passed: ${actual} === ${expected}` :
    `❌ Assertion Failed: ${actual} !== ${expected}`
  );
};

const eqObjects = function(objectA, objectB) {
  const aKeys = Object.keys(objectA);
  const bKeys = Object.keys(objectB);
  // if objects are different lengths, return false
  if (aKeys.length !== bKeys.length) {
    return false;
  }
  // loop through object a
  for (let key of aKeys) {
    // if key is Array, loop through that array
    if (Array.isArray(objectA[key])) {
      for (let i = 0; i < objectA[key].length; i ++) {
        // if object keys are different (objectA key does not exist in objectB), return false
        if (!objectB[key]) {
          return false;
        }
        // if array lengths are different, return false 
        if (objectA[key].length !== objectB[key].length) {
          return false;
        } else if (objectA[key][i] !== objectB[key][i]) {
          return false;
        }
      }
    } else if (objectA[key] !== objectB[key]) {
      return false;
    }
  }
  return true;
};
    

const ab = { a: '1', b: [2, 4]};
const ba = { b: [2, 4], a: '1'};
assertEqual(eqObjects(ab, ba), true);


const abc = {a: "1", b: "2", c: "3"};
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const ed = { e: "1", d: ["2", 3], f: 7 };
const de = { d: ["2", 3], e: "1" };
assertEqual(eqObjects(ed, de), false);


const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);
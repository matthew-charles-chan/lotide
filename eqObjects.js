const assertEqual = function(actual, expected) {
  console.log(actual === expected ?
    `✅ Assertion Passed: ${actual} === ${expected}` :
    `❌ Assertion Failed: ${actual} !== ${expected}`
  );
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(objectA, objectB) {
  // set aKeys and bKeys to ObjectA and ObjectB keys
  const aKeys = Object.keys(objectA);
  const bKeys = Object.keys(objectB);
  
  //if number of keys is different ==> FALSE
  if (aKeys.length !== bKeys.length) {
    return false;
  }

  //loop through each key in objectA keys
  for (let key of aKeys) {
   
    // tests if key value is an array
    if (Array.isArray(objectA[key])) {
      // if an array, loop through the array
      for (let aKeyArray of objectA[key]) {
        // if array values are different or length of array is different ==> FALSE
        if (objectA[aKeyArray] !== objectB[aKeyArray] || objectA[key].length !== objectB[key].length) {
          return false;
        }
      }
    // if not an array, compare key values, if different ===> FALSE
    } else if (objectA[key] !== objectB[key]) {
      return false;
    }
  }

  // else, ==> TRUE
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

const ed = { e: "1", d: ["2", 3], f: 7 };
const de = { d: ["2", 3], e: "1" };
assertEqual(eqObjects(cd, dc), false);


const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);
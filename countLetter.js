const assertEqual = function(actual, expected) {
  console.log(actual === expected ?
    `✅ Assertion Passed: ${actual} === ${expected}` :
    `❌ Assertion Failed: ${actual} !== ${expected}`
  );
};


const countCharacters = function(str) {
  // splits string at spaces, and rejoins without spaces
  const noSpacesString = str.split(' ').join('');
  // create resultObject
  let resultObject = {};
  // loop over each letter of string
  for (let letter of noSpacesString) {
    // if letter exists in object, add 1
    if (resultObject[letter]) {
      resultObject[letter] += 1;
    // if letter does not exist in object, set to 1
    } else {
      resultObject[letter] = 1;
    }
  }
  return resultObject;
};


const testCountChar = countCharacters('lighthouse in the house');

assertEqual(testCountChar.h, 4)
assertEqual(testCountChar.l, 1)
assertEqual(testCountChar.t, 2)
assertEqual(testCountChar.e, 3)
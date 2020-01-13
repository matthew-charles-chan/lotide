const assertEqual = function(actual, expected) {
  console.log(actual === expected ?
    `✅ Assertion Passed: ${actual} === ${expected}` :
    `❌ Assertion Failed: ${actual} !== ${expected}`
  );
};

/*
const countOnly = function(allItems, itemsToCount) {
  let outputObject = {};
  let countedKeys = Object.keys(itemsToCount);
  for (let i = 0; i < countedKeys.length; i ++) {
    for (let j = 0; j < allItems.length; j ++) {
      if (allItems[j] === countedKeys[i] && itemsToCount[countedKeys[i]] === true) {
        if (countedKeys[i] in outputObject) {
          outputObject[countedKeys[i]] += 1;
        } else {
          outputObject[countedKeys[i]] = 1;
        }
      }
    }
  }
  console.log(outputObject);
  return outputObject;
};
*/
 
// more concise way

const countOnly = function(allItems, itemsToCount) {
  // create result object
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];


// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);

module.exports = countOnly;
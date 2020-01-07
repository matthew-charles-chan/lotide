const assertEqual = function(actual, expected) {
  console.log(actual === expected ?
    `✅ Assertion Passed: ${actual} === ${expected}` :
    `❌ Assertion Failed: ${actual} !== ${expected}`
  );
};

const tail = function(data) {
  let tailArray = [];
  for (let i = 1; i < data.length; i ++)
    tailArray.push(data[i]);
  return tailArray;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const words = ["hello", "Emma", "Matthew"];
tail(words);
assertEqual(words.length, 3);

console.log(tail([]));
console.log(tail([1]));


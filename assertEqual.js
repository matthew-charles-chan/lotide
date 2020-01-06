const assertEqual = function(actual, expected) {
  console.log(actual === expected ?
    '✅ Assertion Passed: ' + actual + ' === ' +  expected :
    '❌ Assertion Failed: ' + actual + ' !== ' +  expected
  );
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("hello", "hello");
assertEqual(3, 6);

const assertEqualObject = function(actual, expected) {
  const inspect = require('util').inspect;
  const actualKeys = Object.keys(actual);
  const expectedKeys = Object.keys(expected);
  let errorMsg = `❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  let passMsg = `✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  if (actualKeys.length !== expectedKeys.length) {
    console.log(errorMsg);
    return;
  }
  for (let key of actualKeys) {
    if (Array.isArray(actual[key])) {
      for (let actualKeyArray of actual[key]) {
        if (actual[actualKeyArray] !== expected[actualKeyArray] || actual[key].length !== expected[key].length) {
          console.log(errorMsg);
          return;
        }
      }
    } else if (actual[key] !== expected[key]) {
      console.log(errorMsg);
      return;
    }
  }
  console.log(passMsg);
  return;
};

const ab = { a: '1', b: '2'};
const ba = { b: '2', a: '1'};
assertEqualObject(ab, ba);


const abc = {a: "1", b: "2", c: "3"};
assertEqualObject(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqualObject(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqualObject(cd, cd2);
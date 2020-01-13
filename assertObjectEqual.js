
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
    if (!expected[key]) {
      console.log(errorMsg);
      return;
    } else if (Array.isArray(actual[key])) {
      for (let i = 0; i < actual[key].length; i ++) {
        if (actual[key].length !== expected[key].length) {
          console.log(errorMsg)
          return;
        } else if (actual[key][i] !== expected[key][i]) {
          console.log(errorMsg)
          return;
        }
      }
    } else if (actual[key] !== expected[key]) {
      console.log(errorMsg)
      return;
    }
  }
  console.log(passMsg)
  return;
};  

module.exports = assertEqualObject
  
// const ab = { a: '1', b: '2'};
// const ba = { b: '2', a: '1'};
// assertEqualObject(ab, ba);


// const abc = {a: "1", b: "2", c: "3"};
// assertEqualObject(ab, abc);

// const cd = { c: "1", d: ["2", 4] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqualObject(cd, dc);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqualObject(cd, cd2);
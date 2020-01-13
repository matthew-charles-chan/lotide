const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    // if element w/in array does not match corresponding element in other string, or array lengths different, return false
    if (actual.length !== expected.length) {
      return false 
    } else if (actual[i] !== expected[i]) {
      return false;
    } 
  }
  // else return true
  return true;
};

module.exports = eqArrays;



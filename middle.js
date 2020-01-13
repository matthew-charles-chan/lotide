const middle = function(array) {
  let midIndex = Math.floor(array.length / 2);
  let midArray = [];
  if (array.length < 3) {
    return midArray;
  } else if (array.length % 2 !== 0) {
    midArray.push(array[midIndex]);
  } else {
    midArray.push(array[(midIndex - 1)],array[midIndex]);
  }
  return midArray;
};

module.exports = middle;
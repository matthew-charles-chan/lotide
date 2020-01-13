const tail = function(data) {
  let tailArray = [];
  for (let i = 1; i < data.length; i ++)
    tailArray.push(data[i]);
  return tailArray;
};

module.exports = tail;

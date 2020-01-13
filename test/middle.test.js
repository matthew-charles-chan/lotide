const assertEqualArrays = require('../assertArraysEqual');
const middle = require('../middle')


assertEqualArrays(middle([1, 2]),[]);
assertEqualArrays(middle([1, 2, 3]),[2]);
assertEqualArrays(middle([1, 2, 3, 4]),[2, 3]);
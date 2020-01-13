const assertEqualArrays = require('../assertArraysEqual')

assertEqualArrays([1, 2, 3,], [1, 2, 3,]);
assertEqualArrays([1, 2, 3], [1, 2, "3"]);
assertEqualArrays([1, 2, 3,], [1, 2, 3, 4]);
assertEqualArrays([1, 2, 3,], [1, 2, 3]);
assertEqualArrays([1, 2, 3,], [1, 0, 3]);
const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('given [1,2,3], return [2]', () => {
    assert.deepEqual(middle([1,2,3]), [2])
  });
  
  it('given [1,2], return []', () => {
    assert.deepEqual(middle([1,2]), [])
  });

  it('given [1,2,3,4], return [2,3]', () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3])
  });
});
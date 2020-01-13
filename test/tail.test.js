const tail = require('../tail')
const assert = require('chai').assert



describe('#tail', () => {
  it('given ["Hello", "Lighthouse", "Labs"], return ["Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  });

  it("given [1,2,3,4], return [2,3,4]", () => {
    assert.deepEqual(tail([1,2,3,4]), [2,3,4])
  });
});

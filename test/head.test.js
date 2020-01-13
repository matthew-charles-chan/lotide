// const assertEqual = require('../assertEqual')
const assert = require('chai').assert
const head = require('../head')

describe ("#head", () => {
  it("given [5,6,7], return 5", () => {
    assert.strictEqual(head([5,6,7]), 5);
  });

  it("given [1, 2, 3], return 1", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("given ['Hello', 'Lighthouse', 'Labs'], return 'Hello", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); 
  });

});
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

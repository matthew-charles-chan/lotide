const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const countLetter = require('./countLetter');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const map = require('./map');
const letterPositions = require('./letterPositions');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  countLetter : countLetter,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  map: map,
  letterPositions: letterPositions,
  takeUntil: takeUntil,
  without: without
};
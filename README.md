# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by matthew-charles-chan as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetter()`: returns an object with letters(key) and their repetition(value).
* `countOnly()`: returns an object with array items of they pass a conditional. 
* `eqArrays()`: evaluates  the equality of two arrays.
* `eqObjects()`: evaluates  the equality of two arrays.
* `findKey()`: given an object value, within a key, return the key.
* `findKeyByValue()`: given an value, returns the key it is in.
* `flatten()`: given an array of nested arrays, return an array with no nested arrays.
* `head()`: given an array, return the first item.
* `letterPosition`: given a string, return the index of a particular character.
* `map()`: given an array and callback function, modify the array with the callback function.
* `middle()`: given an array, return the middle or 2 most middle items.
* `tail()`: given an array, return the array without the first item.
* `takeUntil()`: given an array and a value, return the array up until that value.
* `without()`: given a source array and array of values to remove, return an array without the values to remove.


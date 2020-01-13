const assertEqual = require('../assertEqual');
const tail = require('../tail')


const result = tail(["Hello", "Lighthouse", "Labs"]); // result is an Arraay
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"



const words = ["hello", "Emma", "Matthew"];
tail(words);
assertEqual(words.length, 3);

/* 1. Am I a String?
Create a function that returns true when the argument passed is a string and false otherwise. */

// **********************************************************************


function isString(value) {
    return typeof value === 'string';
}

// console.log(isString('hi there'));
// console.log(isString('hello')); // => true
// console.log(isString(['hello'])); // => false
// console.log(isString('this is a long sentence')); // => true
console.log(isString({ a: 2 })); // => false
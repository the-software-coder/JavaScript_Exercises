/* 2. Check for Array
Create a function that returns true when the parameter passed is an array and false otherwise. 

Be careful with typeof
*/

function isArray(value) {
    return  Array.isArray(value);
 }


// console.log(isArray('hello')); // => false
// console.log(isArray(['hello'])); // => true
// console.log(isArray([2, {}, 10])); // => true
console.log(isArray({ a: 2 })); // => false


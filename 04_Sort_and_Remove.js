/* 4. Sort and Remove Duplicated Characters

Take 2 strings a and b including only letters from a to z. 
Return a new string that only contains each letter from a and/or b once and that is sorted. */

// **********************************************************************

// ES6
longestES6 = (a, b) => {
    const ab = a + b;
    let newArr = [];
    for (const letter of ab) {
      newArr.indexOf(letter) === -1 ? newArr.push(letter) : null
    }
    return newArr.sort().join("");
  };
  

// ES6
const longestES6II = (arg1, arg2) => [...new Set(arg1 + arg2)].sort().join('');

longestES6('abcccaa', 'acddddffzzz') // => 'abcdfz'
console.log(longestES6('abcccaa', 'acddddffzzz')); // => 'abcdfz'


a = 'xyaabbbccccdefww'
b = 'xxxxyyyyabklmopq'
console.log(longestES6(a, b)); // => 'abcdefklmopqwxy'

longestES6(a, b) // => 'abcdefklmopqwxy'

a = 'abcdefghijklmnopqrstuvwxyz'
longestES6(a, a) // => 'abcdefghijklmnopqrstuvwxyz'

console.log(longestES6(a, a)); // => 'abcdefghijklmnopqrstuvwxyz'

console.log(longestES6II(a, a)); // => 'abcdefghijklmnopqrstuvwxyz'
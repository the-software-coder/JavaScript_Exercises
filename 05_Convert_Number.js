/* 5. Convert Number to Reversed Array of Digits
Take a random number and convert it to a reverse-sorted array of digits */

// **********************************************************************

// es5
function convert(n) {
    let newArr = ("" + n).split("");
    let numbs = [];
    for (let i = 0; i < newArr.length; i++) {
        numbs.push(parseInt(newArr[i]));            // https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/parseInt
    }
    return numbs.sort().reverse();
}

// es6
convertFunctionalAndES6 = num => num.toString().split('').map(Math.floor).sort().reverse();

console.log(convertFunctionalAndES6(429563)); // => [9, 6, 5, 4, 3, 2]
console.log(convertFunctionalAndES6(324)); // => [4, 3, 2]
// **********************************************************************
console.log(convert(429563)); // => [9, 6, 5, 4, 3, 2]
console.log(convert(324)); // => [4, 3, 2]






// ********************************************************************** StackOverflow Solution
// **********************************************************************
function reverseNumber(num){
    num = num + '';
        let reversedText = num.split('').reverse().join('');
        let reversedNumber = parseInt(reversedText, 10);
    console.log("reversed number: ", reversedNumber);
        return reversedNumber;
  }

console.log(reverseNumber(12345));
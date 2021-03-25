/* 6. Count Repetitions

You are given an array of strings (authors). Count the number of times each string occurs and keep track of it in an object. */

// **********************************************************************

// let authors = ['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante']

// When you call your function, this is the result you should get:

/* {
    kerouac: 2,
    fante: 3,
    buk: 2,
    hemingway: 1,
    hornby: 1
  } */



let authors = ['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante'];




// es5
function countRepetitions(elements) {
    const obj = {};
    for (const element of elements) {
      if (obj[element]) {
        obj[element] += 1;
      } else {
        obj[element] = 1;
      }
    }
    return obj;
  }
  
  // es6
  repetitionsES6 = elements => elements.reduce((acc, el) => {
    acc[el] ? acc[el] += 1 : acc[el] = 1;
    return acc
  }, {});
  
  
  const elements = ['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante'];
  console.log(countRepetitions(elements)); // { kerouac: 2, fante: 3, buk: 2, hemingway: 1, hornby: 1 }
  console.log(repetitionsES6(elements)); // { kerouac: 2, fante: 3, buk: 2, hemingway: 1, hornby: 1 }
  

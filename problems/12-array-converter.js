/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

/*
1.Make an empty obj.
2.Push the first el of the arr as the key and 1 as its value.
3.Check if the next el is already a key in the arr.
 a. If it isn't, execute step 2.
 b. If it is, add 1 to the value of the key.
4.Return the obj.

*/



function arrayConverter(array) {

  let obj = {};

  array.forEach(el => {
    if (el in obj) {
      obj[el]++;
    } else {
      obj[el] = 1;
    }


  })

  return obj;
  // Your code here
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;

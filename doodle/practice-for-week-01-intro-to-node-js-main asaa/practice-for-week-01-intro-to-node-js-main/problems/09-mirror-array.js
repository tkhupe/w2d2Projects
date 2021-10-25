/***********************************************************************
Write a function `mirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples:

Examples:

console.log(mirrorArray([1,2,3])); // => [ 1, 2, 3, 3, 2, 1 ]
console.log(mirrorArray(['a', 'b', 'c', 'd'])); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

function mirrorArray(array) {
  // Your code here
  let newArr = [];
  let copyArray = array.concat([]);
  newArr = array.concat(copyArray.reverse());
  return newArr;


}


console.log(mirrorArray([1,2,3])); // => [ 1, 2, 3, 3, 2, 1 ]
console.log(mirrorArray(['a', 'b', 'c', 'd'])); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

/****************** DO NOT MODIFY ANYTHING UNDER THIS  LINE ******************/
module.exports = mirrorArray;

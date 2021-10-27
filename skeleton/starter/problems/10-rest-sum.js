/***********************************************************************
Write a function named `restSum` that accepts all incoming parameters and sums them.

**Hint**: Use rest parameter syntax!

Examples: *
restSum(3,5,6); // => 14
restSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 14
restSum(0); // => 0
***********************************************************************/

// you'll need to change the parameters!
function restSum(...otherNums) {
  //   let myObj {}
  //   let someVaribleName = 'keyName'
  //     // your code here
  //     // myObj.someVariableName = 'some Value'
  //     myObj[someVaribleName] = 'some value';
  //     myObj['someVaribleName'] = 'new value';
  let sum = 0;
  otherNums.forEach(function (num) {
    sum += num;
  });
  return sum;
}




console.log(restSum(3, 5, 6)); // => 14
console.log(restSum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // => 14
console.log(restSum(0)); // => 0

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = restSum;

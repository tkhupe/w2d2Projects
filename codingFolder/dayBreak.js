// let sumArray = function(arr) {
//   sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     num = arr[i];
//     sum += num;
//   }
//   return sum;
// }




// console.log(sumArray([4, 3, -1, 10])); // 16
// console.log(sumArray([6, 7, 2])); // 15
// console.log(sumArray([])); // 0

// let avgVal = function(arr) {
//   if (arr.length === 0) {
//     return null;
//   }
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     num = arr[i];
//     sum += num;

//     }

// return sum / arr.length;
//     }




// console.log(avgVal([5, 10])); // 7.5
// console.log(avgVal([3, 7, 2, 1, 2])); // 3
// console.log(avgVal([])); // null

// let myIndexOf = function(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (target === arr[i]) {
//       return i;
//     }
//   }
//   return - 1;
// }


// console.log(myIndexOf(['a', 'b', 'c', 'e'], 'c')); // 2
// console.log(myIndexOf(['a', 'b', 'c', 'e'], 'e')); // 3
// console.log(myIndexOf(['a', 'b', 'c', 'e'], 'z')); // -1
// console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
// console.log(myIndexOf([43, -7, 11, 13], 1)); // -1


// let tripler = function(nums) {
//   let newNums = []
//   for (let i = 0; i < nums.length; i++) {
//     newNums.push(nums[i] * 3);
//     }

//       return newNums;

//     }




// console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
// console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]

// let longWords = function(words) {
//   let arr = [];
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > 5) {
//       arr.push(words[i]);
//     }

//   }
//   return arr;
// }


// console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
// console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]

// let removeEWords = function(sentence) {
//   let words = sentence.split(' ')
//   let newArr = []
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].includes('e') === false) {
//       newArr.push(words[i]);
//     }
//   }

// return newArr.join(' ');
//   }


// console.log(removeEWords('What time is it everyone?')); // 'What is it'
// console.log(removeEWords('Enter the building')); // 'building'

// let maxValue = function(nums) {
//   let val = 0;
//   if (nums.length === 0) {
//     return null;
//   }

//   for (let i = 0; i < nums.length; i++) {

//     if (nums[i] > val) {
//     val = nums[i];

//     }

// //   }
// //   return val;
// //    }





// // console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
// // console.log(maxValue([-2, -3, -7, 3 ])); // 3
// // console.log(maxValue([])); // null


// // // let twoSum = function (arr, target) {
// // //   for (let i = 0; i < arr.length; i++) {
// // //     let num1 = arr[i];

// // //     for (let j = i + 1; j < arr.length; j++) {
// // //       let num2 = arr[j];

// // //       if (num1 + num2 === target) {
// // //       return true;
// // //       }
// // //     }
// // //   }
// // //   return false;
// // // };


// // // console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
// // // console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
// // // console.log(twoSum([4, 6, 2, 3], 8)); // true
// // // console.log(twoSum([4, 6, 2, 3], 11)); // false

// // let reverseSentence = function (sentence) {
// //   let arr = sentence.split(' ');
// //   let newArr = [];

// //   for (let i = arr.length - 1; i >= 0; i--) {
// //     newArr.push(arr[i]);

// //   }
// //   let newStr = newArr.join(' ');
// //   return newStr;
// // }


// // console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
// // console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'

// let isPrime = function(numa) {
//     if (numa < 4 && numa > 1) {
//     return true;
//   }
//     for (let i = 2; i < numa; i++) {
//       if (numa % i === 0) {
//         return false;

//       }

//       }
//       return true

//     }
//      let choosePrimes = function(arr) {
//        let arrP = []
//        for (let i = 0; i < arr.length; i++) {
//          if (isPrime(arr[i])) {
//            arrP.push(arr[i]);

//          }
//        }
//        return arrP;
//      }




// console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
// console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]



// let fizzBuzz = function(max) {
//   let arr = []
// for (let i = 0; i < max; i++) {
//   if (i % 3 === 0 && i % 5 !== 0 || i % 3 !== 0 && i % 5 === 0) {
//     arr.push(i);

//   }
// }
// return arr;
// }



// console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
// console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]





// let abbreviate = function(word) {
//   let newWord = word.toLowerCase();
//   let vowels = 'aeiou';
//   let newStr = ' ';
//   for (let i = 0; i < newWord.length; i++) {
//     if (vowels.includes(newWord[i]) === false) {
//       newStr += newWord[i];
//     }
//   }
//   return newStr;
// }



// // console.log(abbreviate('wonderful')); // 'wndrfl'
// // console.log(abbreviate('mystery')); // 'mystry'
// // console.log(abbreviate('Accordian')); // 'ccrdn'
// let lastVowel = function(word) {
//   let vowels = 'aeiou';
//   let lastVowelIndex = null;
//   for (let i = word.length - 1; i >= 0; i--) {
//     if (vowels.includes(word[i])) {
//       lastVowelIndex = i
//     break;
//     }

//   }
//   return word.slice(0, lastVowelIndex) + word.slice(lastVowelIndex + 1)
// }

// let hipsterfy = function(sentence) {
// let vowels = 'aeiou';
// let newSen = []
// let arr  = sentence.split(' ');
// for (let i = 0; i < arr.length; i++) {
//   newSen.push(lastVowel(arr[i]));

// }
// return newSen.join(' ');
// // }



// // console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
// // console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
// // console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

// // let rotate = function(array, num) {
// //   let newArr =[]
// //     if (num > 0 ) {
// //       newArr = array.slice(array.length - num).concat(array.slice(0, array.length - num));



// // } else {
// //   newArr = array.slice(num* - 1).concat(array.slice(0, num* - 1));

// // }
// // array.length = 0;
// // for (let i = 0; i < newArr.length;i++) {
// //   array.push(newArr[i]);
// // }
// // }

// // let arr = ['a', 'b', 'c', 'd', 'e'];
// // rotate(arr, 2);
// // console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

// // let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
// // rotate(animals, -1);
// // console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]






// // let rotateRight = function(arr, num) {
// // let leftArr = arr.slice(0, arr.length-num);
// // let rightArr = arr.slice(arr.length-num,arr.length)
// // }

// // const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];


// // let alternatingWords = function(arr) {
// //   for (let i = 0; i < arr.length; i++) {
// //     if (i % 2 === 0) {
// //       arr[i] = arr[i].toUpperCase();
// //     } else {arr[i] = arr[i].toLowerCase();
// //   }
// // }
// // }



// // let words1 = ['Belka', 'STRELKA', 'laika', 'DEZIK', 'Tsygan'];
// // alternatingWords(words1);
// // console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik', 'TSYGAN' ]

// // let words2 = ['Yellowstone', 'Yosemite', 'Zion', 'Acadia'];
// // alternatingWords(words2);
// // console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia' ]

// let repeatingTranslate = function (sentence) {
//   let vowels = 'aeiou';
//   let words = sentence.split(' ');
//     for (let i = 0; i < words.length; i++) {
//     if (words[i].length > 3) {
//       if (vowels.includes(words[i][words[i].length - 1])) {
//         words[i] = words[i] + words[i];


//       }
//       else { let rightStr = '';
//         let word = words[i];
//         for (let j = word.length - 1; j >= 0; j--) {
//           if (vowels.includes(word[j])) {
//             word.slice(j);
//             rightStr = word.slice(j);
//             break;


//           }

//         }

//         words[i] = words[i] + rightStr;




//       }
//     }

//   }
// return words.join(' ');
// }





// console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
// console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
// console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
// console.log(repeatingTranslate("her family flew to France"));

// let maxInMatrix = function(matrix) {
//   let num = 0
//   for (let i = 0; i < matrix.length; i++) {
//     let arr = matrix[i];
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > num) {
//         num = arr[j];

//       }


//     }
//   }
//  return num
// }



// // matrix = [[11,  2,-99],
// //           [20, 19, 10],
// //           [47, 72, 56]]

// // console.log(maxInMatrix(matrix)); // 72

// // let maxColumn = function(matrix) {
// //   let height = matrix.length;
// //   let width = matrix[0].length;
// //   let maxValueArr = [];
// //   for (let col = 0; col < width; col++) {
// //     let colMax = 0;
// //     for (let row = 0; row < height; row++) {
// //       if (matrix[row][col] > colMax) {
// //         colMax = matrix[row][col];
// //       }
// //     }
// //     maxValueArr.push(colMax);

// //   }

// // return maxValueArr;

// // }

// // matrix = [[ 5,  9, 21],
// //           [ 9, 19,  6],
// //           [12, 14, 15]]

// // console.log(maxColumn(matrix)); // [12, 19, 21]




// function luckyNumbers(matrix) {
//   let height = matrix.length;
//   let width = matrix[0].length;
//   let luckyArr = []
//   for (let col = 0; col < width; col++) {
//     let maxRow = 0;
//     let maxColValue = 0;
//     for (let row = 0; row < height; row++) {

//       if (matrix[row][col] > maxColValue) {
//         maxColValue = matrix[row][col];
//         maxRow = row
//       }
//     }
//     //Todo check if maxColValue is min in this row (array)

//     let checkMin = true
//     for(let k = 0 ; k < matrix[maxRow].length;k++){
//         if(matrix[maxRow][k] < maxColValue){
//             checkMin = false;
//             break;
//         }
//     }
//     //Todo : if maxColValue is min add it to array, if not do nothing
//     if(checkMin){
//       luckyArr.push(maxColValue);
//     }



//   }

//   return luckyArr;
// }


// matrix = [[ 5,  9, 21],
//           [ 9, 19,  6],
//           [12, 14, 15]]

// console.log(luckyNumbers(matrix)); // [12]

// matrix = [[ 5, 10,  8,  6],
//           [10,  2,  7,  9],
//           [21, 15, 19, 10]]

// console.log(luckyNumbers(matrix)); // [10]


// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.slice(1, 3);
// console.log(arr.slice(1, 3));


// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// // expected output: Array ["camel", "duck", "elephant"]

// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// arr.splice(2, 3);
// console.log(arr);

// let yeller = function(words) {
//   let str = words.join('! ') + '!'
//   let yel = str.toUpperCase();
//   yel = yel.split(' ');
//   return yel;

// }

// console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
// console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]


// let yeller = function(words) {
//   let newWords = [];
//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     newWords.push(word.toUpperCase() + "!");
//   }




//   return newWords;

// }

// console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
// console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]

// let chooseyEndings = function(array, suffix) {
//   if (!Array.isArray(array)) {
//     return []

//   }
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     let word = array[i];
//     if (word.endsWith(suffix)) {
//       newArray.push(word);
// }
//   }



//   return newArray;

// }


// console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'ly'));
// // [ 'family', 'fly', 'timidly' ]

// console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'nd'));
// // [ 'hound', 'bond' ]

// console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'icity'));
// // [ 'simplicity', 'felicity' ]

// console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'ily'));
// // [ ]

// console.log(chooseyEndings(17, 'ily'));
// // [ ]

// function spiralOrder(matrix) {
//   let newArr = [];
//   let height = matrix.length;
//   let width = matrix[0].length;
// p0 = col = 0 , row = 0
// p1  = col = 1 , row =0
// p2 = col= 2 row =0
// p3 = col= 2 row =1
// p4  = col = 2 row = 2
// p5 = col = 1 row =2
// p6 = col = 0 row = 2
// p7 = col = 0 row =1
// p 8 = col = 1 row = 1

//   //



//   return newArr;
// }


// matrix = [[ 1, 2, 3],
//           [ 4, 5, 6],
//           [ 7, 8, 9]]

// console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

// matrix = [[1, 2, 3, 4],
//           [5, 6, 7, 8],
//           [9,10,11,12]]


// console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]



// let spiralArray = function(arr) {
//     let col  = arr[0].length
//     let row = arr.length
//     let newArr =[]
//     let arrLengh = col * row;
//     let round = 0 //round =1
//     let lastCol= 0
//     let lastRow= 0
//     let firstCol=0
//         while(newArr.length < arrLengh){


//     // go from left to the right
//      for ( let  i =0+round;i < col - round; i++){
//         newArr.push(arr[round][i])

//      }
//      console.log('afterlr',newArr)
//      let lastCol = col-1
//      // go from up to down

//      for  (let j=1; j< row; j++){
//         newArr.push(arr[j][lastCol])

//      }

//      console.log('afterud',newArr)
//      let lastRow = row - 1


//      // go from right to left
//      for (let k = lastCol-1; k >= 0; k--) {
//         newArr.push(arr[lastRow][k])

//      }

//      console.log('afterrl',newArr)
//      let firstCol = 0

//      // go from down to up
//      for (let m = lastRow-1; m > 0; m--) {
//         newArr.push(arr[m][firstCol])
//      }
//      console.log('arrdu',newArr)

//      round++

//     }
//     return newArr


// }

// var arr1 = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// var arr2 = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12]
// ]
// var arr3 = [
//     [1,2,3,4,5],
//     [6,7,8,9,10],
//     [11,12,13,14,15]
// ]

// var arr4 = [
//     [1 ,2, 3,  4, 5],
//     [6, 7, 8,  9, 10],
//     [11,12,13, 14, 15],
//     [16,17,18, 19, 20]
// ]
// console.log(spiralArray(arr4))

// let commonFactors = function (num1, num2) {
//   let fact = [];
//   let min = 0
//   if (num1 < num2) {
//     min = num2
//   } else {
//     min = num1;
//   }
//   for (let i = 1; i < min; i++) {
//     if (num1 % i === 0 && num2 % i ===0) {
//       fact.push(i);
//     }

//   }
//   return fact;
// }






// console.log(commonFactors(50, 30));            // [1, 2, 5, 10]
// console.log(commonFactors(8, 4));              // [1, 2, 4]
// console.log(commonFactors(4, 8));              // [1, 2, 4]
// console.log(commonFactors(12, 24));            // [1, 2, 3, 4, 6, 12]
// console.log(commonFactors(22, 44));            // [1, 2, 11, 22]
// console.log(commonFactors(7, 9));              // [1]


// let hasDoubleLetter = function(str) {
//   if (typeof(str) !== 'string') {
//     return null;
//   }


//   for (let i = 0; i < str.length; i++) {
//     let letter = str[i];
//     if (letter === str[i + 1]) {
//       return true;

//     }
//   }
//   return false;
// }



// console.log(hasDoubleLetter('deer')); // true
// console.log(hasDoubleLetter('boot camp')); // true
// console.log(hasDoubleLetter('toggle')); // true
// console.log(hasDoubleLetter('taco')); // false
// console.log(hasDoubleLetter('jumper')); // false
// console.log(hasDoubleLetter(18)); // null
// console.log(hasDoubleLetter(['array'])); // null

// let firstAndLast = function (arr) {
//   let sum = 0;
//   if (arr.length % 2 === 0) {
//    sum = arr[0] + arr[arr.length - 1];
//   } else {
//     sum = arr[0] - arr[arr.length - 1];
//   }
//   return sum;
// }



// console.log(firstAndLast([1, 2, 3, 4]));    // 5
// console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
// console.log(firstAndLast([12, 5]));         // 17
// console.log(firstAndLast([12]));            // 0
// console.log(firstAndLast([7, 11, 3]));      // 4


// let strangeSums = function (arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         count++;

//       }
//     }
//   }
//   return count;
// }



// console.log(strangeSums([2, -3, 3, 4, -2]));     // 2
// console.log(strangeSums([42, 3, -1, -42]));      // 1
// console.log(strangeSums([-5, 5]));               // 1
// console.log(strangeSums([19, 6, -3, -20]));      // 0
// console.log(strangeSums([9]));                   // 0

// let fibonacciSequence = function(num) {
//   let seq = [];
//   for (let i = 0; i < num; i++) {
//     if (i < 2 ) {
//       seq.push(1);
//     } else {
//       seq.push(seq[i -1] + seq[i -2]);
//     }
//   }




//   return seq;
// }



// console.log(fibonacciSequence(4));  // [ 1, 1, 2, 3 ]
// console.log(fibonacciSequence(5));  // [ 1, 1, 2, 3, 5 ]
// console.log(fibonacciSequence(8));  // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
// console.log(fibonacciSequence(0));  // [ ]
// console.log(fibonacciSequence(1));  // [ 1 ]
// console.log(fibonacciSequence(2));  // [ 1, 1 ]


// function costOfGroceries(groceries) {
//   sum = 0
//   for (let i = 0; i < groceries.length; i++) {
//     let value = 0
//      switch (groceries[i]) {
//     case "butter":
//       value = 1;
//       break;
//     case "eggs":
//       value = 2;
//       break;
//     case "milk":
//       value = 3;
//       break;
//     case "bread":
//       value = 4;
//       break;
//     case "cheese":
//       value = 5;
//       break;
//     }
//     sum += value;
//   }
//   return sum
// }

// function mostExpensiveGroceries(groceriesList) {
//   let most = 0
//   let index = 0
//   for (let i = 0; i < groceriesList.length; i++) {
//     let price = costOfGroceries(groceriesList[i]);
//     if (price > most) {
//       most = price;
//       index = i;

//     }

//   }
//   return index
// }


// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

// const groceriesA = ['cheese', 'butter', 'eggs'];
// const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
// const groceriesC = ['cheese', 'bread'];
// const groceriesD = ['eggs', 'butter'];

// costOfGroceries(groceriesA);  // 8
// costOfGroceries(groceriesB);  // 13
// costOfGroceries(groceriesC);  // 9
// costOfGroceries(groceriesD);  // 3

// mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]);

// let score = 0;

// if (costOfGroceries(groceriesA) === 8) score++;
// if (costOfGroceries(groceriesB) === 13) score++;
// if (costOfGroceries(groceriesC) === 9) score++;
// if (costOfGroceries(groceriesD) === 3) score++;

// if (mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]) === 1) score++;
// if (mostExpensiveGroceries([groceriesA, groceriesD]) === 0) score++;
// if (mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]) === 2) score++;

// console.log("You have scored " + score + "/7 points.");



// function stringChanger(word, operation) {
//   let bWord = word.toUpperCase();
//   let  subArr = bWord.split(' ');

//    //                    foo

//   //use the conditionals to look the operations
//   if (operation === "capitalize") {
//     // how to return "Foo"
//     return word[0].toUpperCase() + word.slice(1) // F + oo => Foo
//   }
//    if (operation === "uppercase") {
//      return word.toUpperCase() // foo => FOO
//   }
//    if (operation === "double") {
//     return word + word; // foo + foo => foofoo
//   }
//    if (operation === "reverse") {
//     // return word.split('').reverse().join('');
//   }
//   //if the operation is either of the following suggested
//   //do the following
//   //else return word by itself
// }


// // TESTS
// // DO NOT MODIFY ANYTHING BELOW THIS LINE

// let score = 0;

// if (stringChanger("foo", "capitalize") === "Foo") score++;
// if (stringChanger("foo", "uppercase") === "FOO") score++;
// if (stringChanger("foo", "double") === "foofoo") score++;
// if (stringChanger("foo", "reverse") === "oof") score++;

// if (stringChanger("foo", "unknown") === "foo") score++;

// console.log("You have scored " + score + "/5 points.");


// function isSorted(nums) {

//   // Loop through each number
//   for (let i = 1; i < nums.length; i++) {

//       // Check if the current number is less than
//       // the previous number
//       if (nums[i - 1] > nums[i ]) {
//           // If it's not, return false
//           return false;
//       }
//   }

//   // If every number is greater or equal to the previous number
//   // in the array, it's sorted.
//   return true;

// }

// console.log(isSorted([1, 2, 3, 4, 5]))  // true
// console.log(isSorted([2, 2, 4, 4]))  // true
// console.log(isSorted([1, 2, 4, 3, 5, 6]))  // false


// var number = 10;

// function calc() {



// return number;
// }
// console.log(calc());


// let snakeToCamel = function (str) {
//   let newStr = (' ');
//   let arr = str.split('_');
//   for (let i = 0; i < arr.length; i++) {
//     let word = arr[i];
//     let rightSide = word.slice(1).toLowerCase();
//     let newWord = word[0].toUpperCase() + rightSide;
//     newStr += newWord;
//   }




//   return newStr;
// }


// console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
// console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
// console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
// console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'

// let hasThreeVowels = function(str) {
//   let vowels = 'aeiou';
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       vowels = vowels.replace(str[i], "");
//       count++;
//       if (count >= 3) {
//         return true;
//       }
//     }
//   }
//   return false;
// }


// console.log(hasThreeVowels('delicious'));       //  true
// console.log(hasThreeVowels('bootcamp prep'));   //  true
// console.log(hasThreeVowels('bootcamp'));        //  false
// console.log(hasThreeVowels('dog'));             //  false
// console.log(hasThreeVowels('go home'));         //  false


// let isAntiPrime = function (num) {
//   for (let i = 0; i < num; i++) {
//     if (countDivisors(i) > countDivisors(num)) {
//       return false;
//     }
//   }
//   return true;
// }

// let countDivisors = function (num) {
//   let divisors = 0;
//   for (let i = 0; i < num; i++) {
//     if (num % i === 0) {
//       divisors++;
//       // console.log(i)
//     }
//   }
//   return divisors;

// }
// // console.log(countDivisors(24));
// let isAntiPrime = function (num) {
//   let numDivisor = countDivisors(num);
//   for (let i = 0; i < num; i++) {
//     if (countDivisors(i) > numDivisor) {
//       return false;
//     }
//   }
//   return true;
// }


// console.log(isAntiPrime(24))   // true
// console.log(isAntiPrime(36))   // true
// console.log(isAntiPrime(48))   // true
// console.log(isAntiPrime(360))  // true
// console.log(isAntiPrime(1260)) // true
// console.log(isAntiPrime(27))   // false
// console.log(isAntiPrime(5))    // false
// console.log(isAntiPrime(100))  // false
// console.log(isAntiPrime(136))  // false
// console.log(isAntiPrime(1024)) // false

// let i = 0;
// while (i < 10) {
//   console.log('hello');
//   i++;
// // }
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [7];

// let arr4 = arr1.concat(arr2, arr3);

// console.log(arr4)

// let myArr = ["b", "e", "a", "m"];
// myArr[0] = "s";
// console.log(myArr); // 'seam'

// let myStr = "beam";
// myStr[0] = "s";
// console.log(myStr); // 'beam'
// let replaceFirst = function (arr, newV) {
//   arr[0] = newV;
// }
// let box = ["a", "c", "d"];
// replaceFirst(box, "b");
// console.log(box);
// let popi = ['att', 'djdj', 'hop'];
// let res = popi.unshift('tkh');
// console.log(res);
// mocha


// for (let i = 1; i < word.length; i++) {
//   if (vowels.includes(word[i])) {
//       word.slice(i);
//     let rt = word.slice(i - word.length);
//     let lf = word.slice(0, i);
//     return rt + lf + "ay";


// function isSorted(nums) {

//   // Loop through each number
//   for (let i = 1; i < nums.length; i++) {

//       // Check if the current number is less than
//       // the previous number
//       if (nums[i - 1] > nums[i ]) {
//           // If it's not, return false
//           return false;
//       }
//   }

//   // If every number is greater or equal to the previous number
//   // in the array, it's sorted.
//   return true;

// }

// console.log(isSorted([1, 2, 3, 4, 5]))  // true
// console.log(isSorted([2, 2, 4, 4]))  // true
// console.log(isSorted([1, 2, 4, 3, 5, 6]))  // false

// function isSorted(nums) {

//   // Loop through each number
//   for (let i = 0; i < nums.length; i++) {

// Check if the current number is less than
// the previous number
//       if (nums[i - 1] > nums[i ]) {
//           // If it's not, return false
//           return false;
//       }
//   }

//   // If every number is greater or equal to the previous number
//   // in the array, it's sorted.
//   return true;

// }

// console.log(isSorted([1, 2, 3, 4, 5]))  // true
// console.log(isSorted([2, 2, 4, 4]))  // true
// console.log(isSorted([1, 2, 4, 3, 5, 6]))  // false


// function stringChanger(word, operation) {
//   // Your code here

// if (operation === 'capitalize') {
//   return word[0].toUpperCase() + word.slice(1);
// }

// if (operation === 'uppercase') {
//   return word.toUpperCase();
// }

// if (operation === 'double') {
//   return word + word;
// }

// if (operation === 'reverse') {
//   let newWord = '';
// for (let i = word.length - 1; i >=0; i--) {
// let char = word[i];
// newWord += char;
// }

//   newWord = word.split('').reverse().join('')
// return newWord;
// }
// else {
// return word;
// }
// }


// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

// let score = 0;

// if (stringChanger("foo", "capitalize") === "Foo") score++;
// if (stringChanger("foo", "uppercase") === "FOO") score++;
// if (stringChanger("foo", "double") === "foofoo") score++;
// if (stringChanger("foo", "reverse") === "oof") score++;

// if (stringChanger("foo", "unknown") === "foo") score++;

// console.log("You have scored " + score + "/5 points.");
// const assert = require("assert");
// const transpose = require("../problems/01-transpose.js");

// describe("transpose()", function() {
//     it ("should transpose a 2D array with the same number of rows and columns", function() {
//         const arr = [
//             [1, 2, 3],
//             [4, 5, 6],
//             [7, 8, 9]
//         ];
//         const transposed = [
//             [1, 4, 7],
//             [2, 5, 8],
//             [3, 6, 9]
//         ];
//         assert.deepEqual(transpose(arr), transposed);
//     });

//     it ("should transpose a 2D array with any dimensions", function() {
//         const arr = [
//             [1, 2],
//             [3, 4],
//             [5, 6],
//         ];
//         const transposed = [
//             [1, 3, 5],
//             [2, 4, 6]
//         ];

//         assert.deepEqual(transpose(arr), transposed);
//         assert.deepEqual(transpose(transposed), arr);
//     });

//});


/*function calculator(num1, operator, num2) {
  if (operator == "+") {
    return num1 + num2;
    }
  if (operator == "-") {
    return num1 - num2;
  }
  if (operator == "*") {
    return num1 * num2;
  }
  if (operator == "/") {
    return num1 / num2;
  }
  else {
    return 'Invalid Operator'
  }

    //for (let i = 0; i <=
}

// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

let score = 0;

if (calculator(123, "+", 456) === 579) score++;
if (calculator(987, "-", 654) === 333) score++;
if (calculator( 99, "*",   3) === 297) score++;
if (calculator(111, "/",   3) ===  37) score++;

if (calculator( 42, "?", 42) === "Invalid Operator") score++;

console.log("You have scored " + score + "/5 points."); */


// function getAverage(nums) {
//   let sum = 0;
//   for (i = 0; i < nums.length; i++) {
//     sum += nums[i];


//   }
//   return sum / nums.length;

// }

// function highestAverage(numsList) {
//   let high = 0;
//   let num = 0;
//   for (let i = 0; i < numsList.length; i++) {
//     let avg = getAverage(numsList[i]);
//     if (high < avg) {
//       high = avg;
//       num = i;
//     }

//   }
//   return num;

//   // Your code here
// }


// // TESTS
// // DO NOT MODIFY ANYTHING BELOW THIS LINE

// const arrayA = [1, 2, 3, 4, 5];
// const arrayB = [10000, -9998];
// const arrayC = [2, 100, 55, 19];
// const arrayD = [4, 8, 12];

// let score = 0;

// if (getAverage(arrayA) === 3) score++;
// if (getAverage(arrayB) === 1) score++;
// if (getAverage(arrayC) === 44) score++;
// if (getAverage(arrayD) === 8) score++;

// if (highestAverage([arrayA, arrayB, arrayC, arrayD]) === 2) score++;
// if (highestAverage([arrayA, arrayB]) === 0) score++;
// if (highestAverage([arrayA, arrayD]) === 1) score++;

//  console.log("You have scored " + score + "/7 points.");


function addition(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
function multiply(num1, num2, num3, num4) {
  // find the sum of num1 and num2
  // find the sumn of num3 and num4
  let str1 = addition(num1, num2);
  console.log(str1);
  let str2 = addition(num3, num4);
  console.log(str2);

  let answer = str1 * str2;
  return answer;
  // multpily the sum of those numbers
}
console.log(multiply(5, 4, 2, 3));

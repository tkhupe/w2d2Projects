/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:
*/

let hasThreeVowels = function(str) {
    let vowels ='aeiou';
    let arrChar = str.split('');
    //console.log(arrChar);
    let count = 0;
    arrChar.forEach(function(curV, index) {
        if (vowels.includes(curV)) {
            count++;
            vowels = vowels.replace(curV, '');
        }



    })
    if (count >= 3) {
        return true;
    }
    return false;

}


console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false




// your code here


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}

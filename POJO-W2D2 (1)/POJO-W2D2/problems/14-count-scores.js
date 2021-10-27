/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
the scorer (string) and a point value (number). `countScores(people)` should
return an object that has key-value pairs listing each person who scored as a key
and the sum of the total points for the game as their value.


Example 1:
let ppl = [{name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

Example 2:
let peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }

2. Make a plan
  define function countScores that takes in an array of objects
  create an object variable that holds the combinedScores 
  iterate through the array of objects to access each object individually
  create a score variable to hold he current persons score
  create a name variable to hold the current persons name

  check to see if the object has that persons name as a key already. 
  if the key is not present then we are seeing this persons information for the first time
  create the key value pair by setting the persons name as the key to their score
  if they key is present then we are already keeping track of that persons score
  update the score value by keying into the combinedScore obj via the name of the person
  and set the current score value to include (add) the next value
  after looking at all the data in the array (end of loop)
  return the combinedScore variable that holds the total score of each person

***********************************************************************/
// people is an array
function countScores(people) {
  let combinedScores = {};
  people.forEach((personObj) => {
    // {name: "Anthony", score: 2},
    let score = personObj.score;
    let name = personObj.name;
    if (!combinedScores[name]) {
      combinedScores[name] = score;
    } else {
      combinedScores[name] += score;
    }
  });
  return combinedScores;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countScores;

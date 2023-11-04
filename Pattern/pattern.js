const prompt = require("prompt-sync")({ sigint: true });
/*Patterns in JavaScript
********************************************
Example 1: Triangle Pattern - I

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

Approach:

We can see that we need to run a loop for a row number of times. 
We need to run a loop for 5 rows in the example here. 
This forms the external loop.
We need to run a loop to print n numbers in each row, where n is the row number. 
This forms the internal loop.
In the example above, we have 5 rows. For 5 rows, we need an external loop that goes from n = 1 to n = 5 (i.e. no of rows).
For each row, we need to print numbers from num = 1 to num = n.
Example : For the 5th row, n = 5. The internal loop goes from num = 1 to num = 5. The 5th row becomes: 1 2 3 4 5
Code:

var rows_num = prompt("Enter num of rows: ");
var num = ""

for (var i = 1; i <= rows_num; i++) {
  for (var j = 1; j <= i; j++) {
    num += j;
  }
  num += "\n";
}

console.log(num);

********************************************

Example 2: Triangle Pattern - II
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5

var input = prompt("enter the value: ");
var num = "";

for (let i = 1; i <= input; i++) {
    for (let j = 1; j <= i; j++){
        num += i;
    }
    num += "\n";
}
console.log(num);

********************************************

Example 3 : Triangle Pattern - III

1
2 3
4 5 6
7 8 9 10


var input = prompt("Enter the value: ");
var variable = 1
var num = "";
for (let i = 1; i <= input; i++) {
  for (let j = 1; j <= i; j++) {
    num += variable+" ";
    variable++;
  }
  num += "\n";
}
console.log(num);

//********************************************
Example 4: Reverse Triangle - I

12345
1234
123
12
1
*/ /*
let rows = 90;
// pattern variable carries the final pattern in string format
let pattern = "";
// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++) {
   for (let num = 1; num <= 6 - n; num++) {
      pattern += num;
   }
   pattern += "\n";
}
console.log(pattern);

var input = prompt("Enter the value: ");
var row = parseInt(input)+ 1;
var num = "";
for (let i = 1; i <= input; i++) {
  for (let j = 1; j <= row - i; j++) {
    num += j;
  }
  num += "\n";
}
console.log(num);

function getRandomNumber() {
  return Math.floor(Math.random() * 150) + 1;
}

// Generate 5 random numbers
for (var i = 0; i < 5; i++) {
  console.log(getRandomNumber());
}

//Write a JavaScript program to get the website URL (loading page)
alert(document.URL);
*/
// *************************************************
// Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.
//step1: write function to get random 15 character word/string.
function genRandomString(str){
  // allow char for search 
  var characters = "abcdefghijklmnopqrstuvwxyz"
  // variable  for random string with 15 char
  var randomStr = "";
  /*
  for (let i = 0; i< str;i++){
    //formula to generate random string(COULD REPEAT character in random)
    randomStr += characters.charAt(Math.floor(Math.random() * characters.length));
  }
*/
  for (let i = 0; i < str; i++) {
    //formula to generate random string(will NOT REPEAT character in random)
    var character = characters[Math.floor(Math.random() * characters.length)];
    if (randomStr.indexOf(character) === -1){
    //This -1 at last reduce one char that already added in randomstr
      randomStr += character;
    }
  }
  return randomStr;
}
var randomStr = genRandomString(15);
console.log(randomStr);//get 15 random charcters
// var array = Array.from(randomStr)
var input = prompt("Enter the char: ");//your character
console.log("You had Choosen: '"+input+"'");
//create a function to search your charater in randon 15 character
function checkCharInArray(input){
    if(randomStr.includes(input)){
      console.log("the character "+input+" is present in given string.")
    }else{
      console.log("the character "+input+" is NOT present in given string.")
    }
}
checkCharInArray(input)

























// END OF THE EXERCISE

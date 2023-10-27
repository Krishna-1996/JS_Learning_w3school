//Functions In javaScript
//This contain exercise for function used in javaScript.

// ******** //

// #1. Write a JavaScript function that reverses a number.
const prompt=require("prompt-sync")({sigint:true}); 
/*var num = prompt("Enter: ");//Input from user
function reverse_a_num(num)//function name
{
    num = num + "";
    return num.split("").reverse().join("");
    // function work split > reverse > join num
}
console.log(Number(reverse_a_num(num)));*/

// #2. Write a JavaScript function that checks whether a passed string is a palindrome or not?
/*
var word = prompt("Enter: ");//Input from user
function palindrome(word){
    word = word +"";
    word_rev = word.split("").reverse().join("");
    if(word === word_rev){
        console.log("The word is a palendrome")
    }
    else{
        console.log("The word is NOT a palendrome")
    }
}
console.log(palindrome(word));*/

// #3. Write a JavaScript function that generates all combinations of a string.
        //Example string : 'dog'
        //Expected Output : d,do,dog,o,og,g
        //APPROACH 1:: Use .push() and .slice() method
/*
var one_word = prompt("Enter: ");//Input from user
let possible_Combinations = (str) => {//function
    let combinations = [];//put in array
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            combinations.push(str.slice(i, j));
        }
    }
    return combinations;
}
console.log(possible_Combinations(one_word));
        //APPROACH 2: Using the .charAt() and .concat() method
let stringCombinations = (str) => {
    let strLength = str.length;
    let result = [];
    let currentIndex = 0;
    while (currentIndex < strLength) {
        let char = str.charAt(currentIndex);
        let x;
        let arrTemp = [char];
        for (x in result) {
            arrTemp.push("" + result[x] + char);
        }
        result = result.concat(arrTemp);
        currentIndex++;
    }
    return result;
};
console.log(stringCombinations(one_word));
*/
// #4. Write a JavaScript function that returns a string that has letters in alphabetical order.
/*
var words = prompt("Enter: ");//Input from user
function alphabet_order(str) { 
    const letters = str.replace(/[^a-zA-Z0-9]/g, '');
    // search a-z, A-Z, 0-9 in letters and replace it with ''
    const sorted = letters.split('').sort().join('');
    // first split then sort that(accending default) and the join the sorted.
    return sorted;
  }
  const str = words;
  console.log(alphabet_order(str));
  */

 // #5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case

var sentence = prompt("Enter: ");//Input from user
function capitalize_First_Letter(text) {
    //Split the given text by space " ".
    let words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      // in word go to char@0 and uppercase it and then slice the sentence
      console.log(words)
      // this function will traverse each word in the sentence everytime and uppercase the first letter of htword until all the first letters are get upper 
    }
    //after each traverse and slice time to join the whole sentence in one with first letter of each word is uppercase.
    return words.join(" ");
  }
  const text = sentence;
  console.log(capitalize_First_Letter(text));
  



















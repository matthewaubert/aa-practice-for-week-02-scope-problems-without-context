/***********************************************************************
Write a function named interrupter that accepts a single parameter `interruptingWord`: 
  `interrupter(interruptingWord)`
The interrupter function should return a function. 
When the function returned by interrupter is called with a sentence,
the sentence will be returned with the original interruptingWord inserted
between each word in the sentence.

Look below to see how this function is invoked:
let rudePerson = interrupter("what"); // => returns a function
console.log(rudePerson("how are you")); // prints "how what are what you"
console.log(rudePerson("I like pie")); // prints "I what like what pie"


Invoking the interrupter function again: 
let rudePerson2 = interrupter("yo"); // => returns a function
console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"


***********************************************************************/

function interrupter(interruptingWord) {
  // return a function
    // input: sentence
    // output: sentence with interruptingWord spliced in between each word
  return sentence => {
    // split sentence into array of words
    let words = sentence.split(" ");

    // iterate over words except last
    for (let i = 0; i < words.length - 1; i += 2) {
      // splice in interruptingWord after word
      words.splice(i + 1, 0, interruptingWord);
    }

    // return words joined into new sentence
    return words.join(" ");
  };
}


// let rudePerson = interrupter("what"); // => returns a function
// console.log(rudePerson("how are you")); // prints "how what are what you"
// console.log(rudePerson("I like pie")); // prints "I what like what pie"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = interrupter;
} catch (e) {
  return null;
}
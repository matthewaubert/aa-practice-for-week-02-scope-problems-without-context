/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of parameters
and returns a function.

The returned function will also accept any number of parameters and will
return a string including all of the parameters of smoothieMachine as well
as the returned function's parameters. Look at the examples for a guide of 
how your return should be formatted!

See below for examples:

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
***********************************************************************/

const smoothieMachine = (...ingredients) => {
  // smoothie array with first element that says "I'm having a smoothie with"
  let smoothie = ["I'm having a smoothie with"];
  // iterate over incoming parameters
  ingredients.forEach((ingredient, i) => {
    // if not first param, push " and " to smoothie array
    if (i > 0) smoothie.push("and");
    // push ingredient to smoothie array
    smoothie.push(ingredient);
  });

  // return function that accepts any number of parameters
  return (...ingredients) => {
    // iterate over incoming parameters
    ingredients.forEach((ingredient, i) => {
      // if smoothie array longer than 1, push "and" to smoothie array
      if (smoothie.length > 1) smoothie.push("and");
      // push ingredient to smoothie array
      smoothie.push(ingredient);
    });

    // return smoothie array joined into string, with spaces added in between elements
    return smoothie.join(" ");
  }
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = smoothieMachine;
} catch (e) {
  return null;
}
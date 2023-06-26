/***********************************************************************
Write a function using fat arrow syntax, `arrowAvgValue(array)` that takes in an
array of numbers and returns the average number. Assign the below function to a
variable using the const keyword.

Examples:

arrowAvgValue([10, 20]); // => 15
arrowAvgValue([2, 3, 7]); // => 4
arrowAvgValue([100, 60, 64]); // => 74.66666666666667
***********************************************************************/

// function takes in an array of nums and returns average num
const arrowAvgValue = array => {
  // reduce to sum of nums in array
  let sum = array.reduce((sum, num) => sum + num);

  // return sum divided by number of elements in array
  return sum / array.length;
};


// console.log(arrowAvgValue([10, 20])); // => 15
// console.log(arrowAvgValue([2, 3, 7])); // => 4
// console.log(arrowAvgValue([100, 60, 64])); // => 74.66666666666667

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = arrowAvgValue;
} catch (e) {
  return null;
}
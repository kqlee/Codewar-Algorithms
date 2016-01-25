// Use reduce() to calculate the sum of the values in an array

// Make the sum() function return the sum of the values in the passed in array. Your solution must use the reduce() function of the built-in javascript Array object. If you're not familiar with reduce(), reading over the documentation may help.

// For example:
// var someNumbers = [1,2,3,4,5,6,7,8,9,10];
// sum(someNumbers); // should return 55

function sum(array) {
  return array.reduce(function(result, value) {
    return result + value;
  });
}
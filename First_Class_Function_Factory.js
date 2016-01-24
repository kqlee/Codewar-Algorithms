// First-Class Function Factory

// Write a function, factory, that takes a number as its parameter and returns another function.

// The returned function should take an array of numbers as its parameter, and return an array of those numbers multiplied by the number that was passed into the first function.

// In the example below, 5 is the number passed into the first function. So it returns a function that takes an array and multiplies all elements in it by five.

// var fives = factory(5);       // returns a function - fives
// var myArray = [1, 2, 3];
// fives(myArray);               //returns [5, 10, 15];

// Using a for-loop:
function factory(x){
  // new function that takes in an array
  return function (array) {
    //create an empty array to store results
    var result = [];
    //iterates over each item in array length
    for (var i = 0; i < array.length; i++) {
      result.push(array[i] * x);
    }
    return result;
  }
}

// Using JavaScript's forEach method
function factory(x){
  return function (array) {
    var result = [];
    array.forEach(function(value) {
      result.push(value * x);
    });
    return result;
  }
}

// Using JavaScript's Reduce method
function factory(x){
  return function(array) {
    return array.reduce(function(result, value){
      result.push(x * value);
      return result;
    }, []);
  };
}

// Using JavaScript's Map method
function factory(x){
  return function(array) {
    return array.map(function(value) {
      return value * x;
    });
  }
}
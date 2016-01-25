// esreveR

// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// Using a standard for-loop
var reverse = function(array) {
  var result = [];
  for (var i = 0; i < array.length; i++){
    result.push(array[array.length-1-i]);
  }
  return result;
};

// Swapping the index between two halves, a method that not take up much memory and can handle long arguments efficiently
var reverse = function(array) {
  var result = array;
  // iterates up to the length to half of the array, rounded down
  for (var i = 0; i < Math.floor(result.length/2); i++) {
    // store an index in a temporary variable; resets after each iteration of the for-loop
    var temp = result[i];
    // set element in first half of array to mirror the last half
    result[i] = result[result.length-1-i];
    // set element of last half of the array to item stored in temp variable
    result[result.length-1-i] = temp;
  }
  return array;
};

// Invoking the reverse function
reverse([1,2,3]); // [3,2,1]
reverse([1,null,14,"two"]); // ["two",14,null,1] 
// Highest Rank Number in an Array

// Write a method highestRank(arr) (or highest-rank in clojure) which returns the number which is most frequent in the given input array (or ISeq). If there is a tie for most frequent number, return the largest number of which is most frequent.

function highestRank(arr) {
  // Defined an empty object to store values, the first element of the array as the highest number, and a counter
  var obj = {}, highestNum = arr[0], highestCount = 1;
  // Iterate over the array
  for (var i = 0; i < arr.length; i++) {
    // If the number is not in the object, store it as 1 instance; increment the instance if it exists
    obj[arr[i]] === undefined ? obj[arr[i]] = 1 : obj[arr[i]]++;
    // Checks to see if the current element is higher than the current highest number; if so, the current element becomes the highest, and the counter is set to the value in the object
    if (obj[arr[i]] > highestCount) {
      highestNum = arr[i];
      highestCount = obj[arr[i]];
    }
  }
  return highestNum;
}

// Using forEach
function highestRank(arr) {
  var obj = {}, highestNum = arr[0], highestCount = 1;
  arr.forEach(function(value) {
    obj[value] === undefined ? obj[value] = 1 : obj[value]++;
    if (obj[value] > highestCount) {
      highestNum = value;
      highestCount = obj[value];
    }
  });
  return highestNum;
}

// Using Filter
function highestRank(arr) {
  return arr.filter(function(value){


  });
}

// Using Reduce
function highestRank(arr) {
  var highestNum = arr[0], highestCount = 1;
  var obj = arr.reduce(function(result, value){
    result[value] === undefined ? result[value] = 1 : result[value]++;
  },{});
}


// arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
// highestRank(arr); //=> returns 12

// arr = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10];
// highestRank(arr); //=> returns 12

// arr = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10];
// highestRank(arr); //=> returns 3
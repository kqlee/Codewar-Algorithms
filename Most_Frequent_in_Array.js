// Find Count of Most Frequent Item in an Array

// Write a program to find count of the most frequent item of an array.

// Assume that input is array of integers.

// Ex.:

// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5
// Most frequent number in example array is -1. It occures 5 times in input array.

function mostFrequentItemCount(collection) {
  var obj = {}, most = collection[0], count = 1;
  for (var i = 0; i < collection.length; i++) {
    if(obj[collection[i]] === undefined) {
      obj[collection[i]] = 1;
    }
    else {
      obj[collection[i]]++;
    }
    if (obj[collection[i]] > count) {
      most = collection[i];
      count = obj[collection[i]];
    }
  }
  return count;
}
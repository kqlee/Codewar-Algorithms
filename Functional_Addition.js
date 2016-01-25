// Functional Addition

// Create a function add(n) which returns a function that always adds n to any number

function add(n) {
  return function(value) {
    return value + n;
  }
}
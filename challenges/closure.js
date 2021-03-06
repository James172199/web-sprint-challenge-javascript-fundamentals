// ==== Closures ====

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

// Explanation: Nested function can access the internal variable because it is within Function Level scope just like the variable itself.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(x) {
  var theSum = 0;
  for (var counter = x; counter > 0; counter--) {
    theSum = counter + theSum;
  }
  return theSum;
}
console.log(summation(5));

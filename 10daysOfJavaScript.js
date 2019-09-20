"use strict";

// HACK: Implement a function named factorial that has one parameter: an integer, n. It must return the value of n! (i.e., n factorial).

function factorial(n) {
  if (n < 1) {
    // base case
    return 1;
  }
  return n * factorial(n - 1); // recursive calls
}

// REVIEW: Alternative Solution
const factorial1 = n => (n === 0 ? 1 : n * factorial(n - 1));

console.log(factorial1(4)); // returns 24

/* HACK: Declare a constant variable, PI , and assign it the value Math.PI. You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
Read a number, r , denoting the radius of a circle from stdin.
Use PI and r to calculate the area and perimeter of a circle having radius .
Print area as the first line of output and print perimeter as the second line of output.
*/

function main() {
  const PI = Math.PI;
  let r = readLine(); // readLine() is declared in the problem on HR
  // Print the area of the circle:
  console.log(PI * r * r);
  // Print the perimeter of the circle:
  console.log(PI * 2 * r);
}

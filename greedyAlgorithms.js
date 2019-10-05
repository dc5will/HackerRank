'use strict';

/* HACK: Minimum Absolute Difference in an Array - return an integer that represents the minimum absolute difference between any pair of elements.

minimumAbsoluteDifference has the following parameter(s):
n: an integer that represents the length of arr
arr: an array of integers

// Approach = sort array, iterate through array and subtract Math.abs[i] - [i-1]] and store it in a variable minDiff. have conditional check if current iteration is smaller than minDiff. If so, replace minDiff value. Return minDiff at end of loop.

*/

function minimumAbsoluteDifference(arr) {
  arr.sort(function(a, b) { return Math.abs(a)-Math.abs(b)})
  // console.log(arr)
  let minDiff = Math.abs(arr[0] - arr[1])
  for (let i = 0; i < arr.length; i++) {
    let diff = Math.abs(arr[i] - arr[i-1])
    if (diff < minDiff ) {
      minDiff = diff
    }
  }
  return Math.abs(minDiff);
}

console.log(minimumAbsoluteDifference([-59,-36,-13,1,-53,-92,-2,-96,-54,75])) // return 1 
console.log(minimumAbsoluteDifference([1,-3,71,68,17])) // return 3

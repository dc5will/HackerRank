'use strict';

// HACK: 2D Array - Complete the function hourglassSum in the editor below. It should return an integer, the maximum hourglass sum in the array. 

// do a nested for loop. declare variable for count. have condition to start when array[i][j] !== 0. Then have function to sum up integer values in hour glass shape. 

function hourglassSum(arr) {
  let maxSum;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr[i].length - 2; j++) {
      let sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
      maxSum = typeof maxSum !== "undefined" && sum < maxSum ? maxSum : sum;
    }
  }
  return maxSum;
}

// REVIEW: Better solutions
function hourGlassSum1(arr) {
  // we could set this to 3 given the problems constraings, but this allows changes
  let maxX = 3; // + (arr[0].length % 3)
  let maxY = 3; // + (arr.length % 3)
  let total = -Infinity; // has to be -64, but

  // begin at y == 0
  for (let y = 0; y <= maxY; y++) {
    for (let x = 0; x <= maxX; x++) {
      // sum the top of hourglass
      let sum = arr[y][x] + arr[y][x + 1] + arr[y][x + 2];

      // get the middle of hourglass
      sum += arr[y + 1][x + 1];

      // sum the bottom of hourglass
      sum += arr[y + 2][x] + arr[y + 2][x + 1] + arr[y + 2][x + 2];

      // don't store result to keep space complexity down
      if (total < sum) total = sum;
    }
  }

  return total;
}

function hourGlassSum2(arr) {
  var sum = 0;
  var max = -Infinity;
  for (let x = 0; x < arr.length - 2; x++) {
    for (let y = 0; y < arr[0].length - 2; y++) {
      sum =
        arr[x][y] +
        arr[x][y + 1] +
        arr[x][y + 2] +
        arr[x + 1][y + 1] +
        arr[x + 2][y] +
        arr[x + 2][y + 1] +
        arr[x + 2][y + 2];
      if (sum > max) {
        max = sum;
      }
      sum = 0;
    }
  }
  return max;
}

console.log(hourglassSum([
  1, 1, 1, 0, 0, 0,
  0, 1, 0, 0, 0, 0,
  1, 1, 1, 0, 0, 0,
  0, 0, 2, 4, 4, 0,
  0, 0, 0, 2, 0, 0,
  0, 0, 1, 2, 4, 0,
])); // returns 19

// HACK: Arrays: Left Rotation - A left rotation operation on an array shifts each of the array's elements 1 unit to the left. For example, if 2 left rotations are performed on array [1,2,3,4,5] , then the array would become [3,4,5,1,2].

// Given an array a of n integers and a number, d , perform d left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

// pop item off first index and put it at the last location. Perform operation d amount of times

function rotLeft(a, d) {
  let tempArray = a;
  for (let i = 0; i < d; i++) {
    let temp = tempArray.shift();
    tempArray.push(temp);
  }
  return tempArray;
}

// REVIEW: Better solution
function rotLeft1(a, d) {
  return a.concat(a.splice(0,d).join(' '));
}

function rotLeft2(a, d) {
  while (d--) {
    a.push(a.shift());
  } 
  return a;
}

console.log(rotLeft([1,2,3,4,5], 4)); // returns 5 1 2 3 4


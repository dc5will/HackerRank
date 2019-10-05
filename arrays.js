'use strict';

// HACK: 2D Array - Complete the function hourglassSum in the editor below. It should return an integer, the maximum hourglass sum in the array. 

// do a nested for loop. declare variable for count. have condition to start when array[i][j] !== 0. Then have function to sum up integer values in hour glass shape. 

function hourglassSum(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    for (let j = 0; j < arr[i].length; j++) {
      console.log('[i][j]', arr[i][j])
    }
  }
  return arr;
}

console.log(hourglassSum(
  1, 1, 1, 0, 0, 0,
  0, 1, 0, 0, 0, 0,
  1, 1, 1, 0, 0, 0,
  0, 0, 2, 4, 4, 0,
  0, 0, 0, 2, 0, 0,
  0, 0, 1, 2, 4, 0,
  )) // returns 19

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

console.log(rotLeft([1,2,3,4,5], 4)) // returns 5 1 2 3 4


// HACK: Simple Array Sum 
function simpleArraySum(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11])) // returns 31; 

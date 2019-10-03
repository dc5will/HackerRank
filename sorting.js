'use strict';

/* NOTE: 
Bubble Sort = Very simple sorting algorithm. Very inefficient. Not practical for real-world use and is generally only discussed in an academic context. 

Theory behind BubbleSort = take an array of integers and iterate through it; for each element at some index i whose value is greater than the element at the index following it (i.e., index i + 1), you must swap the two values. The act of swapping these values causes the larger, unsorted values to float to the back (like a bubble) of the data structure until they land in the correct location.

Complexity = Worst case -> O(n^2), Best case -> O(n), Average -> O(n^2)

*/

/* HACK: Sorting: Bubble Sort - Consider the following version of Bubble Sort:

for (int i = 0; i < n; i++) {
    
  for (int j = 0; j < n - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (a[j] > a[j + 1]) {
          swap(a[j], a[j + 1]);
      }
  }
  
}
Given an array of integers, sort the array in ascending order using the Bubble Sort algorithm above. Once sorted, print the following three lines:

1. Array is sorted in numSwaps swaps., where numSwaps is the number of swaps that took place.
2. First Element: firstElement, where firstElement is the first element in the sorted array.
3. Last Element: lastElement, where lastElement is the last element in the sorted array

*/

// console.log(swap(1,2)) // returns [2,1]

function countSwaps(a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[j] > a[j+1]) {
        [a[j], a[j+1]] = [a[j+1],a[j]];
        count++
      }
    }
  }
  console.log(`Array is sorted in ${count} swaps.`)
  console.log(`First Element: ${a[0]}`)
  console.log(`Last Element: ${a[a.length-1]}`)
}

console.log(countSwaps([6,4,1])) // returns 3;

// HACK: Mark and Toys - Given a list of prices and an amount to spend, what is the maximum number of toys Mark can buy? For example, if prices = [1,2,3,4]  and Mark has k = 7 to spend, he can buy items [1,2,3] for 6 , or [3,4] for 7 units of currency. He would choose the first group of 3 items.

// Approach = sort prices array in ascending order. set variable for current total and for count. iterate through prices array & for each elem, add to current total and increment count. if condition comparing current total to k. if current total > k then return count

function maximumToys(prices, k) {
  let newArr = prices.sort(function(a,b) { return a-b});
  let currentTotal = 0;
  let count = 0;
  for (let i = 0; i < newArr.length; i++) {
    currentTotal += newArr[i];
    count++;
    if (currentTotal > k) {
      return count-1;
    }
  }
}

console.log(maximumToys([1,2,3,4], 7)) // returns 3
console.log(maximumToys([1,12,5,111,200,1000,10], 50)) // returns 4
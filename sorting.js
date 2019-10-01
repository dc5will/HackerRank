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

function countSwaps(a) {

}
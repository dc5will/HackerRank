"use strict";

/* HACK: Making Anagrams - Alice is taking a cryptography class and finding anagrams to be very useful. We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

Alice decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Can you help her find this number?

Given two strings, a and b, that may or may not be of the same length, determine the minimum number of character deletions required to make a and b anagrams. Any characters can be deleted from either of the strings.

For example, if a = cde and b = dcf, we can delete e from string a and f from string b so that both remaining strings are cd and dc which are anagrams

Understand the problem = given 2 strings, determine the minumum number of character deletions required to make a and b anagrams. 

Naive Approach = 

*/
FIXME: 
function makeAnagrams(a, b) {
  // O(n*m) approach due to iterating through lengths of both inputs
  let count = 0;
  let arrA = a.split("");
  let arrB = b.split("");
  let totalLength = arrA.length + arrB.length;
  for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
      if (arrA[i] === arrB[j]) {
        arrB.splice(j, 1);
        count++;
        break;
      }
    }
  }
  return totalLength - count * 2;
}

// REVIEW: Alternative Solution
function makeAnagrams1(a, b) {
  // O(n+m)
  let counter = {};
  let total = 0;
  Array.from(a).forEach(char => {
    counter[char] = counter[char] || 0;
    counter[char]++;
  });
  Array.from(b).forEach(char => {
    counter[char] = counter[char] || 0;
    counter[char]--;
  });
  Object.keys(counter).forEach(k => {
    if (counter[k] !== 0) {
      total += Math.abs(counter[k]);
    }
  });
  return total;
}

// console.log(makeAnagrams('cde','abc')); // returns 4
console.log(
  makeAnagrams2("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke")
); // returns 30

/* HACK: Alternating Characters - You are given a string containing characters A and B only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.

Your task is to find the minimum number of required deletions.

For example, given the string s = AABAAB, remove an A at positions 0 and 3 to make s = ABAB in 2 deletions.

Naive Approach: set variable to count deletions. turn string into array. iterate through array comparing adjacent items. if condition to increment count if adjacent items match. return count.

*/

function alternatingCharacters(s) { // O(n) iterating through length of string/array, dependant on the input size
  let count = 0;
  let array = s.split('');
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i+1]) {
      count++;
    }
  }
  return count;
}

console.log(alternatingCharacters("AAAA")); // returns 3
console.log(alternatingCharacters("BBBBB")); // returns 4
console.log(alternatingCharacters("ABABABAB")); // returns 0



'use strict';

/* HACK: Making Anagrams - Alice is taking a cryptography class and finding anagrams to be very useful. We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

Alice decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Can you help her find this number?

Given two strings, a and b, that may or may not be of the same length, determine the minimum number of character deletions required to make a and b anagrams. Any characters can be deleted from either of the strings.

For example, if a = cde and b = dcf, we can delete e from string a and f from string b so that both remaining strings are cd and dc which are anagrams

*/

function makeAnagram(a, b) {

}

console.log(makeAnagrams('cde','abc')); // returns 4

/* HACK: Alternating Characters - You are given a string containing characters A and B only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.

Your task is to find the minimum number of required deletions.

For example, given the string s = AABAAB, remove an A at positions 0 and 3 to make s = ABAB in 2 deletions.

*/

function alternatingCharacters(s) {

}

console.log(alternatingCharacters('AAAA')) // returns 3
console.log(alternatingCharacters('BBBBB')) // returns 4
console.log(alternatingCharacters('ABABABAB')) // returns 0
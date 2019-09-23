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

/* HACK: Conditional Statements: If-else
Complete the getGrade(score) function in the editor. It has one parameter: an integer, score , denoting the number of points Julia earned on an exam. It must return the letter corresponding to her grade according to the following rules:

If 25 < score <= 30, then grade = A.
If 20 < score <= 25, then grade = B.
If 15 < score <= 20, then grade = C.
If 10 < score <= 15, then grade = D.
If 5 < score <= 10, then grade = E.
If 0 < score <= 5, then grade = F.
*/

function getGrade(score) {
  let grade;
  if (score > 25 && score <= 30) {
    grade = "A";
  }
  if (score > 20 && score <= 25) {
    grade = "B";
  }
  if (score > 15 && score <= 20) {
    grade = "C";
  }
  if (score > 10 && score <= 15) {
    grade = "D";
  }
  if (score > 5 && score <= 10) {
    grade = "E";
  }
  if (score > 0 && score <= 5) {
    grade = "F";
  }
  return grade;
}

// REVIEW: More Elegant Solutions
function getGrade1(score) {
  return "FEDCBA"[parseInt((score > 0 ? score - 1 : 0) / 5)];
}

function getGrade2(score) {
  return "FFEDCBA"[Math.ceil(score / 5.0)];
}

console.log(getGrade(11)); // returns D;

/* HACK: Loops 
Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, s , consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:

First, print each vowel in s on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in s.
Second, print each consonant (i.e., non-vowel) in s on a new line in the same order as it appeared in s.
*/

// create array for vowels, loop through s and check for vowels. console.log item if vowel. loop through again and only log items that arent vowels. 

function vowelsAndConsonants(s) {
  let vowels = ["a", "e", "i", "o", "u"];
  for (let vowel of s) { // log out vowels
    if (vowels.includes(vowel)) {
      console.log(vowel);
    }
  }
  for (let consonant of s) {
    if (!vowels.includes(consonant)) {
      console.log(consonant);
    }
  }
}

// REVIEW: Better Solution - Only loops through once
function vowelsAndConsonants1(s) {
  const vowels = 'aeiou';
  let consonants = '';

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      console.log(s[i]);
    } else {
      consonants += s[i] + '\n';
    }
  }
  console.log(consonants.trim());
}

function vowelsAndConsonants2(s) {
  const vowels = "aeiou";
  let cons = "";
  for (let i = 0; i < s.length; i++) {
      vowels.includes(s[i]) ? console.log(s[i]) : cons = cons.concat(s[i] + '\n');
  }
  console.log(cons);
}

console.log(vowelsAndConsonants('javascriptloops')) 
/* returns 
a
a
i
o
o
j
v
s
c
r
p
t
l
p
s
*/

/* HACK: Conditional Statements: Switch
Complete the getLetter(s) function in the editor. It has one parameter: a string, , consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

If the first character in string s is in the set {a,e,i,o,u}, then return A.
If the first character in string s is in the set {b,c,d,f,g}, then return B.
If the first character in string s is in the set {h,j,k,l,m}, then return C.
If the first character in string s is in the set {n,p,q,r,s,t,v,w,x,y,z}, then return D.
Hint: You can get the letter at some index i in s using the syntax s[i] or s.charAt(i).
*/

// grab first item and check for the sets that contain it and return the proper output

function getLetter(s) {
  let letter = s[0];
  console.log(letter);

  return letter;
}

console.log(getLetter('adfgt')) // return A
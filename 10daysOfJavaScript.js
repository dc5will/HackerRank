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
  for (let vowel of s) {
    // log out vowels
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
  const vowels = "aeiou";
  let consonants = "";

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      console.log(s[i]);
    } else {
      consonants += s[i] + "\n";
    }
  }
  console.log(consonants.trim());
}

function vowelsAndConsonants2(s) {
  const vowels = "aeiou";
  let cons = "";
  for (let i = 0; i < s.length; i++) {
    vowels.includes(s[i])
      ? console.log(s[i])
      : (cons = cons.concat(s[i] + "\n"));
  }
  console.log(cons);
}

console.log(vowelsAndConsonants("javascriptloops"));
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
  switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return "A";
    case "b":
    case "c":
    case "d":
    case "f":
    case "g":
      return "B";
    case "h":
    case "j":
    case "k":
    case "l":
    case "m":
      return "C";
    default:
      return "D";
  }
}

// REVIEW: Better solutions
function getLetter1(s) {
  let letter;
  // Write your code here
  switch (true) {
    case "aeiou".includes(s[0]):
      letter = "A";
      break;
    case "bcdfg".includes(s[0]):
      letter = "B";
      break;
    case "hjklm".includes(s[0]):
      letter = "C";
      break;
    case "npqrstvwxyz".includes(s[0]):
      letter = "D";
      break;
  }
  return letter;
}

let getLetter2 = s =>
  "DABC"[Number.parseInt("aeioubcdfghjklm".indexOf(s[0]) / 5 + 1)];

console.log(getLetter("adfgt")); // return A

// HACK: Arrays - Complete the getSecondLargest function in the editor below. It has one parameter: an array, num ,of n numbers. The function must find and return the second largest number in nums.

// Initial approach: remove duplicates with Set and sort array in ascending order using sort method. return item at index.length - 2

function getSecondLargest(nums) {
  let arr = Array.from(new Set(nums));
  let sortedArr = arr.sort((a, b) => {
    return a - b;
  });
  return sortedArr[sortedArr.length - 2];
}

// REVIEW: Alternative solutions
function getSecondLargest1(nums) {
  // O(n)
  let first = nums[0];
  let second;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > first) {
      second = first;
      first = nums[i];
      // console.log('second',second)
      // console.log('first',first)
    }
    if (nums[i] > second && nums[i] < first) {
      second = nums[i];
    }
  }
  return second;
}

function getSecondLargest2(nums) {
  return [...new Set(nums)].sort((a, b) => b - a)[1];
}

console.log(getSecondLargest1([2, 3, 6, 6, 5])); // returns 5

/* HACK: Try, Catch, and Finally
Complete the reverseString function; it has one parameter, s. You must perform the following actions:

1. Try to reverse string s using the split, reverse, and join methods.
2. If an exception is thrown, catch it and print the contents of the exception's message on a new line.
3. Print s on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.

Must print two print statements using console.log();
1. Print the contents of a caught exception's message on a new line. If no exception was thrown, this line should not be printed.
2. Print s on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.

Initial Approach: Wrap reverse string in a try block. Catch exceptions by logging out message in a catch block.  
*/

function reverseString(s) {
  try {
    console.log(
      s
        .split("")
        .reverse()
        .join("")
    );
  } catch (e) {
    console.log(e.message);
    console.log(s);
  }
}

// REVIEW: Alternative Solutions
function reverseString1(s) {
  try {
    s = s
      .split("")
      .reverse()
      .join("");
  } catch (e) {
    console.log(e.message);
  } finally {
    console.log(s);
  }
}

console.log(reverseString("1234")); // returns 4321
console.log(reverseString(Number(1234))); // throws error

/* HACK: Throw - Complete the isPositive function below. It has one integer parameter, a. If the value of a is positive, it must return the string YES. Otherwise, it must throw an Error according to the following rules:

If a is 0, throw an Error with message = Zero Error.
If a is negative, throw an Error with message = Negative Error.
*/

function isPositive(a) {
  if (a === 0) throw Error("Zero Error");
  if (a < 0) throw Error("Negative Error");
  return "YES";
}

// REVIEW: Alternative solutions
function isPositive1(a) {
  if (a > 0) {
    return "YES";
  } else {
    throw a === 0 ? new Error("Zero Error") : new Error("Negative Error");
  }
}

function isPositive2(a) {
  if (a > 0) {
    return "YES";
  }
  throw Error(a ? "Negative Error" : "Zero Error");
  // a ? "this will excecute if it isn't zero" : "this will excecute if it's zero"
}

function isPositive3(a) {
  try {
    if (a < 0) {
      throw "Negative Error";
    } else if (a == 0) {
      throw "Zero Error";
    } else {
      return "YES";
    }
  } catch (err) {
    return err;
  }
}

// console.log(isPositive(3)) // returns YES
// console.log(isPositive(0)) // returns Zero Error
// console.log(isPositive(-1)) // returns Negative Error

/* HACK: Create a Rectangle Object - Complete the function in the editor. It has two parameters: a and b. It must return an object modeling a rectangle that has the following properties:

length: This value is equal to a.
width: This value is equal to b.
perimeter: This value is equal to 2 * (a+b)
area: This value is equal to a*b
*/

function Rectangle(a, b) {
  return {
    length: a,
    width: b,
    perimeter: 2 * (a + b),
    area: a * b
  };
}

// REVIEW: Alternative Solutions
function Rectangle(a, b) {
  // NOTE: In JS, you can add properties to objects whenever you want. There's no need to define a length or width prop in advance. It is created when you assign it.
  this.length = a;
  this.width = b;
  this.area = a * b;
  this.perimeter = 2 * (a + b);
}

// FIXME: console.log(Rectangle(4,5)) // 18, 20

// HACK: Count Objects - Complete the function in the editor. It has one parameter: an array, a , of objects. Each object in the array has two integer properties denoted by x and y. The function must return a count of all such objects o in array a that satisfy o.x == o.y.

function getCount(objects) {
  let count = 0;
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].x === objects[i].y) {
      // console.log('objects[i].x=', objects[i].x)
      // console.log('objects[i].y=', objects[i].y)
      count++;
    }
  }
  return count;
}

// REVIEW: Alternative solutions
function getCount1(objects) {
  return objects.filter(function(o) {
    return o.x == o.y;
  }).length;
}

const getCount2 = objects => objects.filter(o => o.x == o.y).length;

function getCount3(objects) {
  let count = 0;
  for (let o of objects) {
    count += o.x === o.y;
  }
  return count;
}

// array of objects used for getCount problem
const objects = [
  { x: 1, y: 1 },
  { x: 2, y: 3 },
  { x: 3, y: 3 },
  { x: 3, y: 4 },
  { x: 4, y: 5 }
];

console.log(getCount(objects));

/* HACK: Classes - Create a Polygon class that has the following properties:
A constructor that takes an array of integer values describing the lengths of the polygon's sides.
A perimeter() method that returns the polygon's perimeter.
Locked code in the editor tests the Polygon constructor and the perimeter method.
*/

class Polygon {
  // constructor that takes an array of integer values describing the length of polygon sides
  constructor(sides) {
    this.sides = sides;
  }
  // method that returns polgyon's perimeter
  perimeter() {
    let sum = 0;
    // loop through array of sides and sums all integers
    for (let i = 0; i < this.sides.length; i++) {
      sum = sum + this.sides[i];
    }
    return sum;
  }
}

// REVIEW: Alternative solution
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  perimeter() {
    return this.sides.reduce(function add(a, b) {
      return a + b;
    });
  }
}

let triangle = new Polygon([3, 4, 5]);
console.log(triangle.perimeter());

/* 
HACK: Inheritance - We provide the implementation for a Rectangle class in the editor. Perform the following tasks:
Add an area method to Rectangle's prototype.
Create a Square class that satisfies the following:
It is a subclass of Rectangle.
It contains a constructor and no other methods.
It can use the Rectangle class' area method to print the area of a Square object.
*/

class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}
/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function() {
  return (this.w * this.h);
};

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
  constructor(sides) {
    super(sides, sides);
  }
}

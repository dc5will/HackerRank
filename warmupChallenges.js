/* HACK: Sock Merchant - John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are. For example, there are  socks with colors. There is one pair of color and one of color . There are three odd socks left, one of each color. The number of pairs is.
 */

// set variable for count, iterate through array and use find method to increment count

function sockMerchant(n, ar) {
  // O(2n) complexity?
  let count = 0; // count of the number of sock pairs
  let obj = []; // object that records count of each sock type
  for (let i = 0; i < n; i++) {
    // iterate through array
    if (ar[i] in obj) {
      obj[ar[i]] = obj[ar[i]] + 1; // increment the count of the color by 1
    } else {
      obj[ar[i]] = 1; // create key with that color and set it to 1 for one "sock"
    }
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      count = count + ~~(obj[key] / 2); // calc # of pairs by dividing the amt of socks of a color (obj[key]) by 2 and using two tildes to remove anything to the right of the decimal
    }
  }
  return count;
}

// REVIEW: Better solution
function sockMerchant1(n, ar) {
  ar.sort();
  let prev;
  return ar.reduce((acc, cur) => {
    if (cur === prev) {
      prev = "";
      acc += 1;
    } else {
      prev = cur;
    }
    return acc;
  }, 0);
}

function sockMerchant2(n, ar) {
  let pairs = {};
  let count = 0;
  for (let sock of ar) {
    pairs[sock] ? pairs[sock]++ : (pairs[sock] = 1);
    if (pairs[sock] % 2 === 0) {
      count++;
    }
  }
  return count;
}

function sockMerchant3(n, ar) {
  // O(n)
  let colors = new Set(); // use Set method to remove duplicates
  let pairs = 0;
  for (let i = 0; i < n; i++) {
    if (!colors.has(ar[i])) {
      colors.add(ar[i]);
    } else {
      pairs++;
      colors.delete(ar[i]);
    }
  }
  return pairs;
}

console.log(sockMerchant1(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])); // returns 3

/* HACK: Counting Valleys - Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. During his last hike he took exactly  steps. For every step he took, he noted if it was an uphill, , or a downhill,  step. Gary's hikes start and end at sea level and each step up or down represents a  unit change in altitude. We define the following terms: A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level. A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
 */

// Set variable for valley as counter. Convert input string into array. loop through array with condition that if current item & next item is 'D' then increase valley count, increment past 3rd item and finish iterating through the steps. return count at end.

function countingValleys(n, s) {
  let valley = 0; // consecutive Ds
  let height = 0; // value of height from sea level
  for (let i = 0; i < n; i++) {
    // loop through string
    // console.log(s[i])
    if (s.charAt(i) === "D" && height === 0) {
      valley++;
      height--;
    } else if (s.charAt(i) === "D" && height !== 0) {
      height--;
    } else if (s.charAt(i) === "U") {
      height++;
    }
  }
  return valley;
}

// REVIEW: Better Practice
function countingValleys1(n, s) {
  let count = 0;
  return [...s].reduce((sum, value, index, array) => {
    if (value === "U") {
      count++;
    } else {
      count--;
    }
    if (value === "U" && count === 0) {
      sum++;
    }
    return sum;
  }, 0);
}

function countingValleys2(n, s) {
  let countValley = 0;
  let steps = 0;
  for (let i in s) {
    if (s[i] == "D") {
      steps--;
    } else {
      steps++;
      if (steps === 0) {
        countValley++;
      }
    }
  }
  return countValley;
}

console.log(countingValleys(8, "UDDDUDUU")); // returns 1

/* HACK: Jumping on the Clouds - Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.

For each game, Emma will get an array of clouds numbered  if they are safe or  if they must be avoided. For example, indexed from . The number on each cloud is its index in the list so she must avoid the clouds at indexes  and . She could follow the following two paths:  or . The first path takes  jumps while the second takes .

0 = safe, 1 = avoid. set count variable. iterate array with condition that if arr[i] === 0 then i++
*/

function jumpingOnClouds(c) {
  let count = 0;
  for (let i = 0; i < c.length; i++) {
    console.log("steps =", c[i], c[i + 1], "count =", count);
    if (c[i] === 0 && c[i + 1] === 1) {
      count++;
      i++;
    } else if (c[i] === 0 && c[i + 1] === 0 && c[i + 2] === 0) {
      count++;
      i++;
    } else if (c[i] === 0 && c[i + 1] === 0) {
      count++;
    }
  }
  return count;
}

// REVIEW: Better Solutions
function jumpingOnClouds1(c) {
  let count = -1;
  for (let i = 0; i < c.length; i++, count++) {
    if (i < c.length - 2 && c[i + 2] == 0) {
      i++;
    }
  }
  return count;
}

function jumpingOnClouds2(c) {
  let jumps = 0;
  for (let i = 0; i < c.length; i++) {
    c[i + 2] === 0 ? i++ : null;
    jumps++;
  }
  return jumps - 1;
}

function jumpingOnClouds3(c) {
  let jumps = 0;
  for (let i = 0; i < c.length - 1; jumps++) {
    i += c[i + 2] === 0 ? 2 : 1;
  }
  return jumps;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])); // returns 4
console.log(jumpingOnClouds([0, 0, 0, 1, 0, 0])); // returns 3

/* HACK: Repeated String - Lilah has a string, , of lowercase English letters that she repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first letters of Lilah's infinite string.

Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length  in the infinitely repeating string.

repeatedString has the following parameter(s):

s: a string to repeat
n: the number of characters to consider
*/

// take given string and repeat up to the length n. set count variable for 'a'. Then iterate through string and find all instances of 'a' and return the count.

function repeatedString(s, n) {
  let count = 0;
  let remainder = n % s.length;
  let fraction = Math.floor(n / s.length);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      count++;
    }
  }
  count = count * fraction;
  for (let i = 0; i < remainder; i++) {
    if (s[i] === "a") {
      count++;
    }
  }
  return count;
}

// REVIEW: Better solutions
function repeatedString1(s, n) {
  let c = 0,
    ca = 0,
    r = n % s.length;

  for (let i = s.length; i-- > 0; ) {
    if (s.charAt(i) == "a") {
      ++c;

      if (i < r) ++ca;
    }
  }

  return ((n - r) / s.length) * c + ca;
}

function repeatedString2(s, n) {
  return (
    (s.match(/a/g) || []).length * Math.floor(n / s.length) +
    (s.substring(0, n % s.length).match(/a/g) || []).length
  );
}

function repeatedString3(s, n) {
  let occurances = s.split("a").length - 1;
  let max = Math.floor(n / s.length);
  let repeats = occurances * max;
  repeats += s.slice(0, n % s.length).split("a").length - 1;
  return repeats;
}

console.log(repeatedString("a", 100));

// HACK: Sock Merchant - John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are. For example, there are  socks with colors. There is one pair of color and one of color . There are three odd socks left, one of each color. The number of pairs is.

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

// HACK: Counting Valleys - Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. During his last hike he took exactly  steps. For every step he took, he noted if it was an uphill, , or a downhill,  step. Gary's hikes start and end at sea level and each step up or down represents a  unit change in altitude. We define the following terms: A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level. A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.

// Set variable for valley as counter. Convert input string into array. loop through array with condition that if current item & next item is 'D' then increase valley count, increment past 3rd item and finish iterating through the steps. return count at end

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

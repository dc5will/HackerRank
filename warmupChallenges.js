// HACK: Sock Merchant - John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are. For example, there are  socks with colors. There is one pair of color and one of color . There are three odd socks left, one of each color. The number of pairs is.

// set variable for count, iterate through array and use find method to increment count

function sockMerchant(n, ar) { // O(2n) complexity? 
  let count = 0; // count of the number of sock pairs
  let obj = []; // object that records count of each sock type
  for (let i = 0; i < n; i++) { // iterate through array
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
  return ar.reduce((acc,cur) => {
    if (cur === prev) {
      prev = '';
      acc += 1;
    } else {
      prev = cur;
    }
    return acc
  }, 0)
}

function sockMerchant2(n, ar) {
  let pairs = {};
  let count = 0;
  for (let sock of ar) {
    pairs[sock] ? pairs[sock]++ : pairs[sock] = 1;
    if (pairs[sock]%2 === 0) {
      count++;
    }
  }
  return count;
}

function sockMerchant3(n, ar) { // O(n)
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

console.log(sockMerchant1(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])) // returns 3
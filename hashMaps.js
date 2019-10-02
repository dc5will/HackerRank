'use strict';

/* NOTE: 
Hashing = process of converting a key into an index in a table by performing some simply computed operation on the key.
Hash Tables = data structures that very efficiently map keys to values. When we use a key to look up value in a hash table, we convert the key into a hash code and then use the hash code to map to an index in the table.
ex: string -> hashcode -> index in a hash table

Advantages = Hashing is really important because it allows you to map an infinite number of keys to some finite number of values. You can store your mapped values in a table that's significantly smaller than the number of potential keys or hash codes.

Disadvantages = Generally an infinite number of keys mapping to a finite number of hash codes, two distinct keys can map to the same table index. These keys are called synonums, and the actual phenomenon of having multiple keys whose hash codes map to the same table index a collision. One way of dealing with this is chaining (where we store each colliding (key, value) pair in a linked list located at their mapped index). It's important to store the key with the value, or you won't know which value in the list maps to which key.

Complexity = A good hash table would be O(1). Terrible hashtable with a lot of collisions would be O(n).
*/


/* HACK: Hash Tables: Randsom Note - Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.

Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

For example, the note is "Attack at dawn". The magazine contains only "attack at dawn". The magazine has all the right words, but there's a case mismatch. The answer is No.

*/
// FIXME: review hash tables
function checkMagazine(magazine, note) {
  let map = {};
  let replicable = true;
  // iterate through each elem in magazine & store each elem in the variable i
  for (let i of magazine) {
    // if map[i] has not been initialized, it defaults to zero then one is added. if it has been initialized it simply adds one to its current value. This loop is going through all the words in magazine and keeping count of how many of them there were using the object called map.
    map[i] = (map[i] || 0) + 1; 
    console.log(map)
  }
  for (let i of note) {
    // iterate through note and subtracts one for each element again initializing at 0 if needed
    map[i] = (map[i] || 0) - 1;
    console.log(map)
  }
  for (let i in map) {
    // checks all the values in map to make sure that the ransom loop did not remove words from map to the point where we end up below zero. IF below zeo it means note had more occurrences of some word than magazine did.
    if ( map[i] < 0) {
      replicable = false;
      break;
    }
  }
  // ternary if true return 'Yes', if false return 'No'
  console.log(replicable ? 'Yes' : 'No')
}

// REVIEW: Alternative Solution


console.log(checkMagazine('give me one grand today night','give one grand today')) // returns Yes
// console.log(checkMagazine('two times three is not four','two times two is four')) // returns No
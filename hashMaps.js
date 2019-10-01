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

function checkMagazine(magazine, note) {

}

// console.log(checkMagazine())
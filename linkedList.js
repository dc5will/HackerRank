"use strict";

/* HACK: Insert a node at a specified position in a linked list - 
You’re given the pointer to the head node of a linked list, an integer to add to the list and the position at which the integer must be inserted. Create a new node with the given integer, insert this node at the desired position and return the head node.

A position of 0 indicates head, a position of 1 indicates one node away from the head and so on. The head pointer given may be null meaning that the initial list is empty.

As an example, if your list starts as 1->2->3 and you want to insert a node at position 2 with data = 4, your new list should be 1->2->4->3
*/

// HACK: Reverse a linked list - You’re given the pointer to the head node of a linked list. Change the next pointers of the nodes so that their order is reversed. The head pointer given may be null meaning that the initial list is empty.

//FIXME: Look at this again
function reverse(head) {
  if (head === null) {
    return null;
  }
  if (head.next === null) {
    return head;
  }
  let preNode = null;
  let currNode = head;
  let nextNode = null;

  while (currNode !== null) {
    nextNode = currNode.next;
    currNode.next = preNode;
    preNode = currNode;
    currNode = nextNode;
  }
  head = preNode;
  return head;
}

// HACK: Compare two linked lists - You’re given the pointer to the head nodes of two linked lists. Compare the data in the nodes of the linked lists to check if they are equal. The lists are equal only if they have the same number of nodes and corresponding nodes contain the same data. Either head pointer given may be null meaning that the corresponding list is empty.

// const Node = function(data) {
//   this.data = data;
//   this.next = null;
// };

function CompareLists(llist1, llist2) {
  // if both lists are empty return true
  if (llist1 === null && llist2 === null) {
    return 1;
  // if either lists empty return false
  } else if (llist1 == null || llist2 == null) {
    return 0;
  }
  // if data in current node is same, do recursive calls to set the pointer to the next node and compare until it meets the base case of list being empty return true
  if (llist1.data === llist2.data) {
    return CompareLists1(llist1.next, llist2.next);
  } else {
    return 0;
  }
}

function CompareLists1(llist1, llist2) { // O(n) run time is based on input size
  // if both lists are empty they are the same so return true
  if (llist1 === null && llist2 === null) {
    return 1;
  }

  // if both lists are NOT empty, then data of current nodes must match, and the same should be true for each subsequent node 
  if (llist1 !== null && llist2 !== null) {
    return (llist1.data === llist2.data) && CompareLists1(llist1.next, llist2.next)
  }

  // reach here if either llists is empty while the other isnt
  return 0;
}

function CompareLists2(llist1, llist2) { // iterative approach also O(n)
  // while loop as long as list1 and list2 are not empty
  while (llist1 !== null && llist2 !== null) {
    // check current nodes for list1 & list2 are equal or not
    if (llist1.data !== llist2.data) {
      return 0;
    }
    // if the same move pointer to next node and continue
    llist1 = llist1.next;
    llist2 = llist2.next;
  }
  return (llist1 === null && llist2 === null);
}




'use strict';

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

  while(currNode !== null) {
    nextNode = currNode.next;
    currNode.next = preNode;
    preNode = currNode;
    currNode = nextNode;
  }
  head = preNode;
  return head;
}
'use strict';

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
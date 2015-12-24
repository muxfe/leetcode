/**
 * Given a linked list, remove the nth node from the end of list and return its head.
 * Note:
 * Given n will always be valid.
 * Try to do this in one pass.
 * Difficulty: Easy
 * Tags: Linked list, Two pointers
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  var cursor = head
    , del = head
    , count = 0;
  while (cursor) {
    count++;
    if (count > n + 1) {
      del = del.next;
    }
    cursor = cursor.next;
  }
  if (del.next) {
    del.next = del.next.next;
  } else {
    del.next = null;
  }
  return head;
};

// test
//
//

var genListNode = function (numarr) {
  var list = new ListNode(numarr[0]);
  var cursor = list;
  for (var i = 1; i < numarr.length; i++) {
    cursor.next = new ListNode(numarr[i]);
    cursor = cursor.next;
  }
  return list;
};

var printNodeList = function (list) {
  var number = '';
  var cursor = list;
  do {
    number += (cursor === list ? '' : '->') + cursor.val;
  } while (cursor = cursor.next);
  return number;
}

console.log(printNodeList(removeNthFromEnd(genListNode([1,2,3,4,5]),2)));
console.log(printNodeList(removeNthFromEnd(genListNode([1]),1)));

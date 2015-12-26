/**
 * Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
 * Difficulty: Easy
 * Tags: Linked List
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  var head = new ListNode()
    , cursor = head
    , val;

  while(l1 && l2) {
    if (l1.val < l2.val) {
      val = l1.val;
      l1 = l1.next;
    } else {
      val = l2.val;
      l2 = l2.next;
    }
    cursor.next = new ListNode(val);
    cursor = cursor.next;
  }

  if (l1) cursor.next = l1;
  if (l2) cursor.next = l2;

  return head.next;
};

// test
// Accepted
// 232 ms

var genListNode = function (numarr) {
  if (!numarr || !numarr.length) return null;
  var list = new ListNode(numarr[0]);
  var cursor = list;
  for (var i = 1; i < numarr.length; i++) {
    cursor.next = new ListNode(numarr[i]);
    cursor = cursor.next;
  }
  return list;
};

var printNodeList = function (list) {
    if (!list) return [];
  var number = '';
  var cursor = list;
  do {
    number += (cursor === list ? '' : '->') + cursor.val;
  } while (cursor = cursor.next);
  return number;
}

console.log(printNodeList(mergeTwoLists(genListNode([1,2,3,4,5]),genListNode([1,2,3,4,5]))));
console.log(printNodeList(mergeTwoLists(genListNode([1,2,3,4,42]),genListNode([6,8,9]))));
console.log(printNodeList(mergeTwoLists(genListNode([1]),genListNode([-1]))));
console.log(printNodeList(mergeTwoLists(genListNode([]),genListNode([]))));

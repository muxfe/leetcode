/**
 * Given a linked list, swap every two adjacent nodes and return its head.
 * Difficulty: Medium
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head) return null;
  var ans = new ListNode(0);
  ans.next = head;
  var cursor = ans;
  while (cursor) {
    var first = cursor.next
      , second = first && first.next;
    if (!second) break;
    cursor.next = second;
    first.next = second.next;
    second.next = first;
    cursor = first;
  }
  return ans.next;
};

// test
// Accpeted
// 184 ms
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
  if (!list) return '';
  var number = '';
  var cursor = list;
  do {
    number += (cursor === list ? '' : '->') + cursor.val;
  } while (cursor = cursor.next);
  return number;
}

console.log(printNodeList(swapPairs(genListNode([]))));
console.log(printNodeList(swapPairs(genListNode([1]))));
console.log(printNodeList(swapPairs(genListNode([1,2]))));
console.log(printNodeList(swapPairs(genListNode([1,2,3]))));
console.log(printNodeList(swapPairs(genListNode([1,2,3,4]))));

/**
 * You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
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
var addTwoNumbers = function(l1, l2) {
  var ans = new ListNode(0), cursor = ans;
  var sum = 0, carry = 0;
  while (l1 || l2) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;
    cursor.next = new ListNode(sum);
    cursor = cursor.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (carry) cursor.next = new ListNode(carry);
  return ans.next;
};

// test
// Accepted
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
    number += cursor.val;
  } while (cursor = cursor.next);
  return number;
}

var l1 = genListNode([9,9]);
var l2 = genListNode([9,9]);
console.log(printNodeList(addTwoNumbers(l1, l2)));

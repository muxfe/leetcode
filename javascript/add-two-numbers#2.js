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
  var num1 = '', num2 = '', rnum1, rnum2;
  var sum, numarr = [], ans = {};
  var cursor = l1;
  while (cursor) {
    num1 += cursor.val;
    cursor = cursor.next;
  }
  cursor = l2;
  while (cursor) {
    num2 += cursor.val;
    cursor = cursor.next;
  }
  rnum1 = parseInt(num1.split('').reverse().join(''));
  rnum2 = parseInt(num2.split('').reverse().join(''));
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  sum = num1 + num2 + (rnum1 - num1) + (rnum2 - num2);
  numarr = ('' + sum).split('').reverse();
  ans = new ListNode(parseInt(numarr[0]));
  cursor = ans;
  for (var i = 1; i < numarr.length; i++) {
    var node = new ListNode(parseInt(numarr[i]));
    cursor.next = node;
    cursor = cursor.next;
  }
  return ans; 
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

var l1 = genListNode([9]);
var l2 = genListNode([1,9,9,9,9,9,8,9,9,9]);
console.log(printNodeList(addTwoNumbers(l1, l2)));

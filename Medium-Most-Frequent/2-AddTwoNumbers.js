/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in
 reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let n1 = l1;
  let n2 = l2;

  let number1 = '';
  let number2 = '';

  while (n1 !== null) {
    number1 += n1.val;


    n1 = n1.next;
  }
  while (n2 !== null) {
    number2 += n2.val;
    n2 = n2.next;
  }

  console.log(number1);
  console.log(number2);
  let number = Number(number1) + Number(number2);
  number = number.toString().split('');
  // console.log(number);
  // console.log(number[number.length-1]);
  let listHead;
  let list;

  if (number2 !== '0' && number1 !== '0') {
    for (var i = number.length - 1; i >= 0; i--) {
      if (i === number.length - 1) {
        listHead = new ListNode(number[number.length - 1]);
        list = listHead;
      } else {
        list.next = new ListNode(number[i]);
        list = list.next;
      }
    }
  } else {
    for (var i = 0; i < number.length; i++) {
      if (i === 0) {
        listHead = new ListNode(number[i]);
        list = listHead;
      } else {
        list.next = new ListNode(number[i]);
        list = list.next;
      }
    }
  }


  return listHead;
};

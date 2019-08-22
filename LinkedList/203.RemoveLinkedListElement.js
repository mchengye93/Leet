/*
Remove all elements from a linked list of integers that have value val.

Example:

Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    
    while(head && head.val === val){
        head = head.next;
    }
    if(head === null) return head;
    var current = head;
    while(current.next !== null){
        if(current.next.val !== val){
            current = current.next;
        }
        else{
            current.next = current.next.next;
        }
    }
    
    return head
};
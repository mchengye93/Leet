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
    
    if (head !==null){
    var current = head;
    var next = current.next;
        
    if (current.val === val) {
        current = next;
        if(next !== null){
         next = next.next;
        }
       
    }
    
    while (next !== null) {
        if (next.val === val) {
            current.next = next.next;
            next = next.next;
        } else {
            current = next;
            next = next.next;
        }
    }
    }
   
    
  
    return head;
};
/**
 *
 * Problem #21
 * https://leetcode.com/problems/merge-two-sorted-lists/
 *
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
var mergeTwoLists = function(l1, l2) {
    
    // Edge case: One of the list is empty
    if (!l1) return l2
    if (!l2) return l1

    // Selecting the 'merged' list
    if (l1.val <= l2.val) {
        var merged = l1
        var merged_head = l1
        var rest = l2
    } else {
        var merged = l2
        var merged_head = l2
        var rest = l1
    }
    
    // Parsing the 'rest' list
    while (rest) {
        if (merged_head.next) {
            if (merged_head.next.val >= rest.val) {
                var next_head = merged_head.next
                merged_head.next = rest
                rest = rest.next
                merged_head.next.next = next_head
            } else {
                merged_head = merged_head.next
            }
        } else {
            merged_head.next = rest
            rest = null
        }
    }
    
    // Returning the merged list
    return merged
};
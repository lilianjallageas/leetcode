/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    
    // Creating 2 lists (Left and Right)
    let leftHead = new ListNode(0);
    let rightHead = new ListNode(0);
    
    // Creating pointers to navigate through the lists
    let leftPointer = leftHead;
    let rightPointer = rightHead;

    // Parsing through the list, and assigning the nodes to either Left or Right lists
    var pointer = head;
    while (pointer !== null) {
        if (pointer.val < x) { 
            leftPointer.next = pointer; // Adding the lesser value to the LEFT list
            leftPointer = pointer; // Moving the LEFT pointer
        } else {
            rightPointer.next = pointer; // Adding the greater value fo the RIGHT list
            rightPointer = pointer; // Moving the RIGHT pointer
        }
        pointer = pointer.next;
    }

    // Merging the Left and the Right lists
    rightPointer.next = null;
    leftPointer.next = rightHead.next;

    // Returning the new list
    return leftHead.next;
};

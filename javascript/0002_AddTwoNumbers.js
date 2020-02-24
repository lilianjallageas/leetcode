/**
 *
 * Problem #2
 * Problem URL: https://leetcode.com/problems/add-two-numbers/
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    // Variables
    var l1CurrentNode = l1;
    var l2CurrentNode = l2;
    var decimal = 0;
    var output = null;
    var outputCurrentNode = null;

    // Going though both lists
    while (l1CurrentNode != null || l2CurrentNode != null) {

        // Creating the next node
        var sum = decimal + ((l1CurrentNode && l1CurrentNode.val) ? l1CurrentNode.val : 0) + ((l2CurrentNode && l2CurrentNode.val) ? l2CurrentNode.val : 0);
        var newNode = new ListNode((sum)%10);
        decimal = (sum >= 10) ? Math.floor(sum/10) : 0;

        // Adding the next node to the output
        if (!outputCurrentNode){
            output = newNode;
            outputCurrentNode = newNode;
        } else {
            outputCurrentNode.next = newNode;
            outputCurrentNode = outputCurrentNode.next;
        }

        // Moving forward
        l1CurrentNode = ((l1CurrentNode && l1CurrentNode.next) ? l1CurrentNode.next : null);
        l2CurrentNode = ((l2CurrentNode && l2CurrentNode.next) ? l2CurrentNode.next : null);
    }

     // Adding the decimal to the last value, if necessary
    if (decimal > 0) {
        outputCurrentNode.next = new ListNode(decimal);
    }

    // Returning the list
    return output;
};
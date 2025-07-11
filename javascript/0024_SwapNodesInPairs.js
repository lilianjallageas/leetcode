/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {

	// Edge Case: Only 1 node => Return the node
	if (!head || head.next == null) { return head; }

	// Using 3 pointers to go throught the linked list
	let preHead = new ListNode(0, head);
	let p1 = preHead;
	let p2 = head;
	let p3 = head.next;

	while (p2 && p3) {
		// Swaping the nodes (in pairs):
		p1.next = p2.next;
		p2.next = p3.next;
		p3.next = p2;
		// Moving the pointers:
		p1 = p2;
		if (!p2.next) { p2 = null; p3 = null; }
		else {
			p2 = p2.next;
			p3 = p2.next;
		}
	}

	// Returning the new head
	return preHead.next;
};

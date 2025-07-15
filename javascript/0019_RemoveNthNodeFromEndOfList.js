/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
	
	let dummy = new ListNode(0, head);
	let p = dummy;
	let prev = dummy;
	let current = prev.next;
	let position;

	// Edge case: Only 1 node => Returning null
	if (!current.next) { return null };

	// Going through the list, to determine its size
	let size = 0;
	while (p.next) {
		size += 1;
		p = p.next;
	}

	// Moving the pointers to the right position
	for (let i = 1; i < position; i++){
		current = current.next;
		prev = prev.next;
	}

	// Removing the unecessary node
	prev.next = current.next;

	// Returning the head of the list
	return dummy.next;
};

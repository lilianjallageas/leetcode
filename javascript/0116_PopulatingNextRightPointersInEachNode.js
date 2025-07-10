/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {

	// Edge case: Empty tree
	if (!root) return null;

	// End condition: Stop when there's no more children
	if (!root.left) return root; // Only need to chech one the children, because the tree is perfect.

	// Step 1: Set leftChild's next to rightChild
	root.left.next = root.right;

	// Step 2: If node has next!=null, then set rightChild's next: right child's next = node.next.leftChild
	if (root.next) {
		root.right.next = root.next.left;
	}

	// Do these steps recursively on both left and right children
	connect (root.left);
	connect (root.right);

	// Returning the updated tree
	return root;
};

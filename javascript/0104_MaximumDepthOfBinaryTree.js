/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    
    // If there's no node, we return 0
    if (!root) return 0;

    // If it's the last node (no children), we return '1'.
    if (!root.left && !root.right) return 1;

    // Otherwise, we return the max value of the children + 1.
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

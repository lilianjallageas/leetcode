/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {

    // If both nodes are 'undefined', the tree is identical
    if (p == undefined && q == undefined) return true;
    
    // If the node's values are different, the tree is not identical
    if ((!p && q || p && !q) || (p.val != q.val)) return false;
    
    // Comparing the tree on the LEFT
    if (isSameTree(p.left, q.left) == false) return false;

    // Comparing the tree on the RIGHT
    if (isSameTree(p.right, q.right) == false) return false;

    return true;
};

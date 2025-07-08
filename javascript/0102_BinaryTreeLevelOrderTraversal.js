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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    
    // Edge case: The root is empty
    if (!root) return [];

    const result = [];
    const queue = [root]; 
    // Building a queue with the elements of each level (depth) of the tree:
    // For each element of the queue at a certain level:
    //   - We add the value in an array, which itself will be added to the result array
    //   - We add any children to the queue (for processing of the next level)
    while (queue.length > 0) {
        const nbNodesAtThisLevel = queue.length; // Number of nodes at this level
        const valuesAtThisLevel = [];
        // Processing all the nodes at this level
        for (let i = 0; i < nbNodesAtThisLevel; i++){
            let nextNode = queue.shift();
            valuesAtThisLevel.push(nextNode.val);
            if (nextNode.left) { queue.push(nextNode.left); }
            if (nextNode.right) { queue.push(nextNode.right); }
        }
        result.push(valuesAtThisLevel);
    }
    return result;
};

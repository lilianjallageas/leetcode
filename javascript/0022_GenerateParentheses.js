/**
 *
 * Problem #22
 * Problem URL: https://leetcode.com/problems/generate-parentheses/
 *
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

	let outputArray = []

	// Recursive function that builds the parenthesis strings
	var addNextParenthesis = function (parentString, remainingOpen, remainingClose, outputArray) {
		if (remainingOpen == 0 && remainingClose == 0) {
			outputArray.push(parentString); // Adding the final string to the output array
		} else {
			if (remainingOpen > 0) {
				addNextParenthesis(parentString+"(", remainingOpen-1, remainingClose, outputArray);
			}
			if (remainingClose > 0 && remainingOpen < remainingClose) { // We don't want to close what's not open
				addNextParenthesis(parentString+")", remainingOpen, remainingClose-1, outputArray);
			}
		}

	}

	// Building the tree
	addNextParenthesis("(", n-1, n, outputArray);

	return outputArray;
};
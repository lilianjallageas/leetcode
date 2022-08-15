 /**
 *
 * Problem #32
 * Problem URL: https://leetcode.com/problems/longest-valid-parentheses/submissions/
 *
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(str) {
	let maxCount = 0;

	let openCount = 0;
	let closeCount = 0;
	for (let index = 0; index < str.length; index++) {
		const char = str[index];
		if (char == "(" ) { openCount++; }
		if (char == ")" ) { closeCount++; }
		if (openCount == closeCount) { maxCount = Math.max(maxCount, openCount+closeCount) }
		if (openCount < closeCount) { openCount = 0; closeCount = 0; }
	}

	openCount = 0;
	closeCount = 0;
	for (let index = str.length-1; index >= 0; index--) {
		const char = str[index];
		if (char == "(" ) { openCount++; }
		if (char == ")" ) { closeCount++; }
		if (openCount == closeCount) { maxCount = Math.max(maxCount, openCount+closeCount) }
		if (openCount > closeCount) { openCount = 0; closeCount = 0; }
	}

	return maxCount;
};
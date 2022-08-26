/**
 *
 * Problem #28
 * Problem URL: https://leetcode.com/problems/implement-strstr
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
	if (needle.length == 0) { return 0; }
	return haystack.indexOf(needle);
};
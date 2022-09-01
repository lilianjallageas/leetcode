/**
 *
 * Problem #8
 * Problem URL: https://leetcode.com/problems/string-to-integer-atoi/
 *
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
	var x = str.trim();
	x = parseInt(x);
	if (isNaN(x)) { return 0; }
	if (x <= -2147483648) { return -2147483648; }
	if (x >= 2147483648) { return 2147483647; }
	return x;
};
/**
 *
 * Problem #7
 * Problem URL: https://leetcode.com/problems/reverse-integer/
 *
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
	var isNegative = (x < 0) ? true : false;
	if (isNegative) { x = Math.abs(x) }
	x = x.toString().split('').reverse().join('')
	if (isNegative) { x = '-' + x }
	var _x = parseInt(x);
	if ( _x < -2147483648 || _x > 2147483648 ) { return 0 }
	else { return _x; }
};
/**
 *
 * Problem #9
 * Problem URL: https://leetcode.com/problems/palindrome-number/
 *
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

	// Variables
	var arr = x.toString().split('');
	var i = 0
	var j = arr.length-1;

	// Going through the array 
	while (i<j) {
		if (arr[i] != arr[j]) return false;
		i++; 
		j--;
	}

	return true;
};
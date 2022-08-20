/**
 *
 * Problem #67
 * Problem URL: https://leetcode.com/problems/add-binary/
 *
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
	let output = "";

	// Aligning the strings, so they're easier to parse
	let maxLength = Math.max(a.length, b.length);
	let difference = Math.abs(a.length-b.length);
	(a.length < b.length) ? a = "0".repeat(difference).concat(a) : b = "0".repeat(difference).concat(b);

	// Parsing both strings (from the end) to do the binary addition
	let carry = 0;
	for (let index = maxLength-1; index >= 0; index--) {
		let aValue = parseInt(a.charAt(index));
		let bValue = parseInt(b.charAt(index));
		let localAddition = carry + aValue + bValue;
		if (localAddition === 0) { output = "0".concat(output); carry = 0; }
		if (localAddition === 1) { output = "1".concat(output); carry = 0; }
		if (localAddition === 2) { output = "0".concat(output); carry = 1; }
		if (localAddition === 3) { output = "1".concat(output); carry = 1; }
	}
	// Adding the last carried value
	if (carry === 1) { output = "1".concat(output); }

	return output;
};
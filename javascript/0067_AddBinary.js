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

	// Using Arrays (instead of strings), for performance purpose
	let A = a.split('');
	let B = b.split('');

	// Aligning the arrays (with zeros), so they're easier to parse
	let maxLength = Math.max(A.length, B.length);
	let difference = Math.abs(A.length - B.length);
	let arrayOfZeros = new Array(difference).fill(0);
	(A.length < B.length) ? A = [...arrayOfZeros, ...A] : B = [...arrayOfZeros, ...B];
	let output = new Array(maxLength).fill("0");

	// Parsing both arrays to do the binary addition
	let carry = 0;
	for (let index = maxLength-1; index >= 0 ; index--) {
		let aValue = parseInt(A[index]);
		let bValue = parseInt(B[index]);
		let localAddition = carry + aValue + bValue;
		if (localAddition === 0) { output[index] = "0"; carry = 0; }
		if (localAddition === 1) { output[index] = "1"; carry = 0; }
		if (localAddition === 2) { output[index] = "0"; carry = 1; }
		if (localAddition === 3) { output[index] = "1"; carry = 1; }
	}
	// Adding the last carried value
	if (carry === 1) { output.unshift("1"); }

	return output.join('');
};
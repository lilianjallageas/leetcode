/**
 *
 * Problem #17
 * Problem URL: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 *
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {

	// Edge-case
	if (digits.length === 0) return [];

	// Keyboard Map
	let keyboardMap = new Map();
	keyboardMap.set("2", ["a", "b", "c"]);
	keyboardMap.set("3", ["d", "e", "f"]);
	keyboardMap.set("4", ["g", "h", "i"]);
	keyboardMap.set("5", ["j", "k", "l"]);
	keyboardMap.set("6", ["m", "n", "o"]);
	keyboardMap.set("7", ["p", "q", "r", "s"]);
	keyboardMap.set("8", ["t", "u", "v"]);
	keyboardMap.set("9", ["w", "x", "y", "z"]);

	// Recursive function that builds the strings
	function buildStrings(digitsArray, index, stringsArray) {
		if (index === digitsArray.length) {
			return stringsArray;
		} else {
			const newStringsArray = [];
			const currentDigit = digitsArray[index];
			const letters = keyboardMap.get(currentDigit);
			for (let j = 0; j < letters.length; j++) {
				for (let i = 0; i < stringsArray.length; i++) {
					newStringsArray.push(stringsArray[i]+letters[j]);
				}
			}
			return buildStrings(digitsArray, index+1, newStringsArray);			
		}
	}

	// Executing the recursion
	return buildStrings(digits.split(''), 0, ['']);
};
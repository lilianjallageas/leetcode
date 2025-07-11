/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
	
	// Edge case: 1 string => Returning the single string
	if (strs.length == 1) { return [strs]; }

	let map = new Map();

	// Looping through the array of Strings.
	// For each string, we'll sort them, and add the original string to the Map
	for (let i = 0; i < strs.length; i++) {
		let str = strs[i]
		let orderedString = str.split('').sort().join('');
		if (map.has(orderedString)) {
			let existingAnagrams = map.get(orderedString)
			existingAnagrams.push(str);
			map.set(orderedString, existingAnagrams);
		} else {
			map.set(orderedString, [str]);
		}
	}

	// Building the array we'll return
	let result = [];
	for (const element of map) {
		result.push(element[1]);
	}
	return result;
};

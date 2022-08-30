/**
 *
 * Problem #41
 * Problem URL: https://leetcode.com/problems/first-missing-positive/
 *
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
	// Looking for the highest and lowest values in the array
	let highest = null;
	let lowest = null;
	for (let i = 0; i < nums.length; i++) {
		const element = nums[i];
		if (element > highest) { 
			highest = element;
		} else if (element > 0 && element < lowest) { 
			lowest = element;
		}
	}

	// Edge-case
	if (lowest > 1) { return 1 }

	// Filling out the mapping array
	let hasValueArray = new Array(highest);
	hasValueArray[0] = 1;
	for (let j = 0; j < nums.length; j++) {
		const element = nums[j];
		hasValueArray[element] = 1;
	}

	// Finding the first cell in the array that wasn't present in 'nums'
	let missingPositive = 0;
	while (hasValueArray[missingPositive] === 1) { missingPositive++; }
	return missingPositive;
};
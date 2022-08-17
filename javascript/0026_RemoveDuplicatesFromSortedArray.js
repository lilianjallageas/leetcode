 /**
 *
 * Problem #26
 * Problem URL: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 *
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {

	let insertIndex = 0;
	let searchIndex = 1;

	while (searchIndex < nums.length) {
		// Skipping the duplicate values
		if (nums[insertIndex] == nums[searchIndex]) {
			if (insertIndex != searchIndex) { nums[searchIndex] = null; } // Cleaning the duplicated value
			searchIndex++;
		} else {
			// We found a non-duplicate value, so we save it
			insertIndex++;
			nums[insertIndex] = nums[searchIndex];
		}
	}

	return insertIndex+1;
};
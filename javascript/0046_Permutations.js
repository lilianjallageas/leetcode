 /**
 *
 * Problem #46
 * Problem URL: https://leetcode.com/problems/permutations/
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
	if (nums.length <= 1) { // Ending condition
		return [nums];
	} else { // Permuting the sub-arrays around the 'pivot' recursively
		let combinedPermutations = [];
		for (let indexPivot = 0; indexPivot < nums.length; indexPivot++) {
			let arrayAroundPivot = [...nums.slice(0, indexPivot), ...nums.slice(indexPivot + 1)]
			let pivotedStrings = permute(arrayAroundPivot);
			pivotedStrings.forEach((element) => {
				combinedPermutations.push([nums[indexPivot], ...element]);
			})
		}
		return combinedPermutations;
	}
};
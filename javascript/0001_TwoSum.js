/**
 *
 * Problem #1
 * Problem URL: https://leetcode.com/problems/two-sum/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	for (let indexA = 0; indexA < nums.length; indexA++){
		for (let indexB = indexA+1; indexB < nums.length; indexB++){
			if (indexA != indexB){
				if (nums[indexA]+nums[indexB] == target) { return [indexA, indexB] } 
			}
		}
	}
};
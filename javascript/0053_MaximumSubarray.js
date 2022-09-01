/**
 *
 * Problem #53
 * Problem URL: https://leetcode.com/problems/maximum-subarray/
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

	// Edge case: The array contains a single number
	if(nums.length == 1){ return nums[0] }

	var max_sum = null
	for (let i=0; i<nums.length; i++) {
		var sum = null;
		for (let j=i; j<nums.length; j++) {
			sum = (i==j) ? nums[i] : sum+nums[j]
			if (max_sum != null){
				if (sum >= max_sum) { max_sum = sum }
			} else { max_sum = sum }
		}
	}
	return max_sum
};
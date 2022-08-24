/**
 *
 * Problem #27
 * Problem URL: https://leetcode.com/problems/remove-element/
 *
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
	do {
		var index = nums.indexOf(val);
		if (index != -1){
			nums.splice(index,1)
		}
	} while (index != -1)
	return nums.length
};
/**
 *
 * Problem #35
 * Problem URL: https://leetcode.com/problems/search-insert-position/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var index = nums.indexOf(target)
    if (index != -1) {
        return index
    } else {
        var i = -1
        while (target > nums[i+1] && i < nums.length) { i ++ }
        return i+1
    }
};
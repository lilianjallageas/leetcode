/**
 *
 * Problem #11
 * Problem URL: https://leetcode.com/problems/container-with-most-water/
 *
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
	var max_water = 0;
	for (let i=0; i < height.length-1; i++) {
		for (let j=i+1; j < height.length; j++) {
			water = (j-i) * Math.min(height[i],height[j]);
			if (water > max_water) { max_water = water; }
		}
	}
	return max_water;
};

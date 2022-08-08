/**
 *
 * Problem #15
 * Problem URL: https://leetcode.com/problems/3sum/
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

	let combinations = [];

	// Edge case: Initial array has less than 3 elements
	if (nums.length < 3) { return []; }

	// Sorting the numbers
	nums.sort(function(a, b){return a-b});

	// Parsing the sorted array
	let lastValidTriplet = [];
	for (let i = 0; i < nums.length - 2; i++) {
		// Skipping duplicates
		while (nums[i] == nums[i-1]) { i++; }
		// Setting the indexes
		let leftIndex = i+1;
		let rightIndex = nums.length-1;
		// Parsing the subset of the array (with our 2 pointers)
		while (leftIndex < rightIndex) {
			const currentSum = nums[i] + nums[leftIndex] + nums[rightIndex];
			// Checking if we found a valid triplet
			if (currentSum == 0) {
				const newValidTriplet = [nums[i], nums[leftIndex], nums[rightIndex]];
				// Adding the valid triplet to the list	
				if (newValidTriplet.toString() != lastValidTriplet.toString()) { 
					combinations.push(newValidTriplet);
					lastValidTriplet = newValidTriplet;
				}
				leftIndex++;
				rightIndex--;
			} else {
				if (currentSum > 0) { rightIndex--; } // If the sum is > 0, the number on the right is too high
				else { leftIndex ++;} // If the sum is < 0, the number on the left is too low
			}
		}
	}

	return combinations;
};

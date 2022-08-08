/**
 *
 * Problem #6
 * Problem URL: https://leetcode.com/problems/3sum/
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

	let combinations = [];

	// Edge case: Initial array has less than 3 elements
	if (nums.length < 3) { return []; }

	// Edge case: Initial array contains three (or more) zeros
	let countZeros = 0;
	for (let i = 0; i < nums.length; i++) { if (nums[i] === 0) { countZeros++; } }
	if (countZeros >= 3) { combinations.push([0,0,0]); }

	// Function: Array comparison 
	var areArraysEqual = function(arrayA, arrayB){
		for (var i = 0; i < arrayA.length; i++) {
			if (arrayA[i] != arrayB[i]) { return false; }
		}
		return true;
	}

	// Function: Build map of tuples
	var buildMap = function (sortedArray){
		let map = {};
		for (let i = 0; i < sortedArray.length; i++) {
			for (let j = i+1; j < sortedArray.length; j++) {
				let addition = sortedArray[i] + sortedArray[j];
				let tempTuples = map[addition] || [];
				tempTuples.push([sortedArray[i],sortedArray[j]]);
				map[addition] = tempTuples;
			}
		}
		return map;
	}

	// Function: Checking the opposite solutions
	var checkOpposite = function (array, oppositeMap, combinations) {
		array.forEach(element => {
			let solutions = oppositeMap[-element];
			if (solutions && solutions.length > 0) {
				// Adding triplets to the final list
				solutions.forEach((solution) => {
					const newValidTriplet = [element, ...solution];
					combinations.push(newValidTriplet);
				});
			}
		});
	}

	// Sorting
	nums.sort(function(a, b){return a-b});

	// Spliting negative/positive arrays
	let indexPositive = nums.findIndex((element) => element >= 0);
	let negativeArray = nums.slice(0, indexPositive);
	let positiveArray = nums.slice(indexPositive, nums.length);

	// Building maps of tuples
	let negativeMap = buildMap(negativeArray);
	let positiveMap = buildMap(positiveArray);

	// Checking the combinations
	checkOpposite(negativeArray, positiveMap, combinations);
	checkOpposite(positiveArray, negativeMap, combinations);

	// Removing Duplicates
	let noDuplicates = [];
	for (let i = 0; i < combinations.length; i++) {
		let j = 0;
		let alreadyPresent = false;
		while (!alreadyPresent && j < noDuplicates.length) {
			if (areArraysEqual(combinations[i], noDuplicates[j])) { alreadyPresent = true; }
			j++;
		}
		if (alreadyPresent === false) { noDuplicates.push(combinations[i]); }
	}

	return noDuplicates;
};

/**
 *
 * Problem #39
 * Problem URL: https://leetcode.com/problems/combination-sum/
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {

	const searchForCombination = function(currentArray, currentSum, candidates, target, listOfCombinations) {
		for (let i = 0; i < candidates.length; i++) {
			const element = candidates[i]
			const newSum = currentSum + element;
			// If we found a valid combination, we add the combination to the final list
			if (newSum === target ) {
				listOfCombinations.push([...currentArray, element]);
			}
			// If the sum is lower than the target, we add the value, and search for additional possible combinations
			if (newSum < target ) {
				searchForCombination([...currentArray, element], newSum, candidates.slice(i), target, listOfCombinations);
			}
		}
	};

	let listOfCombinations = [];
	searchForCombination([], 0, candidates, target, listOfCombinations);
	return listOfCombinations;
};
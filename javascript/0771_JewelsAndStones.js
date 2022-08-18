/**
 *
 * Problem #771
 * Problem URL: https://leetcode.com/problems/jewels-and-stones/
 *
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
	
	// Edge case: No stones
	if (J.length == 0 || S.length == 0) return 0;
	
	// Finding the jewels amonst my stones
	var nbJewels = 0;
	for (jewelType of J) {
		for (stone of S) {
			if (stone == jewelType) { nbJewels++ }
		}
	}
	return nbJewels
};
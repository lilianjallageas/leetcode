 /**
 *
 * Problem #62
 * Problem URL: https://leetcode.com/problems/unique-paths/submissions/
 *
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {

	// Building an array of possible paths
	let nbPathsArray = Array(m).fill(1).map(row => Array(n).fill(1));

	// Calculating the possibles paths, starting from the last cell (i.e. the destination)
	for (let i = m-2; i >= 0; i--) {
		for (let j = n-2; j >= 0; j--) {
			// The number of possible paths for a specific cell
			// is the sum of the possible paths from the cell below and the cell on the right
			nbPathsArray[i][j] = nbPathsArray[i+1][j] + nbPathsArray[i][j+1];
		}
	}

	// Returning the total of possible paths from the first cell (start)
	return nbPathsArray[0][0];
};
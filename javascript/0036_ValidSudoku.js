 /**
 *
 * Problem #36
 * Problem URL: https://leetcode.com/problems/valid-sudoku/
 *
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {

	// Sets used to determine if there's duplicates
	let lineSet = new Set();
	let colSet = new Set();
	let blockSet = new Set();

	// Parsing the board for duplicates (on lines, columns, and sub-arrays)
	for (let lineIndex = 0; lineIndex < 9; lineIndex++) {
		for (let colIndex = 0; colIndex < 9; colIndex++) {
			const value = board[lineIndex][colIndex];
			if (value !== ".") {
				// Checking for duplicates on the line
				let valueInLine = `${value} in line ${lineIndex}`
				if (lineSet.has(valueInLine)) { return false; } else { lineSet.add(valueInLine); }
				// Checking for duplicates on the column
				let valueInColumn = `${value} in column ${colIndex}`
				if (colSet.has(valueInColumn)) { return false; } else { colSet.add(valueInColumn)};
				// Checking for duplicates on the sub-array
				let valueInBlock = `${value} in block ${Math.floor(lineIndex/3)}x${Math.floor(colIndex/3)}`
				if (blockSet.has(valueInBlock)) { return false; } else { blockSet.add(valueInBlock)};
			}
		}
	}
	
	return true;
};
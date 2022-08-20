 /**
 *
 * Problem #36
 * Problem URL: https://leetcode.com/problems/valid-sudoku/
 *
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {

	// Building Maps to check the existance of duplicates
	let mapLines = new Map();
	let mapColum = new Map();
	for (let i = 0; i < 9; i++) {
		mapLines.set(i, new Set());
		mapColum.set(i, new Set());
	}
	let subArraySets = [[new Set(), new Set(), new Set()],[new Set(), new Set(), new Set()],[new Set(), new Set(), new Set()]];


	// Parsing the board for duplicates (on lines, columns, and sub-arrays)
	for (let lineIndex = 0; lineIndex < 9; lineIndex++) {
		let line = mapLines.get(lineIndex);
		for (let colIndex = 0; colIndex < 9; colIndex++) {
			let column = mapColum.get(colIndex);
			const value = board[lineIndex][colIndex];
			if (value !== ".") {
				// Checking for duplicates on the line
				if (line.has(value)) { return false; } else { line.add(value); }
				// Checking for duplicates on the column
				if (column.has(value)) { return false; } else { column.add(value)};
				// Checking for duplicates on the sub-array
				let subSet = subArraySets[Math.floor(lineIndex/3)][Math.floor(colIndex/3)];
				if (subSet.has(value)) { return false; } else { subSet.add(value)};
			}
		}
	}
	
	return true;
};
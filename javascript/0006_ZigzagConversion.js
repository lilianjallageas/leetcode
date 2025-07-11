/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
	
	var rows = new Array(numRows).fill('');

	// Edge case: Only 1 row => Returning the same string
	if (numRows == 1) { return s; }

	let goingDown = true;
	let rowNumber = 0;

	// Building the rows with the right letters
	for (let char of s) {

		// Adding the character to the row (concatenation)
		rows[rowNumber] += char;

		// If we're going down and reached the last row, we change direction
		if (goingDown) { 
			if (rowNumber+1 == numRows) { goingDown = false; rowNumber -= 1; } 
			else { rowNumber += 1; }
		} else { 
			// If we're row going up and reached the first row, we change direction
			if (rowNumber == 0) { goingDown = true; rowNumber += 1; } 
			else { rowNumber -= 1; }
		}
	}

	// Returning the concatenated string, from all rows
	return rows.join("");
};

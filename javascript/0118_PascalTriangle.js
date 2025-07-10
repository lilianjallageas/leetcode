/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
	
	let arr = [[1]];

	// Edge case: numRows == 1
	if (numRows == 1) { return arr; }

	for (let i=0; i<numRows-1; i++) {
		var topRow = arr[i];
		var newRow = [1];
		for (let j=0; j < topRow.length-1; j++) {
			newRow.push(topRow[j] + topRow[j+1]);
		}
		newRow.push(1);
		arr.push(newRow);
	}

	return arr;
};

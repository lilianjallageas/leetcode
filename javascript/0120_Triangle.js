/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    
    // Edge case: The triangle has only 1 node
    if (triangle.length == 1) { return triangle[0][0]; }

    // Starting at the bottom of the triangle (from the last element of the array):
    //   For each pair of children, we determine which one is the smallest,
    //   We add the smallest child to its parent,
    //   We repeat that until we get to the top of the triangle.
    console.log("Starting here...");
    for (let i = triangle.length-1; i >= 0; i--){
        for (let j = 0; j <= triangle[i].length-2; j++ ){
            triangle[i-1][j] = triangle[i-1][j] + Math.min(triangle[i][j], triangle[i][j+1]);
        }
    }
    // At this point, the top element of the triangle contains the minimum sum of the children
    return triangle[0][0];
};

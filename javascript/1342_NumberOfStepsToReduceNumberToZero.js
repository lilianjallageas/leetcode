/**
 *
 * Problem #1342
 * Problem URL: https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
 *
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    
    // Edge case: 0
    if(num == 0) { return 0; };

    // Going through the steps
    var nbSteps = 0
    while (num != 0){
        // Dividing by 2, if possible
        let numStr = num.toString()
        let lastDigit = numStr.charAt(numStr.length-1)
        if (['0','2','4','6','8'].includes(lastDigit)) { num = num/2 } // Using 'includes' instead of '%' for performance purpose
        // Otherwise, substracting 1
        else { num--; }
        // Incrementing the number of steps
        nbSteps++;
    }
    return nbSteps;
};
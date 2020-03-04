/**
 *
 * Problem #20
 * Problem URL: https://leetcode.com/problems/valid-parentheses/
 *
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    // Edge case: The string is empty => valid
    if (s.length == 0) { return true }

    // Utils functions
    var getClosingChar = function(openingChar){
        if (openingChar == '(') return ')'
        if (openingChar == '{') return '}'
        if (openingChar == '[') return ']'
    }
    
    // Parsing the string
    var stack = []
    for (char of s) {
        // If this is an opening character, we add it to the stack
        if (['(','{','['].includes(char)) { 
            stack.push(char) 
        } else {
            // Otherwise, we assume the character is 'closing'
            // Then, we need to make sure it's closing correctly
            if (char == getClosingChar(stack[stack.length-1])) {
                // If the closing character matches the last opening character, 
                // we remove the opening character from the stack
                stack.pop()
            } else {
                return false
            }
        }
    }

    // If the stack is empty, the string is valid
    return (stack.length == 0) ? true : false
};

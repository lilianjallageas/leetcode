/**
 *
 * Problem #3
 * Problem URL: https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    for (let i = 0; i < s.length; i++) {
            var stack = [];
            let j = i;
            while (j < s.length && stack.includes(s.charAt(j)) === false) {
                stack.push(s.charAt(j));
                j++;
            }
            if (stack.length > maxLength) { 
                maxLength = stack.length;
            }
    }
    return maxLength;
};
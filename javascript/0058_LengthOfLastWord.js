/**
 *
 * Problem #58
 * Problem URL: https://leetcode.com/problems/length-of-last-word/
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (s.length == 0) { return 0; }
    var arr = s.trim().split(' ')
    var lastWord = arr[arr.length-1]
    return lastWord.length
};
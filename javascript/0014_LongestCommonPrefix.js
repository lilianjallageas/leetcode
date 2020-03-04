/**
 *
 * Problem #14
 * Problem URL: https://leetcode.com/problems/longest-common-prefix/
 *
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    var prefix = "";
    var firstStr = strs[0]
    var currentChar = null;
    var stop = false;
    var i = 0;
    
    if(strs.length == 0) { return "" }
    while (!stop && i<firstStr.length) {
        currentChar = firstStr.charAt(i);
        var j = 1;
        while (!stop && j < strs.length) {
            if (strs[j].charAt(i) != currentChar) { stop = true; }
            j++
        }
        if (!stop && j == strs.length){ prefix = prefix + currentChar; }
        i++
    }
    return prefix;
};

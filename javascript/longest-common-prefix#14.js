/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs || !strs.length || !strs[0].length) return '';
  var ans = '';
  var i, cur = 0, char = strs[0].charAt(0);
  while (char) {
    for (i = 0; i < strs.length; i++) {
      if (strs[i].charAt(cur) !== char) {
        return ans;
      }
    }
    ans += char;
    cur++;
    char = strs[0].charAt(cur);
  }
  return ans;
};

// test
// Accepted
// 152ms
console.log(longestCommonPrefix([]));
console.log(longestCommonPrefix(['', '1']));
console.log(longestCommonPrefix(['123', '124', '127', '12']));
console.log(longestCommonPrefix(['123', '123', '123']));
console.log(longestCommonPrefix(['12','12','34']));

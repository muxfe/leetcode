/**
 * Implement strStr().
 * Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * Difficulty: Easy
 * Tags: String, Two Pointers
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (!needle) return 0;
  if (!haystack) return -1;
  return haystack.indexOf(needle);
};

// test
// Accepted
// 172 ms
console.log(strStr('', ''));
console.log(strStr('abc', 'a'));
console.log(strStr('abbc', 'bb'));
console.log(strStr('abc', 'c'));

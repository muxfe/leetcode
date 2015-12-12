/**
 * Given a string, find the length of the longest substring without repeating characters. For example, the longest substring without repeating letters for "abcabcbb" is "abc", which the length is 3. For "bbbbb" the longest substring is "b", with the length of 1.
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var hash = {};
  var ans = 0, count = 0;
  for (var i = 0, j = 0; i < s.length; i++) {
    if (typeof hash[s[i]] === 'number' && hash[s[i]] >= j) { // hashtable boundary between two cursor (i, j)
      ans = ans > count ? ans : count; // update ans
      j = hash[s[i]] + 1; // update prev cursor
      count = i - j; // substring length between two same characters
    }
    count++;
    hash[s[i]] = i; // create or replace index
  }
  return ans > count ? ans : count; // if last substring is longest
};

// test
//
var begin = Date.now();
console.log(lengthOfLongestSubstring('abcdefgabcdefgabcdefg'));
console.log(lengthOfLongestSubstring('bbbb'));
console.log(lengthOfLongestSubstring('abcdeafghijka'));
console.log(lengthOfLongestSubstring('abcafgahijk'));
console.log('time: ' + (Date.now() - begin) + 'ms');

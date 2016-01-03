/**
 * Given a digit string, return all possible letter combinations that the number could represent.
 * Difficulty: Medium
 * Tags: String, Backtracking
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits || !digits.length) return [];
  var phoneKeyboard = ['', '*', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    , ans = [];

  (function backtracking(pos, str) {
    if (str.length === digits.length) {
      return ans.push(str);
    }
    var key = phoneKeyboard[parseInt(digits[pos])];
    for (var i = 0; i < key.length; i++) {
      backtracking(pos + 1, str + key[i]);
    }
  })(0, '');

  return ans;
};

// test
// Accepted
// 144 ms
console.log(letterCombinations(''));
console.log(letterCombinations('23'));
console.log(letterCombinations('32324'));

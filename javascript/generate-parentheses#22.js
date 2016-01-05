/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * Difficulty: Medium
 * Tags: Backtracking, String
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (!n || n < 1) return [];
  var ans = [];

  (function backtracking(stack, str) {
    if (str.length === n * 2) return ans.push(str);
    if (!stack.length || str.match(/[\(]/g).length < n) {
      backtracking(stack.slice(0).concat('('), str + '(');
    }
    if (stack.length && stack.pop() === '(') {
      backtracking(stack, str + ')');
    }
  })([], '');

  return ans;
};

// test
// Accepted
// 172 ms
console.log(generateParenthesis(1));
console.log(generateParenthesis(2));
console.log(generateParenthesis(3));
console.log(generateParenthesis(4));

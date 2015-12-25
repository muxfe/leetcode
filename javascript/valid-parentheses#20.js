/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * Difficulty: Easy
 * Tags: Stack, String
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (!s || s.length < 2) return false;
  var stack = []
    , map = { '(': ')', '[': ']', '{': '}' };
  for (var pos = 0; pos < s.length; pos++) {
    var cur = s.charAt(pos);
    if ("[({".indexOf(cur) > -1) {
      stack.push(cur);
    } else {
      if (!stack.length || cur !== map[stack.pop()]) return false;
    }
  }
  return !stack.length;
};

// test
// Accepted
// 156 ms
console.log(isValid("[](){}"));
console.log(isValid("{[()]}"));
console.log(isValid("{]{[}}"));
console.log(isValid("]}[]]"));

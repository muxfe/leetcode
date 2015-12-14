/**
 * Given a string S, find the longest palindromic substring in S. You may assume that the maximum length of S is 1000, and there exists one unique longest palindromic substring.
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  // Manacher算法
  // 1.处理奇偶长度情况
  // 2.初始化回文半径数组
  // 3.遍历字符串
  //   4.通过轴心计算回文半径
  //   5.从上面得出的半径开始扩展
  //   6.是否更新轴心和最大右边界
  //   7.是否更新最大回文子串长度和此时轴心
  // 8.输出结果
  s = '^#' + s.split('').join('#') + '#$';
  var radius = new Array(s.length).fill(0);
  var C = 0, centerIndex = 0, maxRight = 0, maxLen = 0;

  for (var i = 1; i < s.length - 1; i++) {
    // 计算初始回文半径
    radius[i] = (maxRight > i) ? Math.min(maxRight - i, radius[2 * C - i]) : 0;
    // 扩展半径
    while (s[i + 1 + radius[i]] && s[i - 1 - radius[i]] && s[i + 1 + radius[i]] === s[i - 1 - radius[i]]) radius[i]++;
    // 更新
    if (i + radius[i] > maxRight) {
      C = i;
      maxRight = i + radius[i];
    }
    // 更新
    if (maxLen < radius[i]) {
      maxLen = radius[i];
      centerIndex = i;
    }
  }

  return s.slice((centerIndex - maxLen), (centerIndex + maxLen + 1)).split('#').join('');
};


// test
// Accepted
var start = Date.now();
console.log(longestPalindrome('a'));
console.log(longestPalindrome('aa'));
console.log(longestPalindrome('vcaawv'));
console.log(longestPalindrome('vabcbacv'));
console.log(longestPalindrome('sldkhjfgioweabccbazxm,nbckjqwrmqwlk'));
console.log("time: " + (Date.now() - start) + 'ms');

// reverse then find LCS
// O(n^2)
// TLE
var longestPalindrome_n2 = function(s) {
  var rs = s.split('').reverse().join('');
  var ans = 0, ansi = 0;
  var c = new Array(s.length);
  var i, j;
  for (i = 0; i < c.length; i++) c[i] = new Array(s.length).fill(0);

  for (i = 0; i < s.length; i++) {
    for (j = 0; j < s.length; j++) {
      if (s[i] === rs[j]) {
        c[i][j] = (i && j ? c[i - 1][j - 1] : 0) + 1;
        if (ans < c[i][j]) {
          ans = c[i][j];
          ansi = i;
        }
      }
    }
  }

  return s.slice(ansi - ans + 1, ansi + 1);
};

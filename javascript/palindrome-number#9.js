/**
 * Determine whether an integer is a palindrome. Do this without extra space.
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  var str = x.toString();
  var left = Math.floor((str.length - 1) / 2), right = str.length % 2 ? left : left + 1;
  while (left >= 0 && right < str.length && str[left] === str[right]) { left--; right++; }
  if (left < 0 && right === str.length) return true;
  return false;
};

// test
// Accepted
// 840ms
console.log(isPalindrome(-1));
console.log(isPalindrome(1));
console.log(isPalindrome(12345));
console.log(isPalindrome(1234));
console.log(isPalindrome(12321));
console.log(isPalindrome(1221));

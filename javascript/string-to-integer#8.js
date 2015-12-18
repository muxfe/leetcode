/**
 * Implement atoi to convert a string to an integer.
 */
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  var MAX = Math.pow(2, 31) - 1, MIN = -Math.pow(2, 31);
  var i = parseInt(str);
  if (isNaN(i)) return 0;
  if (i < MIN) return MIN;
  if (i > MAX) return MAX;
  return i;
};

// test
// Accepted
// 432ms
console.log(myAtoi('12'));
console.log(myAtoi('a2')); // 0
console.log(myAtoi('2a')); // 2
console.log(myAtoi('-02')); // -2
console.log(myAtoi('-123'));
console.log(myAtoi('123456789921239')); // 2147483647

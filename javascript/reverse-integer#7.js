/**
 * Reverse digits of an integer.
 * Example1: x = 123, return 321
 * Example2: x = -123, return -321
 * Trick:
 * 1. 10100 -> 101
 * 2. overflow: 12345678910 -> 0 (up and down)
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var rx = parseInt(Math.abs(x).toString().split('').reverse().join(''));
  rx = rx > Math.pow(2, 31) - 1 || rx < -Math.pow(2, 31) ? 0 : rx;
  return x < 0 && rx ? -rx : rx;
};

// test
// Accepted
// 244ms
console.log(reverse(0)); // 0
console.log(reverse(10100)); // 101
console.log(reverse(-123451235345234)); // 0

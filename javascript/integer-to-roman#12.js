/**
 * Given an integer, convert it to a roman numeral.
 * Input is guaranteed to be within the range from 1 to 3999.
 */
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  var digits = [
    ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
  ];
  var ans = '', digit = 0, pos;
  for (pos = 0; num && pos < 3; pos++) {
    digit = num % 10;
    num = Math.floor(num / 10);
    ans = digits[pos][digit] + ans;
  }
  if (num) {
    for (pos = 0; pos < num; pos++) ans = 'M' + ans;
  }
  return ans;
};

// test
// Accepted
// 352ms
console.log(intToRoman(0));
console.log(intToRoman(1));
console.log(intToRoman(10));
console.log(intToRoman(1304));
console.log(intToRoman(1904));
console.log(intToRoman(3999));
console.log(intToRoman(4000));

/**
 * Given a roman numeral, convert it to an integer.
 * Input is guaranteed to be within the range from 1 to 3999.
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var roman = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
  if (!s) return false;
  if (s.length === 1) return typeof roman[s] === 'undefined' ? false : roman[s];
  var ans = 0, cur = 0, max = 0, pos;
  for (pos = s.length - 1; pos > -1; pos--) {
    cur = roman[s.charAt(pos)];
    if (!cur) return false;
    if (cur < max && (max - cur).toString().length === cur.toString().length) {
      ans -= cur;
    } else if (cur >= max) {
      ans += cur;
      max = cur;
    } else {
      return false;
    }
  }
  return ans;
};

// test
// Accepted
//
console.log(romanToInt('DCXXI'));
console.log(romanToInt('III'));
console.log(romanToInt('VII'));
console.log(romanToInt('CD'));
console.log(romanToInt('MCMIV'));
console.log(romanToInt('IM')); // false
console.log(romanToInt('DDM')); // false but 0
console.log(romanToInt('IVIV')); // false but 8

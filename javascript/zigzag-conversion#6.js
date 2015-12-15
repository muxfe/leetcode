/*
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * And then read line by line: "PAHNAPLSIIGYIR"
 * Write the code that will take a string and make this conversion given a number of rows:
 * string convert(string text, int nRows);
 * convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (s.length <= numRows || numRows === 1) return s;
  var ans = '';
  var slit = 2 * numRows - 2;

  for (var i = 0; i < numRows; i++) {
    var left = slit - 2 * i, right = slit - left;
    var index = i;
    while (index < s.length) {
      ans += s[index];
      if (left && right && index + left < s.length) ans += s[index + left];
      index += left + right;
    }
  }

  return ans;
};

// test
// Accepted
// 276ms
console.log(convert("PAYPALISHIRING", 3) === "PAHNAPLSIIGYIR");
console.log(convert("AB", 1));

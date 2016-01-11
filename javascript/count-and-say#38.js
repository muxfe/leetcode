/**
 * The count-and-say sequence is the sequence of integers beginning as follows:
 * 1, 11, 21, 1211, 111221, ...
 * Difficulty: Easy
 * Tags: String
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (!n || n < 1) return '';
  var ans = '1';
  n--;
  while (n--) {
    var arr = ans.split('')
      , temp = ''
      , count = 1;
    arr.push('.'); // 处理最后一组
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[i - 1]) {
        temp += count + arr[i - 1];
        count = 1;
      } else {
        count++;
      }
    }
    ans = temp;
  }
  return ans;
};

// test
// Accepted
// 156 ms
console.log(countAndSay(1));
console.log(countAndSay(4));
console.log(countAndSay(6));

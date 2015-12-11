/**
 * Two Sum #1
 * Given an array of integers, find two numbers such that they add up to a specific target number.
 * The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.
 * You may assume that each input would have exactly one solution.
 * Input: numbers={2, 7, 11, 15}, target=9
 * Output: index1=1, index2=2
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var map = {};
  var ans = [];
  var num, subtract;
  var i, j;
  for (i = 0; i < nums.length; i++) {
    num = nums[i];
    if (typeof map[num] === 'undefined') {
      map[num] = i + 1;
    } else if (typeof map[num] === 'number') { // handle multi-same-value
      map[num] = [map[num], i + 1]; // just save two numbers
    }
  }
  for (i = 1; i <= nums.length; i++) {
    num = nums[i - 1];
    subtract = target - num;
    if (typeof map[subtract] !== 'undefined') {
      if (Array.isArray(map[subtract])) {
        j = map[subtract][num === subtract ? 1 : 0];
      } else {
        j = map[subtract];
        if (i === j) continue;
      }
      ans[0] = i < j ? i : j;
      ans[1] = i > j ? i : j;
      break;
    }
  }
  return ans; // if no-answer return []
};

// test
// Accepted
console.log(twoSum([0,0,4,0,0], 0)); // [1,2]
console.log(twoSum([0,2,4,0,0], 2)); // [1,2]
console.log(twoSum([2,0,4,0,0], 2)); // [1,2]
console.log(twoSum([1,3,4,3,1], 4)); // [1,2]

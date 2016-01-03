/**
 * Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
 * Difficulty: Medium
 * Tags: Array, Two Pointers
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (!nums || nums.length < 3) return [];
  var ans = []
    , start
    , end;
  nums = nums.sort(function (a, b) { return a - b; });
  for (var i = 0; i < nums.length - 2; i++) {
    var a = nums[i];
    start = i + 1;
    end = nums.length - 1;
    if (!i || nums[i] > nums[i - 1]) { // 去重
      while (start < end) {
        var b = nums[start], c = nums[end];
        if (a + b + c === 0) {
          ans.push([a, b, c]);
          start++;
          end--;
          // 去重
          while (start < end && nums[end] === nums[end + 1]) end--;
          while (start < end && nums[start] === nums[start - 1]) start++;
        } else if (a + b + c > 0) {
          end--;
        } else {
          start++;
        }
      }
    }
  }
  return ans;
};

// test
// Accepted
// 276 ms
console.log(threeSum([-1, 0, 1, 2, -1, -4]));

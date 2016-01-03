/**
 * Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.
 * Difficulty: Medium
 * Tags: Array, Two Pointers
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  if (!nums || nums.length < 3) return 0;
  nums = nums.sort(function (a, b) { return a - b; });
  var ans = ''
    , start
    , end;
  for (var i = 0; i < nums.length - 2; i++) {
    start = i + 1;
    end = nums.length - 1;
    if (!i || nums[i] > nums[i - 1]) {
      while (start < end) {
        var sum = nums[i] + nums[start] + nums[end];
        if (sum === target) {
          return sum;
        } else if (sum < target) {
          start++;
          while (start < end && nums[start] === nums[start - 1]) start++;
        } else {
          end--;
          while (start < end && nums[end] === nums[end + 1]) end--;
        }
        if (typeof ans === 'string' || Math.abs(ans - target) > Math.abs(sum - target)) ans = sum;
      }
    }
  }
  return ans;
};

// test
// Accepted
// 176 ms
console.log(threeSumClosest([0,0,0], 1));
console.log(threeSumClosest([1,2,3], 2));
console.log(threeSumClosest([-1,2,1,-4], 1));
console.log(threeSumClosest([-1,2,1,-4], 2));

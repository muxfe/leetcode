/**
 * Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * Difficulty: Medium
 * Tags: Array, Binary Search
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (!nums || !nums.length) return 0;
  var low = 0
    , high = nums.length - 1;
  while (low <= high) {
    var mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      high = mid - 1;
      if (high < 0 || nums[high] < target) {
        return mid;
      }
    } else {
      low = mid + 1;
      if (low === nums.length || nums[low] > target) {
        return low;
      }
    }
  }
};

// test
// Accepted
// 192 ms
console.log(searchInsert([],0));
console.log(searchInsert([1,3,5,6],5));
console.log(searchInsert([1,3],2));
console.log(searchInsert([1,3,5,6],7));
console.log(searchInsert([1,3,5,6],0));

/**
 * Given a sorted array of integers, find the starting and ending position of a given target value.
 * Difficulty: Medium
 * Tags: Array, Binary Search
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  function binsearch(isHigher) {
    var low = 0
      , high = nums.length - 1;
    isHigher = isHigher || false;
    while (low <= high) {
      var mid = Math.floor((low + high) / 2);
      if (nums[mid] === target) {
        if (isHigher) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      } else if (nums[mid] > target) {
        if (isHigher && nums[mid - 1] === target) {
          return mid - 1;
        } else {
          high = mid - 1;
        }
      } else {
        if (!isHigher && nums[mid + 1] === target) {
          return mid + 1;
        } else {
          low = mid + 1;
        }
      }
    }
    if (isHigher && nums[nums.length - 1] === target) return nums.length - 1;
    if (!isHigher && nums[0] === target) return 0;
    return -1;
  }
  return [binsearch(), binsearch(true)];
};

// test
// Accepted
// 156 ms
console.log(searchRange([1,5,5,8,8,8,19],8));
console.log(searchRange([8,8,8],8));
console.log(searchRange([1,2,4,9,10],8));

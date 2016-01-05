/**
 * Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
 * Difficulty: Easy
 * Tags: Array, Two Pointers
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (!nums || !nums.length) return 0;
  var i = 0
    , j = 0;
  while (i < nums.length) {
    if (nums[i] !== nums[j]) {
      var len = j - i - 1;
      nums.splice(i++, len);
      j -= len;
    } else {
      j++;
    }
  }
  return nums.length;
};

// test
// Accepted
// 260 ms
console.log(removeDuplicates([]));
console.log(removeDuplicates([1,1,2,2,2,3,4,5,5]));

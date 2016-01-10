/**
 * Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
 * Difficulty: Medium
 * Tags: Array
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if (!nums || !nums.length) return;
  var i = nums.length - 1;
  while (i > 0 && nums[i] <= nums[i - 1]) i--;
  if (!i) {
    nums.reverse();
  } else {
    var j = nums.length - 1
      , _i = i;
    while (i < j) {
      swap(i, j);
      i++; j--;
    }
    i = _i;
    while (nums[i] <= nums[_i - 1]) i++;
    swap(_i - 1, i);
  }
  function swap(i, j) { var t = nums[i]; nums[i] = nums[j]; nums[j] = t; }
  console.log(nums);
};


// test
// Accepted
// 212 ms
nextPermutation([]);
nextPermutation([1,3,2]);
nextPermutation([3,2,1]);
nextPermutation([1,1,5]);
nextPermutation([5,1,1]);
nextPermutation([1,3,4,2]); // 1423

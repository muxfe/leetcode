/**
 * Given an array and a value, remove all instances of that value in place and return the new length.
 * The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 * Difficulty: Easy
 * Tags: Array, Two Pointers
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  if (!nums || !nums.length) return 0;
  var i = 0
    , j = 0;
  while (i < nums.length) {
    if (val !== nums[j]) {
      var len = j - i;
      nums.splice(i++, len);
      j -= len - 1;
    } else {
      j++;
    }
  }
  return nums.length;
};

// test
// Accepted
// 200 ms
console.log(removeElement([],0));
console.log(removeElement([0,1,2,3],0));
console.log(removeElement([0,0,1,2,1],0));
console.log(removeElement([4,5],5));
console.log(removeElement([4,5],4));

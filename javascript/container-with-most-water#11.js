/**
 * Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
 * Find two lines, which together with x-axis forms a container, such that the container contains the most water.
 * Difficulty: Medium
 * Tags: Array, Two Pointers
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  if (!height || height.length < 2) return 0;
  var ans = 0
    , i = 0
    , j = height.length - 1;
  while (i < j) {
    var max = Math.min(height[i], height[j]) * (j - i);
    ans = ans < max ? max : ans;
    if (height[i] > height[j]) {
      j--;
    } else {
      i++;
    }
  }
  return ans;
};

// test
// Accepted
// 160 ms
console.log(maxArea([]));
console.log(maxArea([1,1]));
console.log(maxArea([3,4,1,5]));
console.log(maxArea([1,2,1,3,4,1,5]));

/**
 * There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 * Tag: Divide & Conquer, array, binary search
 * Difficulty: Hard
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var n1 = nums1.length - 1 // last index of nums1
    , n2 = nums2.length - 1 // last index of nums2
    , n = n1 + n2 + 2; // total length

  var findKth = function (k, aStart, aEnd, bStart, bEnd) {
    var aLen = aEnd - aStart + 1
      , bLen = bEnd - bStart + 1;
    if (!aLen) return nums2[bStart + k];
    if (!bLen) return nums1[aStart + k];
    if (!k) return nums1[aStart] < nums2[bStart] ? nums1[aStart] : nums2[bStart];
    var aMid = Math.floor(aLen * k / (aLen + bLen)) // a's mid in aStart->aEnd
      , bMid = k - aMid - 1; // b's mid in bStart->bEnd
    aMid += aStart;
    bMid += bStart;
    if (nums1[aMid] > nums2[bMid]) {
      return findKth(k - (bMid - bStart + 1), aStart, aMid, bMid + 1, bEnd); // discard bMid with its lower portion and aMid with its upper portion
    } else {
      return findKth(k - (aMid - aStart + 1), aMid + 1, aEnd, bStart, bMid);
    }
  };

  if (n % 2) { // odd
    return findKth((n - 1) / 2, 0, n1, 0, n2);
  } else { // even
    return (findKth(n / 2, 0, n1, 0, n2) + findKth(n / 2 - 1, 0, n1, 0, n2)) / 2;
  }
};

// test
// Accepted
// 292ms
console.log(findMedianSortedArrays([1], []));
console.log(findMedianSortedArrays([1,2,3,4], [5,6,7,8]));
console.log(findMedianSortedArrays([1,3,5], [2,4]));
console.log(findMedianSortedArrays([1,2], [1,1]));
console.log(findMedianSortedArrays([1,2], [1,2]));

/**
 * about aMid and bMid
 * aMid + bMid = k - 1
 * Useful link: http://articles.leetcode.com/2011/01/find-k-th-smallest-element-in-union-of.html
 */

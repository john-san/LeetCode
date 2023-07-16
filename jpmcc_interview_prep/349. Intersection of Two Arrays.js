/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  // convert nums1 to a set
  const set1 = new Set(nums1);
  const res = [];

  // iterate over nums2
  nums2.forEach((num) => {
    // if num is in set1, push it to res and delete it from set1
    if (set1.has(num)) {
      res.push(num);
      set1.delete(num); // this is to avoid duplicates in res
    }
  });

  return res;
};

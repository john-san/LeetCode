/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let min = 1;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    // add the current number to the sum
    sum = sum + nums[i];
    // update the min to whichever is smaller
    min = Math.min(min, sum);
  }

  // edge case for when array is all positive
  if (min == 1) {
    return min;
  }

  // return the negative of the min plus 1.
  // this is the minimum value to get positive step by step sum
  return -1 * min + 1;
};

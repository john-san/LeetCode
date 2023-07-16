/**
 * @param {number[]} nums
 * @return {number}
 */
// Kadane's Algorithm.
// TC: O(n), SC: O(1)
var maxSubArray = function (nums) {
  let max = -Infinity; // max sum
  let current = 0; // current sum
  for (let i = 0; i < nums.length; i++) {
    current += nums[i];
    // update max sum if current sum is greater than max sum
    if (current > max) {
      max = current;
    }

    // reset current sum if current sum is negative since it will only decrease the sum
    if (current < 0) {
      current = 0;
    }
  }

  return max;
};

// test
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
console.log(maxSubArray([-1])); // -1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map(); // Create a hashmap to store the elements and their indices

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // Calculate the complement needed to reach the target
    if (map.has(complement)) {
      // If the complement exists in the hashmap, it means we found a pair whose sum is equal to the target
      // Return the indices of the two elements forming the sum
      return [map.get(complement), i];
    } else {
      // If the complement does not exist in the hashmap, add the current element and its index to the hashmap
      map.set(nums[i], i);
    }
  }
  // If no pair is found, return an empty array
  return [];
};

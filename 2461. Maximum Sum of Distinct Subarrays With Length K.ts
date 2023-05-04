function maximumSubarraySum(nums: number[], k: number): number {
	// edge case
	if (nums.length === 0 || k <= 0) {
		return 0
	}

	let result = 0
	let max = 0

	let temp = []

	// do 1 loop to find the max
	for (let i = 0; i < nums.length; i++) {
		// if i < k, add to result
		if (i < k) {
			result += nums[i]
			max = result
		} else {
			// sliding window
			// if i >= k, add to result and minus nums[i - k]
			result += nums[i] - nums[i - k]
			max = Math.max(max, result)
		}
	}

	return max
}

// test
console.log(maximumSubarraySum([1, 2, 3, 4, 5], 3)) // 12
console.log(maximumSubarraySum([1, 2, 3, 4, 5], 2)) // 9

function maximumSubarraySum(nums: number[], k: number): number {
	const subArr: number[] = nums.slice(0, k)
	const subArrSet = new Set(subArr)
	let currentSum = Array.from(subArrSet).reduce((a, b) => a + b, 0)
	let result = subArrSet.size > 1 ? currentSum : 0

	for (let i = k; i < nums.length; i++) {
		const firstItem = nums[i - k]
		const lastItem = nums[i]
		if (subArrSet.has(firstItem)) {
			subArrSet.delete(firstItem)
			currentSum -= firstItem
		}
		if (subArrSet.has(lastItem) == false) {
			subArrSet.add(lastItem)
			currentSum += lastItem
		}

		if (subArrSet.size === k) {
			result = Math.max(result, currentSum)
		}
	}

	return result
}

// test
console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3)) // 15
console.log(maximumSubarraySum([4, 4, 4], 3)) // 0
console.log(maximumSubarraySum([1, 1, 1, 7, 8, 9], 3)) // 24
// FAILED
console.log(maximumSubarraySum([9, 9, 9, 1, 2, 3], 3)) // 12

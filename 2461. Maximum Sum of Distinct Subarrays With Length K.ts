function maximumSubarraySum(nums: number[], k: number): number {
	const subArr: number[] = nums.slice(0, k)
	const subArrSet = new Set(subArr)
	let currentSum =
		subArrSet.size > 1
			? Array.from(subArrSet).reduce((a, b) => a + b, 0)
			: subArr[k - 1]
	let result = currentSum

	for (let i = k; i < nums.length; i++) {
		const firstItem = nums[i - k]
		const lastItem = nums[i]
		if (subArrSet.has(firstItem) && subArrSet.size === k) {
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
	return result == subArr[k - 1] ? 0 : result
}

// test
console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3)) // 15
console.log(maximumSubarraySum([4, 4, 4], 3)) // 0
console.log(maximumSubarraySum([1, 1, 1, 7, 8, 9], 3)) // 24
console.log(maximumSubarraySum([9, 9, 9, 1, 2, 3], 3)) // 12
// failed
console.log(maximumSubarraySum([1, 1, 1, 1, 1, 1], 3)) // 1

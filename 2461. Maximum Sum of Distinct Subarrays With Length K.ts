function maximumSubarraySum(nums: number[], k: number): number {
	const subArr = nums.slice(0, k)
	const subArrMap = new Map<number, number>()

	function addToMap(n: number, map: Map<number, number>) {
		const currentCount = map.get(n)
		currentCount ? map.set(n, currentCount + 1) : map.set(n, 1)
	}
	function decrementFromMap(n: number, map: Map<number, number>) {
		const currentCount = map.get(n)
		if (currentCount === 1) {
			map.delete(n)
		} else if (currentCount) {
			map.set(n, currentCount - 1)
		}
	}

	let currentSum = subArr.reduce((a, b) => a + b, 0)
	for (const n of subArr) {
		addToMap(n, subArrMap)
	}

	let result = currentSum
	for (let i = k; i < nums.length; i++) {
		if (subArrMap.size === k) {
			result = Math.max(result, currentSum)
		}
		const firstItem = nums[i - k]
		currentSum -= firstItem
		currentSum += nums[i]
		if (subArrMap.has(firstItem)) {
			decrementFromMap(firstItem, subArrMap)
		}
		addToMap(nums[i], subArrMap)
	}

	if (subArrMap.size === k) {
		result = Math.max(result, currentSum)
	}

	return result
}

// test
console.log(maximumSubarraySum([1, 2, 3, 4, 5], 3)) // 12
console.log(maximumSubarraySum([1, 2, 3, 4, 5], 2)) // 9

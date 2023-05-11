// TC: O(n), SC: O(n)
function sortedSquares(nums: number[]): number[] {
	// two pointers
	let left = 0
	let right = nums.length - 1
	let result = new Array(nums.length)
	// loop from right to left. this can also be done w/ a while loop but we would need a 3rd pointer var
	for (let i = nums.length - 1; i >= 0; i--) {
		// compare the absolute value of left and right
		let leftAbsVal = nums[left] < 0 ? nums[left] * -1 : nums[left]
		let rightAbsVal = nums[right] < 0 ? nums[right] * -1 : nums[right]

		if (leftAbsVal > rightAbsVal) {
			result[i] = leftAbsVal ** 2
			left++
		} else {
			result[i] = rightAbsVal ** 2
			right--
		}
	}

	return result
}

// test
console.log(sortedSquares([-4, -1, 0, 3, 10]))
console.log(sortedSquares([-7, -3, 2, 3, 11]))

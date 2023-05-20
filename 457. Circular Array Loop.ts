function circularArrayLoop(nums: number[]): boolean {
	// fast and slow pointers problem

	// helper function to get the next index
	const getNextIndex = (
		nums: number[],
		curr: number,
		direction: number
	): number => {
		let next = (curr + nums[curr]) % nums.length
		if (next < 0) {
			next += nums.length
		}
		if (next === curr || nums[next] * direction < 0) {
			return -1
		}
		return next
	}

	let n = nums.length
	if (n <= 1) {
		return false
	}

	for (let i = 0; i < n; i++) {
		let slow = i
		let fast = i
		let direction = nums[i] > 0 ? 1 : -1

		while (true) {
			slow = getNextIndex(nums, slow, direction)
			fast = getNextIndex(nums, fast, direction)
			if (fast !== -1) {
				fast = getNextIndex(nums, fast, direction)
			}

			if (slow === -1 || fast === -1) {
				break
			}

			if (slow === fast) {
				return true
			}
		}
	}
	return false
}

// test
console.log(circularArrayLoop([2, -1, 1, 2, 2])) // true
console.log(circularArrayLoop([-1, -2, -3, -4, -5, 6])) // false
console.log(circularArrayLoop([1, -1, 5, 1, 4])) // true

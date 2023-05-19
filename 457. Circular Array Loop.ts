function circularArrayLoop(nums: number[]): boolean {
	// fast and slow pointers problem

	// helper function to get the next index
	const getNextIndex = (nums: number[], curr: number): number => {
		const n = nums.length
		// curr + nums[curr] calculates sum of current index and value at current index
		// first % n ensures that the value is within the bounds of the array
		// + n ensures that the value is positive because nums[curr] could be negative, which could make the sum negative
		// second % n ensures that the value is within the bounds of the array
		return (((curr + nums[curr]) % n) + n) % n
	}

	for (let i = 0; i < nums.length; i++) {
		// initialize slow and fast pointers
		let slow = i
		let fast = i

		// if the direction of the loop changes, we can break out of the loop
		let isForward = nums[i] >= 0

		// move slow and fast pointers
		while (true) {
			slow = getNextIndex(nums, slow)
			fast = getNextIndex(nums, fast)
			fast = getNextIndex(nums, fast)

			// if the direction of the loop changes, we can break out of the loop
			if (nums[slow] >= 0 !== isForward) {
				break
			}

			// if slow and fast are equal, there is a cycle
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

// TC: O(n^2), SC: O(n)
function threeSum(nums: number[]): number[][] {
	const length = nums.length
	// sort in ascending order. JS's array sort method is a mutating function
	nums.sort((a, b) => a - b)
	const result: number[][] = []

	// loop through the array until i is the 3rd last element. the remaining 2 elements will be left and right pointers
	for (let i = 0; i < length - 2; i++) {
		// skip duplicates
		if (i > 0 && nums[i] === nums[i - 1]) {
			continue
		}

		let left = i + 1
		let right = length - 1

		// shift left+right pointers until left and right pointers meet
		while (left < right) {
			const total = nums[i] + nums[left] + nums[right]

			// if the total is 0, push the 3 numbers into the result array
			if (total === 0) {
				result.push([nums[i], nums[left], nums[right]])
				left++
				right--

				// skip duplicates
				while (left < right && nums[left] === nums[left - 1]) {
					left++
				}
				while (left < right && nums[right] === nums[right + 1]) {
					right--
				}
				// if the total is less than 0, shift the left pointer to the right. if the total is more than 0, shift the right pointer to the left
			} else if (total < 0) {
				left++
			} else {
				right--
			}
		}
	}

	return result
}

// test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4])) // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1])) // []
console.log(threeSum([0, 0, 0])) // [[0, 0, 0]]

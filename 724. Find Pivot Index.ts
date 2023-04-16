// TC: O(n), SC: O(1)
function pivotIndex(nums: number[]): number {
	const totalSum = nums.reduce((a, b) => a + b);
	let leftSum = 0;

	for (let i = 0; i < nums.length; i++) {
		// if leftSum == rightSum, return pivot index
		if (leftSum === totalSum - leftSum - nums[i]) {
			return i;
		}
		leftSum += nums[i];
	}
	// no pivot index found
	return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
console.log(pivotIndex([1, 2, 3])); // -1
console.log(pivotIndex([2, 1, -1])); // 0

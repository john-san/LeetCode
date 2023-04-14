// TC: O(n), SC: O(1)
function jump(nums: number[]): number {
	let result = 0;
	let leftPointer = 0;
	let rightPointer = 0;
	while (rightPointer < nums.length - 1) {
		let farthest = 0;
		for (let i = leftPointer; i <= rightPointer; i++) {
			farthest = Math.max(farthest, i + nums[i]);
		}
		leftPointer = rightPointer + 1;
		rightPointer = farthest;
		result++;
	}
	return result;
}

console.log(jump([2, 3, 1, 1, 4])); // 2
console.log(jump([2, 3, 0, 1, 4])); // 2

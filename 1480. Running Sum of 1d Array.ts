// TC: O(n), SC: O(n)
// @ts-ignore
function runningSum(nums: number[]): number[] {
	return nums.map((n, i) => nums.slice(0, i + 1).reduce((a, b) => a + b));
}

console.log(runningSum([1, 2, 3, 4])); // [1, 3, 6, 10]
console.log(runningSum([1, 1, 1, 1, 1])); // [1, 2, 3, 4, 5]
console.log(runningSum([3, 1, 2, 10, 1])); // [3, 4, 6, 16, 17]

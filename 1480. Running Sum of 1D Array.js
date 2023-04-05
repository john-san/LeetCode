/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
	// let addUpTo = (nums, currentIdx) => {
	// 	let total = 0;
	// 	for (let i = 0; i <= currentIdx; i++) {
	// 		total += nums[i];
	// 	}
	// 	return total;
	// };

	// return nums.map((num, idx) => addUpTo(nums, idx));

	return nums.map((num, idx, arr) => {
		// if (idx === 0) {
		// 	return num;
		// } else {
		// 	return (arr[idx] = num + arr[idx - 1]);
		// }
		return (arr[idx] = num + (nums[idx - 1] || 0));
	});
};

console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));
console.log(runningSum([3, 1, 2, 10, 1]));

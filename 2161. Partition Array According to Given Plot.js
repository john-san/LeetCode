/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
	if (nums.length <= 1) {
		return nums;
	}
	let grtArr = [];
	let lessArr = [];
	let pivots = [];
	nums.forEach((num) => {
		if (num > pivot) {
			grtArr.push(num);
		} else if (num < pivot) {
			lessArr.push(num);
		} else {
			pivots.push(num);
		}
	});
	//return [].concat(lessArr, pivots, grtArr);
	return lessArr.concat(pivots, grtArr);
};

console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10));
console.log(pivotArray([-3, 4, 3, 2], 2));

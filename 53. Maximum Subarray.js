function maxSubArray(nums) {
    // keep var to track max
    var max = -Infinity;
    var current = -Infinity;
    // loop through array
    for (var i = 0; i < nums.length; i++) {
        // secondary loop to iterate for reduce 
        for (var j = i + 1; j <= nums.length; j++) {
            // reduce from beginning to 
            current = nums.slice(i, j).reduce(function (a, b) { return a + b; }, 0);
            // set max
            max = Math.max(max, current);
        }
    }
    // return max
    return max;
}
;
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
// console.log(maxSubArray([1])); // 1
// console.log(maxSubArray([0])); // 0
// console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
console.log(maxSubArray([-2, -1])); // -1 

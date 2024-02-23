function maxSubArray(nums: number[]): number {
    // keep var to track max
    let max = -Infinity
    let current = -Infinity
    // loop through array
    for (let i = 0; i < nums.length; i++) {

        // secondary loop to iterate for reduce 
        for (let j = i + 1; j <= nums.length; j++) {
            // reduce from beginning to 
            current = nums.slice(i,j).reduce((a,b) => a + b, 0)
            // set max
            max = Math.max(max, current)
        }
    }

    
    // return max
    return max
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // 6
console.log(maxSubArray([1])) // 1
console.log(maxSubArray([0])) // 0
console.log(maxSubArray([5,4,-1,7,8])) // 23
console.log(maxSubArray([-2, -1])) // -1 
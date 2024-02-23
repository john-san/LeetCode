function productExceptSelf(nums: number[]): number[] {
    let length = nums.length;
    let left = new Array(length).fill(1);
    let right = new Array(length).fill(1);
    let output = new Array(length);

    // Calculate left
    for (let i = 1; i < length; i++) {
        left[i] = nums[i - 1] * left[i - 1];
    }

    // Calculate right
    for (let i = length - 2; i >= 0; i--) {
        right[i] = nums[i + 1] * right[i + 1];
    }

    // Calculate the product of elements except self
    for (let i = 0; i < length; i++) {
        output[i] = left[i] * right[i];
    }

    console.log(output)
    return output;
};
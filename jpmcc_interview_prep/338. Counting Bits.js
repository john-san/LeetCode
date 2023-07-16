/**
 * @param {number} n
 * @return {number[]}
 */
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  let res = [0];
  for (let i = 1; i <= num; i++) {
    // >> is a bitwise operator that shifts the bits of the number to the right by the specified number of bits. For example, 5 >> 1 would be 2. 5 is 101 in binary, and 2 is 10.
    // 5 >> 1 = 101 >> 1 = 10 = 2
    const half = i >> 1;
    // & is a bitwise operator that compares each bit of the first operand to the corresponding bit of the second operand. If both bits are 1, the corresponding bit in the result is set to 1. Otherwise, the corresponding result bit is set to 0. For example, 5 & 1 would be 1. 5 is 101 in binary, and 1 is 1.
    // 5 & 1 = 101 & 001 = 001 = 1
    const odd = i & 1;

    res[i] = res[half] + odd;
  }
  return res;
};

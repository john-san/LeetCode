// TC: O(m*n), SC: O(m+n)
// m = length of num1, n = length of num2
function multiply(num1: string, num2: string): string {
	// edge case
	if (num1 === '0' || num2 === '0') return '0'
	const length1 = num1.length
	const length2 = num2.length
	// create an array of length1 + length2 to store the result. extra 0s will be removed later
	const result = Array(length1 + length2).fill(0)
	// iterate through num1 from right to left
	for (let i = length1 - 1; i >= 0; i--) {
		// iterate through num2 from right to left. Similar to true multiplication, we multiply the current digit in num1 with each digit in num2
		for (let j = length2 - 1; j >= 0; j--) {
			// calculate product of current digits
			const product = Number(num1[i]) * Number(num2[j])
			// calculate sum of previous carryover and current product
			const sum = result[i + j + 1] + product

			// store the remainder in current digit. think of `1's place`
			result[i + j + 1] = sum % 10

			// add carryover to "previous" digit. think of `10's place`
			result[i + j] += Math.floor(sum / 10)
		}
	}

	// remove extra 0s
	while (result[0] === 0) {
		result.shift()
	}

	return result.join('')
}

// test
console.log(multiply('2', '3')) // "6"
console.log(multiply('123', '456')) // "56088"
console.log(multiply('0', '0')) // "0"
console.log(multiply('123456789', '987654321')) // "121932631112635269"
console.log(multiply('498828660196', '840477629533')) // "419254329864656431168468"

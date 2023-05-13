// TC: O(n), SC: O(1)
function minPartitions(n: string): number {
	// loop through the digits from 9 to 0
	for (let i = 9; i >= 0; i--) {
		// if the current digit is found, return the digit
		if (n.includes(i.toString())) {
			return i
		}
	}

	return 0
}

// one liner solution but may be slower due to array map and spread operator
/*
function minPartitions(n: string): number {
  // map string to digits and return max
  return Math.max(...n.split('').map(Number))
}
*/
// test cases
console.log(minPartitions('32')) // 3
console.log(minPartitions('82734')) // 8
console.log(minPartitions('27346209830709182346')) // 9

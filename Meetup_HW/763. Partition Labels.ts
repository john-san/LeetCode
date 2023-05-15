// SC: O(n), TC: O(n)
function partitionLabels(s: string): number[] {
	// create a map of the last index of each character
	const map = new Map()

	for (let i = 0; i < s.length; i++) {
		map.set(s[i], i)
	}

	const result: number[] = []

	// create a variable to keep track of the last index of the current partition
	let last = 0
	// create a variable to keep track of the start of the current partition
	let start = 0
	// iterate through the string
	for (let i = 0; i < s.length; i++) {
		// update the last index of the current partition
		last = Math.max(last, map.get(s[i]))
		// when i reaches the last index of the current partition, we have found the end of the current partition.
		if (i === last) {
			// push the length of the current partition to the result array
			result.push(last - start + 1)
			// update the start to be the start index of the next partition
			start = last + 1
		}
	}

	return result
}

// test
console.log(partitionLabels('ababcbacadefegdehijhklij')) // [9,7,8]
console.log(partitionLabels('eccbbbbdec')) // [10]

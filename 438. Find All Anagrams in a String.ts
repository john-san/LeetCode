function findAnagrams(s: string, p: string): number[] {
	// get first unicode char code
	const aChode = 'a'.charCodeAt(0)

	// create 2 arrays of 26 elements
	const sArray = Array(26).fill(0)
	const pArray = Array(26).fill(0)

	// fill pArray with char codes
	for (let i = 0; i < p.length; i++) {
		pArray[p.charCodeAt(i) - aChode]++
	}

	let result: number[] = []

	// iterate over s
	for (let i = 0; i < s.length; i++) {
		// when is longer than p.length, remove first char from sArray while re-adding it to pArray
		if (i >= p.length) {
		}
	}
	return result
}

// test
console.log(findAnagrams('cbaebabacd', 'abc')) // [0, 6]
console.log(findAnagrams('abab', 'ab')) // [0, 1, 2]

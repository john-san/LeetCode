// TC: O(n), SC: O(1 + n) = O(n)
function findAnagrams(s: string, p: string): number[] {
	// helper to check if 2 arrays are equal
	function areArraysEqual<T>(a: T[], b: T[]): boolean {
		if (a.length !== b.length) return false
		for (let i = 0; i < a.length; i++) {
			if (a[i] !== b[i]) return false
		}
		return true
	}

	// get first unicode char code
	const aCode = 'a'.charCodeAt(0)

	// create 2 arrays of 26 elements
	const sArray = Array(26).fill(0)
	const pArray = Array(26).fill(0)

	// fill pArray with char codes
	for (let i = 0; i < p.length; i++) {
		pArray[p.charCodeAt(i) - aCode]++
	}

	let result: number[] = []

	// iterate over s
	for (let i = 0; i < s.length; i++) {
		// when i > window length, slide window
		if (i >= p.length) {
			sArray[s.charCodeAt(i - p.length) - aCode]--
			sArray[s.charCodeAt(i) - aCode]++
			if (areArraysEqual(sArray, pArray)) {
				// i - p.length + 1 is the index of the new window's first char
				result.push(i - p.length + 1)
			}
		} else if (i === p.length - 1) {
			// when i meets window length for the first time, add the char to sArray and check if it's an anagram
			sArray[s.charCodeAt(i) - aCode]++
			if (areArraysEqual(sArray, pArray)) {
				result.push(0)
			}
		} else {
			// otherwise just add the char to sArray
			sArray[s.charCodeAt(i) - aCode]++
		}
	}
	return result
}

// test
console.log(findAnagrams('cbaebabacd', 'abc')) // [0, 6]
console.log(findAnagrams('abab', 'ab')) // [0, 1, 2]

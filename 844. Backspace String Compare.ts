// TC: O(n + m), SC: O(n)
function backspaceCompare(s: string, t: string): boolean {
	// stack
	const stackS: string[] = []
	// loop through s
	for (let i = 0; i < s.length; i++) {
		// add to stack if not #
		if (s[i] !== '#') {
			stackS.push(s[i])
		} else {
			// pop if #
			stackS.pop()
		}
	}

	const stackT: string[] = []
	// loop through t
	for (let i = 0; i < t.length; i++) {
		// add to stack if not #
		if (t[i] !== '#') {
			stackT.push(t[i])
		} else {
			// pop if #
			stackT.pop()
		}
	}

	// join stacks and compare
	return stackS.join('') === stackT.join('')
}

// TC: O(n + m), SC: O(1)
function twoPointersBackspaceCompare(s: string, t: string): boolean {
	// helper function to get next valid index. accepts string and current index
	// returns next valid index
	function getNextValidIndex(str: string, idx: number): number {
		let backspaceCount = 0

		// loop backwards by decrementing idx. will typically break out of loop and provide valid index.
		while (idx >= 0) {
			// if #, increment backspaceCount
			if (str[idx] === '#') {
				backspaceCount++
				// if backspaceCount > 0, continue
			} else if (backspaceCount > 0) {
				backspaceCount--
				// if backspaceCount === 0, break and return valid idx
			} else {
				break
			}
			idx--
		}
		return idx
	}

	let idxS = s.length - 1
	let idxT = t.length - 1

	while (idxS >= 0 || idxT >= 0) {
		idxS = getNextValidIndex(s, idxS)
		idxT = getNextValidIndex(t, idxT)

		// if both are valid
		if (idxS >= 0 && idxT >= 0) {
			// if values are not equal, return false
			if (s[idxS] !== t[idxT]) {
				return false
			}
		} else {
			// if one idx is valid but the other is not, return false.
			if (idxS >= 0 || idxT >= 0) {
				return false
			}
		}

		idxS--
		idxT--
	}

	return true
}

// tests
console.log(backspaceCompare('ab#c', 'ad#c')) // true
console.log(backspaceCompare('ab##', 'c#d#')) // true
console.log(backspaceCompare('a#c', 'b')) // false

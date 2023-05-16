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

function twoPointersBackspaceCompare(s: string, t: string): boolean {
	function getNextValidIndex(str: string, idx: number) {
		let backspaceCount = 0
		while (idx >= 0) {
			if (str[idx] === '#') {
				backspaceCount++
			} else if (backspaceCount > 0) {
				backspaceCount--
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
			if (s[idxS] !== t[idxT]) {
				return false
			}
		} else {
			// if one is valid and the other is not
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

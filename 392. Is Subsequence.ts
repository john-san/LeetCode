// TC: O(n), SC: O(1)
function isSubsequence(s: string, t: string): boolean {
	// edge case
	if (s.length > t.length) return false;

	// loop through s
	for (let i = 0; i < s.length; i++) {
		// find the index of the first letter in t
		let index = t.indexOf(s[i]);
		// if it's not there, return false
		if (index === -1) return false;
		// if it is there, slice the string from that index
		t = t.slice(index + 1);
	}

	return true;
}

console.log(isSubsequence('abc', 'ahbgdc')); // true
console.log(isSubsequence('axc', 'ahbgdc')); // false

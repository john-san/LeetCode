// TC: O(n^2), SC: O(n)
// slow solution
// function isIsomorphic(s: string, t: string): boolean {
// 	if (s.length !== t.length) return false;

// 	// 1. Create a map for each string
// 	const mapS = new Map();
// 	// 2. iterate through string to create map
// 	for (let i = 0; i < s.length; i++) {
// 		// 3. if map does not contain key, add it
// 		if (!mapS.has(s[i])) {
// 			mapS.set(s[i], t[i]);
// 		}
// 		// 4. if map does contain key, check if value matches
// 		else {
// 			if (mapS.get(s[i]) !== t[i]) {
// 				return false;
// 			}
// 		}

// 		// check for dupe values
// 		let arr = Array.from(mapS.values()).filter((val) => val === t[i]);
// 		if (arr.length > 1) return false;
// 	}

// 	return true;
// }

// Key idea is to ignore the char-matching but instead focus on the index-matching
// TC: O(n), SC: O(n)
function isIsomorphic(s: string, t: string): boolean {
	if (s.length !== t.length) return false;

	const hash1: { [key: string]: number } = {};
	const hash2: { [key: string]: number } = {};

	for (let i = 0; i < s.length; i++) {
		if (hash1[s[i]] != hash2[t[i]]) return false;
		hash1[s[i]] = i;
		hash2[t[i]] = i;
	}

	return true;
}

console.log(isIsomorphic('egg', 'add')); // true
console.log(isIsomorphic('foo', 'bar')); // false
console.log(isIsomorphic('paper', 'title')); // true
console.log(isIsomorphic('badc', 'baba')); // false

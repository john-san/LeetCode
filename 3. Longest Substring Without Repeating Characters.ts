// TC: O(n), SC: O(n).
// Runtime: 92ms, Memory: 47.7MB. Beats 63.17%, 66.92%.
// function lengthOfLongestSubstring(s: string): number {
// 	const set = new Set<string>()
// 	let result = 0
// 	let left = 0
// 	let right = 0
// 	while (right < s.length) {
// 		const currentChar = s[right]
// 		if (set.has(currentChar)) {
// 			set.delete(s[left])
// 			left++
// 		} else {
// 			set.add(currentChar)
// 			right++
// 			result = Math.max(result, set.size)
// 		}
// 	}

// 	return result
// }

// TC: O(n), SC: O(1).
// Runtime: 72 ms, Memory: 45.7MB. Beats 97.44%, 87.53%
function lengthOfLongestSubstring(s: string): number {
	const arr = Array(128).fill(0)
	let result = 0,
		left = 0,
		right = 0
	while (right < s.length) {
		const currentChar = s.charCodeAt(right)
		if (arr[currentChar] > 0) {
			arr[s.charCodeAt(left)]--
			left++
		} else {
			arr[currentChar]++
			right++
			result = Math.max(result, right - left)
		}
	}
	return result
}

// test
console.log(lengthOfLongestSubstring('abcabcbb')) // 3
console.log(lengthOfLongestSubstring('bbbbb')) // 1
console.log(lengthOfLongestSubstring('pwwkew')) // 3

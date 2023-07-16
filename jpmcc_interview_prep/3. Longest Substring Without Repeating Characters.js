/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0; // If the input string is empty, the result is 0

  let maxLength = 0; // Initialize the maximum length of non-repeating substring to 0
  let charIndexMap = new Map(); // Hashmap to store the last index of each character

  let left = 0; // Left pointer of the sliding window
  let right = 0; // Right pointer of the sliding window

  while (right < s.length) {
    const currentChar = s[right]; // Get the character at the right pointer

    // Check if the current character exists in the charIndexMap
    // and if its last index is greater than or equal to the left pointer
    // This means the character is repeating in the current window
    if (
      charIndexMap.has(currentChar) &&
      charIndexMap.get(currentChar) >= left
    ) {
      // Move the left pointer to the right of the previous occurrence of the character (plus one)
      // This helps in skipping the repeating characters and maintaining a non-repeating substring
      left = charIndexMap.get(currentChar) + 1;
    }

    // Update the charIndexMap with the current character's index
    charIndexMap.set(currentChar, right);

    // Calculate the current substring's length using (right - left + 1)
    // Update the maxLength to keep track of the longest non-repeating substring seen so far
    maxLength = Math.max(maxLength, right - left + 1);

    // Move the right pointer to expand the window
    right++;
  }

  // Return the maxLength, which represents the length of the longest non-repeating substring
  return maxLength;
};

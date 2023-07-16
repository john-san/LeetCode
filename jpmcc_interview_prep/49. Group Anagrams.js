/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// TC: O(m * n), SC: O(n)
var groupAnagrams = function (strs) {
  let result = new Map();
  strs.forEach((str) => {
    let sortedStr = str.split("").sort().join("");
    // if it exists, concat to existing array
    if (result.has(sortedStr)) {
      result.set(sortedStr, [...result.get(sortedStr), str]);
    } else {
      // if it doesn't exist, create a new array
      result.set(sortedStr, [str]);
    }
  });

  return [...result.values()]; // return the values of the map
};

// test
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["a"])); // [["a"]]

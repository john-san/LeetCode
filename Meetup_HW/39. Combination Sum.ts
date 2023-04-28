// TC: O(number of candidates^max depth), SC: O(target value / min value in candidates array)
function combinationSum(candidates: number[], target: number): number[][] {
	const result: number[][] = []

	// dfs function
	function dfs(i: number, current: number[], total: number) {
		// if total is equal to target, we found a valid combination
		if (total == target) {
			// push a deep copy of current to result since it will be modified in other dfs calls
			result.push([...current])
			return
		}

		// if total is greater than target or we have reached the end of candidates array, return
		if (i >= candidates.length || total > target) {
			return
		}

		// Decisions: 1) we can either choose the current number or 2) not choose it
		current.push(candidates[i])
		dfs(i, current, total + candidates[i])

		current.pop()
		dfs(i + 1, current, total)
	}
	dfs(0, [], 0)

	return result
}

// test
console.log(combinationSum([2, 3, 6, 7], 7)) // [[2,2,3],[7]]
console.log(combinationSum([2, 3, 5], 8)) // [[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum([2], 1)) // []

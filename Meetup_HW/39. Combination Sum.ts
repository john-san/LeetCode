// TC: O(number of candidates^max depth), SC: O(target value / min value in candidates array)
// beats 54.50% in terms of runtime, 46.2% in terms of memory
/*
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
*/

// beats 71.9% in terms of runtime, 44.55% in terms of memory
function combinationSum(candidates: number[], target: number): number[][] {
	const result: number[][] = []

	/*
	helper dfs
	@param path current dfs path of numbers
	@param sum current sum of numbers
	@param last last index drawn
	*/
	function dfs(path: number[], sum: number, last: number) {
		// if sum is equal to target, we found a valid combo
		if (sum == target) {
			result.push(path)
			return
		}

		// if sum is greater than target, return to prevent further dfs calls
		if (sum > target) return

		// iterate through candidates array, starting at last index drawn
		for (let i = last; i < candidates.length; i++) {
			// if sum + current candidate is less than target, we can add it to path
			if (sum + candidates[i] <= target) {
				// push a deep copy of path since it will be modified in other dfs calls
				dfs([...path, candidates[i]], sum + candidates[i], i)
			}
		}
	}

	// sort candidates array in ascending order because we want to draw candidates in ascending order
	candidates.sort((a, b) => a - b)

	dfs([], 0, 0)

	return result
}

// test
console.log(combinationSum([2, 3, 6, 7], 7)) // [[2,2,3],[7]]
console.log(combinationSum([2, 3, 5], 8)) // [[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum([2], 1)) // []

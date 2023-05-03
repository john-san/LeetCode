// TC: O(n), SC: O(1)
function canCompleteCircuit(gas: number[], cost: number[]): number {
	// edge cases
	if (
		gas.length === 0 ||
		cost.length === 0 ||
		gas.length !== cost.length ||
		gas.reduce((a, b) => a + b) < cost.reduce((a, b) => a + b)
	) {
		return -1
	}

	let tank = 0
	let result = 0

	// do 1 loop to find the start point
	for (let i = 0; i < gas.length; i++) {
		// for each station, add gas and minus cost
		tank += gas[i] - cost[i]

		// if tank < 0, reset tank and start point
		if (tank < 0) {
			tank = 0
			result = i + 1
		}
	}
	return result
}

// test
console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])) // 3
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3])) // -1

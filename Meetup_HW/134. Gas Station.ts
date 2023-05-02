// TC: O(n), SC: O(1)
function canCompleteCircuit(gas: number[], cost: number[]): number {
	//  try every station as a starting point
	for (let i = 0; i < gas.length; i++) {
		//  if we can't even reach the next station, skip this station
		if (gas[i] < cost[i]) continue

		//  otherwise, try to complete the circuit
		let tank = gas[i] - cost[i]
		//  if we can't reach the next station, stop
		let j = i + 1
		while (tank >= 0 && j % gas.length !== i) {
			tank += gas[j % gas.length] - cost[j % gas.length]
			j++
		}
		//  if we can reach the next station, return the starting point
		if (tank >= 0) return i
	}

	//  if we can't reach the next station from any starting point, return -1
	return -1
}

// test
console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])) // 3
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3])) // -1

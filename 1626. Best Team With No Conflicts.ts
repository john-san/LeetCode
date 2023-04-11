function bestTeamScore(scores: number[], ages: number[]): number {
	// place 2 arrays in 2d array
	let pairs: [number, number][] = scores.map((score, idx) => [
		score,
		ages[idx],
	]);
	// sort pairs in ascending order of scores, then ascending order of ages
	pairs = pairs.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
	// create arr to hold max scores
	let maxScores: number[] = pairs.map((pair) => pair[0]);

	//oLoop: loop through all pairs
	for (let i = 0; i < pairs.length; i++) {
		let [cScore, cAge] = pairs[i];

		// iLoop: loop up to, but not including current pair
		for (let j = 0; j < i; j++) {
			let [score, age] = pairs[j];

			// if cAge is greater or equal, update current iteration in maxScores
			if (cAge >= age) {
				maxScores[i] = Math.max(maxScores[i], cScore + maxScores[j]);
			}
		}
	}

	return Math.max(...maxScores);
	// TC: O(n^2), SC: O(n)
}

// console.log(bestTeamScore([1, 3, 5, 10, 15], [1, 2, 3, 4, 5]));
// console.log(bestTeamScore([4, 5, 6, 5], [2, 1, 2, 1]));
// console.log(bestTeamScore([1, 2, 3, 5], [8, 9, 10, 1]));
console.log(
	bestTeamScore(
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[811, 364, 124, 873, 790, 656, 581, 446, 885, 134]
	)
);

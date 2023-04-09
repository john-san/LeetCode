function bestTeamScore(scores: number[], ages: number[]): number {
	let teamScore = 0;
	let shouldAddScore = true;

	// iterate through scores
	for (let i = 0; i < scores.length; i++) {
		// set flag to true
		shouldAddScore = true;
		// 2nd iteration to compare current to all
		for (let j = 0; j < scores.length; j++) {
			// skip to next if same item
			if (j == i) continue;

			// if age is less and score is higher than compared, set flag to false
			if (ages[i] < ages[j] && scores[i] > scores[j]) {
				shouldAddScore = false;
				break;
			}
		}

		// if flag is true, add score
		if (shouldAddScore) teamScore += scores[i];
	}

	return teamScore;
}

// console.log(bestTeamScore([1, 3, 5, 10, 15], [1, 2, 3, 4, 5]));
console.log(bestTeamScore([4, 5, 6, 5], [2, 1, 2, 1]));
// console.log(bestTeamScore([1, 2, 3, 5], [8, 9, 10, 1]));

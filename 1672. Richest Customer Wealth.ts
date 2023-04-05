function maximumWealth(accounts: number[][]): number {
	// map array to reduced numbers
	const reduced = accounts.map((account) => account.reduce((a, b) => a + b));

	// return max
	return Math.max(...reduced);
}

console.log(
	maximumWealth([
		[1, 2, 3],
		[3, 2, 1],
	])
);
console.log(
	maximumWealth([
		[1, 5],
		[7, 3],
		[3, 5],
	])
);
console.log(
	maximumWealth([
		[2, 8, 7],
		[7, 1, 3],
		[1, 9, 5],
	])
);

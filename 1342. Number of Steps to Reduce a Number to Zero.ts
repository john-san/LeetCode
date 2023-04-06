function numberOfSteps(num: number): number {
	let steps = 0;

	while (num > 0) {
		num % 2 == 0 ? (num /= 2) : num--;
		steps++;
	}

	return steps;
}

console.log(numberOfSteps(14));
console.log(numberOfSteps(8));
console.log(numberOfSteps(123));

function fizzBuzz(n: number): string[] {
	// function convert(num: number): string {
	// 	let conversion = num.toString();
	// 	if (num % 3 == 0 && num % 5 == 0) {
	// 		conversion = 'FizzBuzz';
	// 	} else if (num % 3 == 0) {
	// 		conversion = 'Fizz';
	// 	} else if (num % 5 == 0) {
	// 		conversion = 'Buzz';
	// 	}
	// 	return conversion;
	// }

	// let result: string[] = [];

	// for (let i = 0; i < n; i++) {
	// 	result[i] = convert(i + 1);
	// }
	let result: string[] = [];

	for (let i = 1; i <= n; i++) {
		result.push(
			i % 15 == 0
				? 'FizzBuzz'
				: i % 5 == 0
				? 'Buzz'
				: i % 3 == 0
				? 'Fizz'
				: i.toString()
		);
	}

	return result;
}

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));

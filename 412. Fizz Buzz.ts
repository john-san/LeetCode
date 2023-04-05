function fizzBuzz(n: number): string[] {
	function convert(num: number): string {
		let conversion = num.toString();
		if (num % 3 == 0 && num % 5 == 0) {
			conversion = 'FizzBuzz';
		} else if (num % 3 == 0) {
			conversion = 'Fizz';
		} else if (num % 5 == 0) {
			conversion = 'Buzz';
		}
		return conversion;
	}

	let result: string[] = [];

	for (let i = 0; i < n; i++) {
		result[i] = convert(i + 1);
	}

	return result;
}

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));

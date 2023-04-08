function canConstruct(ransomNote: string, magazine: string): boolean {
	// create dictionary
	const dict = new Map<string, number>();
	// add counts to dictionary from magazine
	for (let i = 0; i < magazine.length; i++) {
		let currentLetter = magazine[i];
		if (dict.has(currentLetter)) {
			dict.set(currentLetter, dict.get(currentLetter)! + 1);
		} else {
			dict.set(currentLetter, 1);
		}
	}

	// remove counts from dictionary using randomNote
	for (let i = 0; i < ransomNote.length; i++) {
		let currentLetter = ransomNote[i];

		if (dict.has(currentLetter) && dict.get(currentLetter)! > 0) {
			dict.set(currentLetter, dict.get(currentLetter)! - 1);
		} else {
			return false;
		}
	}
	// return condition
	return true;
}

console.log(canConstruct('a', 'b'));
console.log(canConstruct('aa', 'ab'));
console.log(canConstruct('aa', 'aab'));

/**
 * @param {string} s
 * @return {string}
 */
// TC: O(n), SC: O(N)
var originalDigits = function (s) {
  const arr = new Array(10).fill(0);
  for (const char of s) {
    // evens have unique letters
    if (char === "z") arr[0]++; // zero
    if (char === "w") arr[2]++; // two
    if (char === "u") arr[4]++; // four
    if (char === "x") arr[6]++; // six
    if (char === "g") arr[8]++; // eight
    // odds do not have unique letters. must be deduct
    if (char === "o") arr[1]++; // one after zero, two, four
    if (char === "h") arr[3]++; // three after eight
    if (char === "f") arr[5]++; // five after four
    if (char === "s") arr[7]++; // seven after six
    if (char === "i") arr[9]++; // nine after five, six, eight
  }

  // deduct odds to ensure uniqueness
  arr[1] -= arr[0] + arr[2] + arr[4]; // one after zero, two, four
  arr[3] -= arr[8]; // three after eight
  arr[5] -= arr[4]; // five after four
  arr[7] -= arr[6]; // seven after six
  arr[9] -= arr[5] + arr[6] + arr[8]; // nine after five, six, eight

  let res = "";
  // outer loop: 0 to 9
  for (let i = 0; i <= 9; i++) {
    // inner loop: repeat the character
    for (let j = 0; j < arr[i]; j++) {
      res += i;
    }
  }

  return res;
};

// test
console.log(originalDigits("owoztneoer")); // 012
console.log(originalDigits("fviefuro")); // 45
console.log(originalDigits("zeroonetwothreefourfivesixseveneightnine")); // 0123456789

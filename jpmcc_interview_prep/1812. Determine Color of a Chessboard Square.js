/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  // The function takes an input string 'coordinates', which represents a chessboard square in algebraic notation.

  // We calculate the sum of the ASCII code values of the first character (file) and the second character (rank) in the 'coordinates' string.
  // This is done by using the 'charCodeAt()' method to get the ASCII code value of each character and adding them together.
  const sumOfAsciiCodes = coordinates.charCodeAt(0) + coordinates.charCodeAt(1);

  // We then perform the modulo operation (%) on the sum to determine whether the square is black or white.
  // If the sum of ASCII codes is even, the result will be 0 (false), indicating a white square.
  // If the sum of ASCII codes is odd, the result will be 1 (true), indicating a black square.
  return sumOfAsciiCodes % 2;
};

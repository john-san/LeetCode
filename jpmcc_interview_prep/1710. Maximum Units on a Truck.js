/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (B, T) {
  // sort the boxTypes by the number of units per box
  B.sort((a, b) => b[1] - a[1]);

  let ans = 0;

  // loop through the boxTypes
  for (let i = 0; T && i < B.length; i++) {
    // get the minimum between the number of boxes and the truck size
    let count = Math.min(B[i][0], T);
    // add the number of units to the ans
    ans += count * B[i][1];
    // subtract the number of boxes from the truck size
    T -= count;
  }

  return ans;
};

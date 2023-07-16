/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  // Sort the array
  arr.sort((a, b) => a - b);
  // init minDiff and res
  let minDiff = Infinity;
  let res = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let currentDiff = Math.abs(arr[i] - arr[i + 1]);

    // if currentDiff is smaller than minDiff, update minDiff and res
    if (currentDiff < minDiff) {
      minDiff = currentDiff;
      res = [[arr[i], arr[i + 1]]];
      // if currentDiff is equal to minDiff, push the pair to res
    } else if (currentDiff === minDiff) {
      res.push([arr[i], arr[i + 1]]);
    }
  }
  return res;
};

// test
console.log(minimumAbsDifference([4, 2, 1, 3])); // [[1,2],[2,3],[3,4]]
console.log(minimumAbsDifference([1, 3, 6, 10, 15])); // [[1,3]]
console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27])); // [[-14,-10],[19,23],[23,27]]

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // two pointers
  let left = 0;
  let right = 1;
  let maxProfit = 0;
  // loop through the prices array
  while (right < prices.length) {
    // if the left pointer is smaller than the right pointer
    if (prices[left] < prices[right]) {
      // calculate the current profit
      let currentProfit = prices[right] - prices[left];
      // update the max profit to whichever is bigger
      maxProfit = Math.max(maxProfit, currentProfit);
    } else {
      // move left point to the right pointer since the right pointer is smaller
      left = right;
    }
    right++; // move right pointer
  }

  return maxProfit;
};

// test
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log(maxProfit([2, 4, 1])); // 2

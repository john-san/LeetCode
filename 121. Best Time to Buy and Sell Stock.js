/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let l = 0;
    let r = 1;
    let maxProfit = 0;

    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            // buy low, sell high. left == buy, right == sell
            let curProfit = prices[r] - prices[l];
            maxProfit = Math.max(maxProfit, curProfit);
        } else { // update l pointer to next cheapest price
            l = r;
        }
        r++;
    }

    return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4])); // 5
console.log(maxProfit([7,6,4,3,1])); // 0

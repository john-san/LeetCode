/**
 * @param costs: n x 3 cost matrix
 * @return: An integer, the minimum cost to paint all houses
 */
function minCost(costs) {
  let dp = [0, 0, 0]; // Initialize an array to store the minimum total cost of painting each house with each color (Red, Blue, Green)

  for (let i = 0; i < costs.length; i++) {
    // Loop through the costs array, where each row represents the costs of painting the i-th house with each color

    let dp0 = costs[i][0] + Math.min(dp[1], dp[2]); // Calculate the cost of painting the current house with Red (color 0)
    let dp1 = costs[i][1] + Math.min(dp[0], dp[2]); // Calculate the cost of painting the current house with Blue (color 1)
    let dp2 = costs[i][2] + Math.min(dp[0], dp[1]); // Calculate the cost of painting the current house with Green (color 2)

    dp = [dp0, dp1, dp2]; // Update the dp array with the minimum total cost for each color after painting the current house
  }

  return Math.min(...dp); // Return the minimum value among the elements in the dp array, representing the overall minimum cost to paint all the houses
}

// test
console.log(
  minCost([
    [14, 2, 11],
    [11, 14, 5],
    [14, 3, 10],
  ])
); // 10
console.log(
  minCost([
    [5, 8, 6],
    [19, 14, 13],
    [7, 5, 12],
    [14, 15, 17],
    [3, 20, 10],
  ])
); // 43
console.log(
  minCost([
    [1, 2, 3],
    [1, 4, 6],
  ])
); // 3

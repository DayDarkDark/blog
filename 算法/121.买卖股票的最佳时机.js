// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
var maxProfit = function(prices) {
  let min = prices[0]
  let max = 0
  for (let i = 1; i < prices.length; i++) {
    max = Math.max(max, prices[i] - min)
    min = Math.min(min, prices[i])
  }
  return max
};
// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
// 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
var maxProfit = function(prices) {
  let result = 0
  for (let i = 1; i < prices.length; i++) {
    let temp = Math.max(0, prices[i] - prices[i - 1])
    result +=temp
  }
  return result
};

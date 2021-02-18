function fib(n) {
	if (n == 2 || n ==1) return 1
	let pre = 1
	let cur = 1
	for (let i = 3; i <= n; i++) {
		let sum = pre + cur
		pre = cur 
		cur = sum
	}
	return cur
}

// 最小花费
var minCostClimbingStairs = function(cost) {
  
  let pre = 0
  let cur = 0

  let sum = 0
  for (let i =2; i <=cost.length;i++) {
    sum = Math.min(pre + cost[i - 2], cur + cost[i - 1])
    pre = cur
    cur = sum
  }
  return cur
}

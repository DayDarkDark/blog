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

//
// 是否存在一条路径和为sum
// 递归版本
var hasPathSum = function (root, sum) {
	if (root == null) return false
	if (root.left == null && root.right == null) return root.val - sum == 0
	return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
}
// 非递归版本
var hasPath = function (root, sum) {
	if (root == null) return false
	const stack = []
	let cur = root
	let pre = null
	while(cur || stack.length) {
		while(cur) {
			sum -= cur.val
			stack.push(cur)
			cur = cur.left
		}
		cur = stack[stack.length - 1] 
		if (!sum && !cur.left && !cur.right) {
			return true
		}
		if (cur.right && cur.right != pre) {
			cur = cur.right
		} else {
			stack.pop()
			pre = cur 
			sum += cur.val
			cur = null
		}
	}
	return false
}



// var hasPathSum = function(root, sum) {
//     const stack = [];
//     let cur = root;
//     let pre = null;
//     while (cur || stack.length) {
//         while (cur) {
//             sum -= cur.val;
//             stack.push(cur);
//             cur = cur.left
//         }
        
//         cur = stack[stack.length - 1];
//         if (!sum && !cur.left && !cur.right) {
//             return true;
//         }
//         if (cur.right && cur.right != pre) {
//             cur = cur.right;
//         }
//         else {
//             stack.pop();
//             pre = cur;
//             sum += cur.val;
//             cur = null;
//         }
//     }
//     return false;
// };
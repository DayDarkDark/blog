var hasPathSum = function(root, sum) {
  if (root == null) return false
  if (root.left == null && root.right == null) {
    return sum - root.val == 0
  }
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
} 

var pathSum = function(root, sum) {
  if (!root) return []
  const res = []

  function help(root, path, treeSum) {
    if (!root) return
    path.push(root.val)
    treeSum += root.val
    if (!root.left && !root.right) {
      if (treeSum === sum) {
        res.push([...path])
      } 
    } else {
      help(root.left, path, treeSum)
      help(root.right, path, treeSum)
    }
    path.pop()
  }
  help(root, [], 0)
  return res
};


var hasPathSumStack = function(root, sum) {
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
};


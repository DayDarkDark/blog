var isSymmetric = function(root) {
  if (!root) return true
  return help(root.left, root.right)

  function help (left, right) {
    if (!left && !right) return true
    if (left && !right) return false
    if (!left && right) return false
    if (left.val !== right.val) {
      return false
    } else {
      return help(left.left, right.right) && help(left.right, right.left)
    }
  }

};

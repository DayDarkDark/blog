// DFS 深度优先遍历 栈 父节点入栈，父节点出栈，先右子节点入栈，后左子节点入栈，递归遍历
// BFS 广度优先遍历 队列 父节点入队，父节点出队，先左子节点入队，后右节点入队。递归遍历

function bfs(root) {
  const queue = []
  queue.push(root)
  while(!queue.length) {
    queue.unshift()
    queue.push(queue.left)
    queue.push(queue.right)
  }
}



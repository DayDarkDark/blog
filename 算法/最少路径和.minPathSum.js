// 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
// grid = [[1,3,1],[1,5,1],[4,2,1]]

// 1. dp方程 grid[i][j] += Math.min(grid[i - 1][j], grid[i][j-1])


var minPathSum = function(grid) {
  let row = grid.length
  let col = grid[0].length

  for (let i = 1; i < row; i++) {
    grid[i][0] += grid[i - 1][0]
  }

  for (let j = 1; j < col; j++) {
    grid[0][j] += grid[0][j-1]
  }
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])
    }
  }
  return grid[row - 1][col - 1]
};
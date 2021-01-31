// 全排列
// 给定一个 没有重复 数字的数列，返回其所有可能的全排列

var permute = function (nums) {
  const result = []
  backtrack(result, [])
  function backtrack(list, temp) {
    if (temp.length === nums.length) {
      list.push(temp.slice())
      return
    }
    for(let i =0; i < nums.length; i++) {
      if (temp.includes(nums[i])) continue
      temp.push(nums[i])
      backtrack(list, temp, nums)
      temp.pop()
    }
  }
  return result
}
console.log(permute([1,2,3]))
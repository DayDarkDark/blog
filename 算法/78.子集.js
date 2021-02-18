// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
var subsets = function(nums) {
  const result = []
  result.push([])
  for(let i = 0; i< nums.length; i++) {
    result.forEach(e => {
      result.push([...e, nums[i]])
    })
  }
  return result
};
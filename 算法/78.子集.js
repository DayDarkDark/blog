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
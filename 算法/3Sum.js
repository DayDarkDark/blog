/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const ans = []
  if (nums == null || nums.length < 3) return ans
  // 排序
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i ++) {
    // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
    if (nums[0] > 0) break;
    if (i > 0 && nums[i] == nums[i - 1]) continue
    let L = i + 1
    let R = nums.length - 1
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R]
      if (sum == 0) {
        ans.push([ nums[i], nums[L], nums[R] ])
        while (L<R && nums[L] == nums[L+1]) L++
        while (L<R && nums[R] == nums[R-1]) R--
        L++
        R--

      }
      else if (sum < 0) L++
      else if (sum > 0) R--
    }
  }
  return ans
};
// 时间复杂 O(n2)
// 空间复杂度 O(1)
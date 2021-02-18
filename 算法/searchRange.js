var searchRange = function(nums, target) {
  const length = nums.length
  if (length == 0) return [-1, -1]
  let index = -1
  let left = 0
  let right = length - 1
  while(left <= right) {
    let mid = Math.floor(left + (right - left ) / 2)
    if (nums[mid] == target) {
      index = mid
      break
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  if (index == -1) {
    return [-1, -1]
  }

  for (let i = index + 1; i < length; i ++) {
    if (nums[i] != nums[index]) {
      right = i - 1
      break
    }
  }
  for (let i = index - 1; i >= 0; i--) {
    if (nums[i] != nums[index]) {
      left = i + 1
      break
    }
  }
  return [left, right]
};

function searchRange(nums, target) {
  const length = nums.length
  if (length == 0) return [-1, -1]
  let index = -1
  let left = 0
  let right = length - 1
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2)
    if (nums[mid] == target) {
      index = mid
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
}                   
// 第k大的数
// 时间复杂度：平均时间复杂度O(n)，最坏情况时间复杂度为O(n<sup>2</sup>)
// 空间复杂度：O(1)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  return nums[bfprt(nums, 0, nums.length - 1, nums.length - k)]
};

function bfprt (arr, left, right, k) {
  let index
  if (left < right) {
    index = partition(arr, left, right)
    if (k === index) {
      return index 
    } else if (k < index) {
      return bfprt(arr, left, index - 1, k)
    } else {
      return bfprt(arr, index + 1, right, k)
    }
  }
  return left
}
function partition (arr, left, right) {

  let datum = arr[Math.floor(Math.random() * (right - left + 1)) + left]
  let i = left 
  let j = right
  while(i < j) {
    while(arr[i] < datum) {
      i++
    }
    while(arr[j] > datum) {
      j--
    }
    if (i < j) {
      swap(arr, i, j)
    }
    if (arr[i] === arr[j] && i !== j) {
      i++
    }
  }
  return i
}
function swap (arr, i, j) {
  let temp = arr[j]
  arr[j] = arr[i]
  arr[i] = temp
}
// 快速排序
// 平均时间复杂度：平均时间复杂度O(nlgn)，最坏情况时间复杂度为O(n^2)

function sort (arr) {
  function quickSort (left, right) {
    let sentry
    if (left < right) {
      sentry = partition(left, right)
      quickSort(left, sentry - 1)
      quickSort(sentry + 1, right)
    }
  }
  function partition (left, right) {
    let pivot = arr[left]
    while (left < right) {
      while(left < right && arr[right] >= pivot) right--
      arr[left] = arr[right]
      while(left < right && arr[left] <= pivot) left++
      arr[right] = arr[left]
    }
    arr[left] = pivot
    return left
  }

  quickSort(0,arr.length - 1)
  return arr
}
// 翻转单项链表
let reverse = function (head) {
  if (!head || !head.next) return head
  let pre = null
  let current = head
  let next
  while (current) {
    next = current
    current.next = pre
    pre = current
    current = next
  }
  return pre
}
// 非递归遍历树 -> 先序遍历 -> 根左右
function pre(root) {
  if (root) {
    const stack = []
    stack.push(root)
    while (stack.length > 0) {
      root = stack.pop()
      // 因为先序遍历是先左后右，栈是先进后出结构
      // 所以先 push 右边再 push 左边
      if (root.right) {
        stack.push(root.right)
      }
      if (root.left) {
        stack.push(root.left)
      }
    }
  }
}
// 非递归遍历树 -> 中序遍历 -> 左根右
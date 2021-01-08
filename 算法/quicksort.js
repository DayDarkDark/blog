// 快速排序
// 平均时间复杂度：平均时间复杂度O(nlgn)，最坏情况时间复杂度为O(n^2)

function sort (arr) {
  function quickSort (left, right) {
    // let sentry
    if (left < right) {
      const sentry = partition(left, right)
      console.log(sentry)
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

console.log(sort([8,1,9,10,2,4,2,1,5])) 
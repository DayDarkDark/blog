// const data = { name: 'day' }

// function observe(obj) {
//   // 判断类型
//   if (!obj || typeof obj !== 'object') {
//     return
//   }
//   Object.keys(obj).forEach(keys => {
//     defineReactive(obj, key, val)
//   })

// }

// function defineReactive(obj, key, val) {
//   Object.defineProperty(obj, key, {
//     enumerable: true,
//     configurable: true,
//     get: function reactiveGetter () {
//       console.log('get value')
//       return val
//     },
//     set: function reactiveSetter(newVal) {
//       val = new Val
//     }
//   })
// }


// class Dep {
//   constructor() {
//     this.subs = []
//   }

//   addSub(sub) {
//     this.subs.push(sub)
//   }
//   notify() {
//     this.subs.forEach(sub => {
//       sub.update()
//     })
//   }
// }


const quickSort = (nums, k = 0) => {
  return nums[bfprt(nums, 0, nums.length - 1, nums.length - k)]
}

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
let arr = [1, 3, 2, 5, 4]
console.info(quickSort(arr, 3))



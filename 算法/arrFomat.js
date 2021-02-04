// 给你一个数组[2,1,2,4,3]，你返回数组 [4,2,4,−1,−1]
const test = [2, 1, 2, 4, 3]
console.log(arrFormat(test))

function arrFormat(arr) {
  let map = new Map
  let res= []
  let len = arr.length
  let stack = []
  for (let i = 0; i < len; i++) {
    while(stack.length && arr[i] > stack[stack.length - 1]) {
      map.set(stack.pop(), arr[i])
    }
    stack.push(arr[i])
  }
  while(stack.length) {
    map.set(stack.pop(), -1)
  }
  arr.forEach(item => {
    res.push(map.get(item))
  })
  return res
}
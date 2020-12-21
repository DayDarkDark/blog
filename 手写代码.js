// 手写Promise
const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'REJECTED'

function Promise () {
  const that = this
  that.state = PENDING
  that.value = null
  that.resolvedCallbacks = []
  that.rejectedCallbacks = []
}
function resolve(value) {
  if (that.state === PENDING) {
    that.state = RESOLVED
    that.value = value
    that.resolvedCallbacks.map(cb => cb(that.value))
  }
}
function reject(value) {
  if (that.state === PENDING) {
    that.state = REJECTED
    that.value = value
    that.rejectedCallbacks.map(cb => cb(that.value))
  }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  const that = this
  if (this.state === PENDING) {
    that.resolvedCallbacks.push(onFulfilled)
    that.rejectedCallbacks.push(onRejected)
  }
  if (that.state === RESOLVED) {
    onFulfilled(that.value)
  }
  if (that.state === REJECTED) {
    onRejected(that.value)
  }
}

function sort(array) {
  checkArray(array);
  quickSort(array, 0, array.length - 1);
  return array;
}

function quickSort(array, left, right) {
  if (left < right) {
    swap(array, 0, right)
    // 随机取值，然后和末尾交换，这样做比固定取一个位置的复杂度略低
    let indexs = part(array, parseInt(Math.random() * (right - left + 1)) + left, right);
    quickSort(array, left, indexs[0]);
    quickSort(array, indexs[1] + 1, right);
  }
}
function part(array, left, right) {
  let less = left - 1;
  let more = right;
  while (left < more) {
    if (array[left] < array[right]) {
      // 当前值比基准值小，`less` 和 `left` 都加一
	   ++less;
       ++left;
    } else if (array[left] > array[right]) {
      // 当前值比基准值大，将当前值和右边的值交换
      // 并且不改变 `left`，因为当前换过来的值还没有判断过大小
      swap(array, --more, left);
    } else {
      // 和基准值相同，只移动下标
      left++;
    }
  }
  // 将基准值和比基准值大的第一个值交换位置
  // 这样数组就变成 `[比基准值小, 基准值, 比基准值大]`
  swap(array, right, more);
  return [less, more];
}

// 
function deepClone(originobj, map = new WeakMap()) {
  // 空或者非对象则返回本身
  if (!originobj || typeof originobj !== 'object') return originobj
  //  如果这个对象已经被记录则直接返回
  if (map.get(originobj)) {
    return map.get(originobj)
  }
  let result = Array.isArray(originobj) ? [] : {}
  map.set(originobj, result)
  let keys = Object.keys(originobj)
  console.log(keys)
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i]
    let temp = originobj[key]
    result[key] = deepClone(temp, map)
  }
  return result
}


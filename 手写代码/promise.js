const PENDING = "Pending"
const FULFILLED = "fulfilled"
const REJECTED = "rejected"

function MyPromise(executor) {
  const self = this
  self.value = null
  self.error = null
  self.status = PENDING
  // 成功的回调函数
  self.onFulfilledCallback = []
  // 失败的回调函数
  self.onRejectedCallback = []

  const resolve = value => {
    if (self.status != PENDING) return
    setTimeout(() => {
      self.status = FULFILLED
      self.value = value
      //self.onFulfilled(self.value)
      self.onFulfilledCallback.forEach(callback => callback(self.value))
    })
  }

  const reject = error => {
    if (self.status != PENDING) return
    setTimeout(() => {
      self.status = REJECTED
      self.value = error
      self.onRejectedCallback.forEach(callback => callback(self.value))
      // self.onRejected(self.error)
    })
  }

  
  executor(resolve, reject)
}
// 针对 resolve中不同值进行处理
function resolvePromise(bridgePromise, x, resolve, reject) {
  // 如果x是一个promise
  if (x instanceof MyPromise) {
    // 拆解整个promise，直到返回值不为promise为止
    if (x.status === PENDING) {
      x.then(y => {
        resolvePromise(bridgePromise, y, resolve, reject)
      }, err => {
        reject(err)
      })
    } else {
      x.then(resolve, reject)
    } 
  } else {
    resolve(x)
  }
}

MyPromise.prototype.then = function (onFulFilled, onRejected) {
  // 如果使用then的时候两个参数不传，增加默认的funtion
  onFulFilled = typeof onFulFilled === 'function' ? onFulFilled : value => value
  onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err }

  let bridgePromise
  let self = this

  if (this.status === PENDING) {

    return bridgePromise = new MyPromise((resolve, reject) => {
      self.onFulfilledCallback.push(value => {
        try {
          let result = onFulFilled(value)
          resolvePromise(bridgePromise, x, resolve, reject)
        } catch(e) {
          reject(e)
        }
      })
      self.onRejectedCallback.push(error => {
        try {
          let result = onRejected(value)
          resolvePromise(bridgePromise, x, resolve, reject)
        } catch (e) {
          reject(e)
        }
      })
    })
    // 之前只是简单的push 处理函数 需要获取处理完的回调再传递下去
    // this.onFulfilledCallback.push(onFulFilled)
    // this.onRejectedCallback.push(onRejected)
  } else if (this.status === FULFILLED) {
    onFulFilled(this.value)
    return bridgePromise = new MyPromise((resolve, reject) => {

    })
  } else {
    onRejected(this.error)
  }
  return this
}
// 错误捕获及冒泡机制分析
MyPromise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected)
}
// 难点在于错误冒泡机制

Promise.resolve = param => {
  if (param instanceof Promise) return param
  return new Promise((resolve, reject) => {
    if (param && param.then && typeof param.then === 'function') {
      param.then(resolve, reject)
    } else {
      resolve(param)
    }
  })
}

Promise.reject = function (reason) {
  return new Promise((resolve, reject) => {
    reject(reason)
  })
}

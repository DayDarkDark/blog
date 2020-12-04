const data = { name: 'day' }

function observe(obj) {
  // 判断类型
  if (!obj || typeof obj !== 'object') {
    return
  }
  Object.keys(obj).forEach(keys => {
    defineReactive(obj, key, val)
  })

}

function defineReactive(obj, key, val) {
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      console.log('get value')
      return val
    },
    set: function reactiveSetter(newVal) {
      val = new Val
    }
  })
}


class Dep {
  constructor() {
    this.subs = []
  }

  addSub(sub) {
    this.subs.push(sub)
  }
}
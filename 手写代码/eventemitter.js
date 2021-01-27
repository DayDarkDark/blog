class EventEmitter {
  constructor () {
    this.cache = {}
  }
  on(name, fn) {
    if (this.cache[name]) {
      this.cache[name].add(fn)
    } else {
      this.cache[name] = [fn]
    }
  }

  off(name, fn) {
    const tasks = this.cache[name]
    if(tasks) {
      const index = tasks.findIndex(f => f === fn || f.callback === fn)
      if (index >= 0) {
        tasks.splice(index, 1)
      }
    }
  }
  emit(name, once = false) {
    if (this.cache[name]) {
      // 创建副本防止回调函数内继续注册时间，会造成死循环
      const tasks = this.cache[name].slice()
      for (let fn of tasks) {
        fn()
      }
      if (once) {
        delete this.cache[name]
      }
    }
  }
}
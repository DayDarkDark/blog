1. 快排
2. 第k大的数
3. vue3
4. 进程间通信（ipc）
  - 主从式
  - 会话式 
  - 消息邮箱机制
  - 管道
  - 共享内存
  - unix domain socket
  linux提供的ipc pipe unixsocket sharememory
  mojo 封装了底层ipc细节并提供了线程安全
```js
function max(url, maxnum) {
  const len = urls.length
  const result = new Array(len).fill(false)
  let count = 0
  return new Promise((resolve, reject) => {
    while(count < maxnum) {
      help()
    }
    function help() {
      let current = count++
      if (current >= len) {
        !result.includes(false) && resolve(result)
        return
      }
      fetch(url)
        .then(res => {
          result[current] = res
          if (current< len) {
            next()
          }
        })
        .catch(err => {
          result[current] = err 
          if (current< len) {
            next()
          }
        })
    }
  })
}
```
5. new
```js
  function myNew(func, ...args) {
    const instance = {}
    Object.setPrototypeOf(instance, Func.prototype)
    const res = Func.apply(instance, args)
    return res
  }
```

1. 实现Promise.retry()
```javascript
Promise.retry = function(fn, times = 3) {
  return new Promise(async (resolvem reject) => {
    while (times --) {
      let ret = await promiseFn()
      resolve(ret)
      break
    } catch (err) {
      if (!times) reject(err)
    }
  })
}
```
```javascript
  Promise.allSettled (promises) {
    if (promise.length === 0) return Promise.resolve([])
    const _promises = promises.map(
      item => item instanceof Promise ? item : Promise.resolve(item)
    )
    return new Promise(( resolve, reject ) => {
      const result = []
      let unsettledPromiseCount = _promises.length
      _promises.forEach((promise, index) => {
        promise.then(())
      })
    })

  }
```\\

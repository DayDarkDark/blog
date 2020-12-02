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
``
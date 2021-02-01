Promise.retry = function (fn, times) {
  return new Promise((resolve, reject) => {
    try {
      while(times --) {
        let res = await fn()
        resolve(res)
        break
      }
    } catch (err) {
      if (!times) reject(err)
    }
  })
}
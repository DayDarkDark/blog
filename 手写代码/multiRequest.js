function multiRequest(urls = [], maxNum) {
  const len = urls.length
  const result = new Array(len).fill(false)
  // 当前完成的数量
  let count = 0

  return new Promise((resolve, reject) => {
    while(count < maxNum) {
      next()
    }
    function next () {
      let current = count++
      if (current >= len) {
        !result.includes(false) && resolve(result)
        return
      }
      const url = urls[current]
      fetch(url)
        .then(res => {
          result[current] = res
          if (current < len) {
            next()
          }
        })
        .catch(err => {
          result[current] = err
          if (current < len) {
            next()
          }
        })
    }
  })

}
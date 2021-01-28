function allsettled(promises) {
  const len = promises.length
  const result = Array(len).fill(false)
  return new Promise((resolve, reject) => {
    for(let i = 0; i < promises.length; i ++) {
      promises[i]
      .then(data => {
        result[i] = {
          status: 'fulfilled',
          data
        }
      })
      .catch(err => {
        result[i] = {
          status: 'rejected',
          err
        }
      })
      .finally(() => {
        if (!result.includes(false)) {
          resolve(result)
        }
      })
    }
  })
}
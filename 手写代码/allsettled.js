function allsettled(promises) {
  if (promises.length === 0) return Promise.resolve([])
  const _promise = promises.map(
    item => item instanceof Promise ? item : Promise.resolve(item)
  )
  const len = _promises.length
  const result = Array(len).fill(false)
  return new Promise((resolve, reject) => {
    for(let i = 0; i < _promises.length; i ++) {
      _promises[i]
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
Array.prototype._map = function (fn, arg) {
  const result = []
  this.reduce((prev, curr, index ,array) => {
    result[index] = fn.call(arg, curr)
  }, [])
  return result
}
console.log([1,2,3]._map(item => {
  return item * item
}))
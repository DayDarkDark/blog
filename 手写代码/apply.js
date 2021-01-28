Function.prototype.apply = function (conetext = window) {
  const key = Symbol('key')
  context[key] = this
  let res 
  if (arguments[1]) {
    res = context[key](...arguments[1])
  } else {
    res = context[key]()
  }
  delete context[key]
  return res
}

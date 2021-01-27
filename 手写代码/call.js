Function.prototype.call = function (context = window) {
  const key = Symbol('key')
  context[key] = this
  const args = [...arguments].slice(1)
  const res = context[key](...args)
  delete context[key]
  return res
}
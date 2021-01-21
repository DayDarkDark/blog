Function.prototype.call = function (context, ...args) {
  context = context || window
  context.fn = this
  const result = context.fn(args[1])
  delete context.fn
  return result
}
Function.prototype.bind = function (context = window) {
  const fn = this
  const args = Array.from(arguments).slice(1)
  const newFunc = function () {
    const newArgs = args.concat(...arguments)
    if (this instanceof newFunc) {
      fn.apply(this, newArgs)
    } else {
      fn.apply(context, newArgs)
    }
  }

  // 支持 new 调用方式
  newFunc.prototype = Object.create(fn.prototype)
  return newFunc
} 


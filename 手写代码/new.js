function myNew (Func, ...args) {
  // 创建空对象
  const instance = {}
  // _proto指向protyotype
  if (Func.prototype) {
    Object.setPrototypeOf(instance, Func.prototype)
  }
  // 执行构造函数
  const res = Func.apply(instance, args)
  if (typeof res === 'function' || (typeof res === 'object && res !== null')) {
    return res 
  } 
  return instance
}

function throttle(limit) {
  let flag = true
  return (target, name, descrioptor) => {
    // target class 对象
    // name 修饰的方法名
    let func = descrioptor.value
    descrioptor.value = async(...args) => {
      if (!flag) return
      flag = false
      func.apply(this, ...args)
      if (!limit) return flag = true
      setTimeout(() => {
        flag = true
      }, limit)
    }
  }
}

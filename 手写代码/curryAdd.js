function add (...arg) {
  const bucket = [...arg]
  function real (...arg) {
    bucket.push(...arg)
    return real
  }
  real.sumof = () => {
    return bucket.reduce((a, b) => a + b)
  }
  return real
}
console.log(add(1,3,2)(2)(1).sumof())
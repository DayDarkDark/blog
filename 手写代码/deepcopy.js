function deepClone (ori, map = new WeakMap()) {
  // 空或者非对象则返回本身
  if (!ori || typeof ori !== 'object') return ori
  if (map.get(ori)) {
    return map.get(ori)
  }
  let result = Array.isArray(ori) ? [] : {}
  map.set(ori, result)
  let keys = Object.keys(ori)
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const temp = ori[key]
    result[key] = deepClone(temp, map)
  }
  return result
}
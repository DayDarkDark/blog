const person = {
  name: 'wxy',
  age: 18
}

const proxy = new Proxy(person, {
  get: function (target, propKey, receiver) {
    console.log('get proxy', propKey)
    return target[propKey]
  }, 
  set: function(target, propKey, value, receiver) {
    console.log('set proxy', propKey)
    return target[propKey] = value
  }
})


Object.defineProperty(proxy, 'name', {
  get (value) {
    console.log('objdefineProperty get', proxy.name)
    return value
  },
  set (newVal) {
    console.log('objdefineProperty set', newVal)
    return value = newVal
  }
})
proxy.name = 'db'
// console.log(proxy.name)
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
console.log(proxy.name)


let Dep = null 
function defineReatctive(obj, key, val) {
  let dep = []
  Object.defineProperty(obj, key, {
    get: function () {
      if (Dep) {
        deps.push(Dep)
      }
      return val
    },
    set: function (newVal) {
      val = newVal
      deps.forEach(func => func())
    }
  })
}
// ES5寄生组合式继承
function Parent(name) {
  this.name = name
}
Parent.prototype.getName = function () {
  console.log(this.name)
}

function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}

Child.prototype = Object.create(Parent.prototype)



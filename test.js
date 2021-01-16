function People (name) {
  let _name = name
  Object.defineProperty(this, 'name', {
    get: function() {
      return _name
    },
    set: function(value) {
      console.log('warn')
    }
  })
}

var man = new People("小明");
man.name = "小刚"  
console.log(man.name)

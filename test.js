<<<<<<< HEAD
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
=======

// class People {
//   get name() {
//     return this.nn
//   }
//   constructor(name) {
//     this.nn = name
//   }
  
// }

// Object.defineProperty(People, 'name', {
//   writable: false,
//   set:
// }) 

class People {
  constructor(name) {
    this._name = name;
  }

  set name(name) {
    console.log("不允许");
  }

  get name() {
    return this._name;
  }

  setName(name) {
    this._name = name;
  }
}


let men =  new People('小红')
men.name = '小白' // 提示不可以修改
console.log(men)
// men.setName('小白') // 可修改
>>>>>>> a1058aa89139a04187c5ac83ca37aacc24a2c114

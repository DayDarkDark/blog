
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
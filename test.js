
console.log(findAll([['a','b'],['m','n'],['0',"1"]]))





// function myInstanceof(left, right) {
//   if (typeof left !== 'object' || left === null) return false
//   let proto = Object.getPrototypeOf(left)
//   while(true) {
//     if (proto == null) return false
//     if (proto == right.prototype) return true
//     proto = Object.getPrototypeOf(proto)
//   }
// }

// function Parent (name) {
//   this.name = name
// }
// function Child(name) {
//   Parent.call(this, name)
// }

// Child.prototype = Object.creat(Parent.prototype)
// Child.prototype.constructor = Child

// // es6 class 依旧使用的是 寄生组合继承

// Object.setPrototypeOf(Child,  Parent)

// function newOperator(ctor, ...args) {
//   let obj = Object.create(ctor.prototype)
//   let res = ctor.apply(obj, args)
//   return obj
// }

// const getType = obj => Object.prototype.toString.call(obj);

// const isObject = (target) => (typeof target === 'object' || typeof target === 'function') && target !== null;

// const canTraverse = {
//   '[object Map]': true,
//   '[object Set]': true,
//   '[object Array]': true,
//   '[object Object]': true,
//   '[object Arguments]': true,
// };
// const mapTag = '[object Map]';
// const setTag = '[object Set]';
// const boolTag = '[object Boolean]';
// const numberTag = '[object Number]';
// const stringTag = '[object String]';
// const symbolTag = '[object Symbol]';
// const dateTag = '[object Date]';
// const errorTag = '[object Error]';
// const regexpTag = '[object RegExp]';
// const funcTag = '[object Function]';

// const handleRegExp = (target) => {
//   const { source, flags } = target;
//   return new target.constructor(source, flags);
// }

// const handleFunc = (func) => {
//   // 箭头函数直接返回自身
//   if(!func.prototype) return func;
//   const bodyReg = /(?<={)(.|\n)+(?=})/m;
//   const paramReg = /(?<=\().+(?=\)\s+{)/;
//   const funcString = func.toString();
//   // 分别匹配 函数参数 和 函数体
//   const param = paramReg.exec(funcString);
//   const body = bodyReg.exec(funcString);
//   if(!body) return null;
//   if (param) {
//     const paramArr = param[0].split(',');
//     return new Function(...paramArr, body[0]);
//   } else {
//     return new Function(body[0]);
//   }
// }

// const handleNotTraverse = (target, tag) => {
//   const Ctor = target.constructor;
//   switch(tag) {
//     case boolTag:
//       return new Object(Boolean.prototype.valueOf.call(target));
//     case numberTag:
//       return new Object(Number.prototype.valueOf.call(target));
//     case stringTag:
//       return new Object(String.prototype.valueOf.call(target));
//     case symbolTag:
//       return new Object(Symbol.prototype.valueOf.call(target));
//     case errorTag: 
//     case dateTag:
//       return new Ctor(target);
//     case regexpTag:
//       return handleRegExp(target);
//     case funcTag:
//       return handleFunc(target);
//     default:
//       return new Ctor(target);
//   }
// }

// const deepClone = (target, map = new WeakMap()) => {
//   if(!isObject(target)) 
//     return target;
//   let type = getType(target);
//   let cloneTarget;
//   if(!canTraverse[type]) {
//     // 处理不能遍历的对象
//     return handleNotTraverse(target, type);
//   }else {
//     // 这波操作相当关键，可以保证对象的原型不丢失！
//     let ctor = target.constructor;
//     cloneTarget = new ctor();
//   }

//   if(map.get(target)) 
//     return target;
//   map.set(target, true);

//   if(type === mapTag) {
//     //处理Map
//     target.forEach((item, key) => {
//       cloneTarget.set(deepClone(key, map), deepClone(item, map));
//     })
//   }
  
//   if(type === setTag) {
//     //处理Set
//     target.forEach(item => {
//       cloneTarget.add(deepClone(item, map));
//     })
//   }

//   // 处理数组和对象
//   for (let prop in target) {
//     if (target.hasOwnProperty(prop)) {
//         cloneTarget[prop] = deepClone(target[prop], map);
//     }
//   }
//   return cloneTarget;
// }


// new Vue({
//   data() {
//     return {
//       msg: 'hello world'
//     }
//   }
// })

// const data = reactive({
//   msg: 'hello world'
// })

// new Watcher(() => {
//   document.getElementById('app').innerHTML = `msg is {data.msg}`
// })

// function reactive(data) {
//   Object.keys(data).forEach(key => {
//     defineReactive(data, key)
//   })
// }

// function defineReactive(data, key) {
//   let val = data[key]
//   const dep = new dep()
//   Object.defineProperty(data, key, {
//     get () {
//       dep.depend()
//       return val
//     },
//     set(newVal) {
//       val = newVal
//       dep.notify()
//     }
//   })
//   if (!isObject(val)) {
//     reactive(val)
//   }
// }

// class Dep {
//   constructor() {
//     this.deps = new Set()
//   }
//   depend() {
//     if(Dep.target) {
//       this.deps.add(Dep.target)
//     }
//   }
//   notify() {
//     this.deps.forEach(watcher => watcher.update())
//   }
// }
// // 正在运行的watcher
// Dep.target = null

// const targetStack = []

// function pushTarget(_target) {
//   if (Dep.target) targetStack.push(Dep.target)
//   Dep.target  = _target
// }

// function popTarget() {
//   Dep.target = targetStack.pop()
// }

// class Wacther {
//   constructor(getter, options = {}) {
//     const { computed } = options
//     this.getter = getter

//     this.computed = computed

//     if (computed) {
//       this.dep = new Dep()
//     } else {
//       this.get()
//     }

//   }
//   get () {
//     pushTarget(this)
//     this.value = this.getter()
//     popTarget()
//     return this.value
//   }

//   update() {
//     this.gt()
//   }
// }
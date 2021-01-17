function to36(num) {
  // const pos = 36

  // const target = []

  // while (num >= 1) {
  //   let one = parseInt(num % pos) 
  //   target.unshift(one)
  //   num = parseInt(num / pos) 
  // }

  // return target


  return num.toString(36)
}

console.log(to36(889989))
// 1zg0l

Object.setPrototypeOf(Child.prototype, Parent.prototype)
Object.setPrototypeOf(Child, Parent)
Parent.call(this, name)

Parent.call(this, name)
Child.prototype = Object.create(Parent.prototype)

let pre = 1
let cur = 1
let next

for (let i = 3; i < num; i++ ) {
  next = pre + cur
  pre = cur
  cur = next
  
}
return cur
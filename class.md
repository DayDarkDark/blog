### 寄生组合继承

``` javascript

function Child(value) {
  Parent.call(this, name)
}

Child.prototype = Object.create(Parent.protorype)

// babel 
Object.setPrototypeOf(Child.prototype, Parent.prototype)
Object.setPrototypeOf(Child, Parent)
Parent.call(this, name)
// 根据 Parent 构造函数的返回值类型确定子类构造函数 this 的初始值 _this。
// 根据子类构造函数，修改 _this 的值，然后返回该值。  
// https://github.com/mqyqingfeng/Blog/issues/106

```


### 寄生组合继承

``` javascript

function Child(value) {
  Object.create(this, value)
}

Child.prototype = Object.create(Parent.protorype)

```



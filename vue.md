1. vue的diff策略
  - 只做同级比较，忽略跨级操作
    判断是否值得比较
    vnode属性
    ```javascript
    {
      el: div
      tagName: 'DIV'
      sel: 'div#id.class' // 节点选择器
    }
    ```
    ```javascript
    function sameVnode(oldVnode, vnode) {
      return vnode.key === oldVnode.key && vnode.sel === old.sel
    }
    ```
    只有key与sel相同才去比较，否则直接替换
  链接: https://github.com/aooy/blog/issues/2
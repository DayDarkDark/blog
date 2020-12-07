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
2. vue3 速度提升
  patchFlag 静态标记 vue3 vdom 比较时会忽略静态标签，静态标记值为-1，负整数表示永远不会用作Diff
  hoistStatic 静态提升
  cacheHandler 事件监听缓存 patchFlag 标记为8
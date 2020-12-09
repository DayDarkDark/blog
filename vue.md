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
3. lazyloadImage类
  ```javascript
  class LoazyloadImage {
    constructor(option) {
      this.observe = null
      this.init()
    }
    init () {
      this._observe = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersection) {
            // 替换真正的线上地址
            this._observer && this._observer.unobserve(entry.target)
          }
        })
      }, {
        root: null,
        rootMargin: "500px 200px 1000px 200px",
        threshold: 0.1
      })
    }

    add(entery) {
      this._observer && this._observer.observe(entery.el)
    }
  }    
  const lazyload = new LazyLoadImage()
  Vue.directive('lazy', {
    bind(el, binding) {
      el.setAttribute('data-src', binding.value);
      el.setAttribute('src', lazyload._loadingImage);
      lazyload.add({ el, val: binding.value });
    }
  })
  ```
4. hash模式和history模式的区别
  ```hash```模式是依靠```onhashchange```事件（监听location.hash的改变）
  ```history```模式主要是依靠```pushState()```
5. 
1. vue的diff策略
  - 只做同级比较，忽略跨级操作
  - 不是相同节点 isSameNode 为false 
  - 是相同节点，复用
    - 如果新node是文字 直接调用dom api
    - 如果不是，有


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
  - patchFlag 静态标记 vue3 vdom 比较时会忽略静态标签，静态标记值为-1，负整数表示永远不会用作Diff
  - hoistStatic 静态提升 只在页面初始化的时候创建并渲染一次，其余时候不再渲染
  -  cacheHandler 对事件监听函数进行缓存，防止内联监听函数带来的副作用 patchFlag 标记为8
 
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
5. vue3响应式
  #### reactive
  - 创建响应式对象
  #### effect
  - 副作用，创建用于管理```effect```的栈```effectStack```，将effect先入栈用于依赖收集，执行一次该effect
  #### track
  - effect 执行后数据触发get捕获器，在此过程中调用```track```进行依赖收集
  - 

6. vue生命周期
  - ```_init_```
    - initLifecycle/Event vm上挂载各种属性
    - callHook: beforeCreated 
    - initInjection/initState 初始化注入和data响应性
    - created 创建完成，属性已经完成绑定，但未生成真实dom
    - 进行元素的挂载：$el/vm.$mount()
    - 是否有template: render function
      - *.vue文件：vue-loader 会将<template>编译成render function
    - beforeMount 模板编译/挂载之前
    - 执行 render function，生成真实的dom，并替换到dom tree
    - mounted 组件已挂载
  - update
    - 执行diff算法，比对改变是否需要触发UI更新
    - flushScheduleQueue
      - water.before 触发 beforeUpdate 钩子 watcher.run(): 执行watcher中的notify，通知所有依赖项更新UI
      - 触发updated钩子：组件已更新
```js
  function _init() {
    initLiftCycle(vm)
    initEvent(vm)
    initRender(vm)
    callHook('vm', 'beforeCreated')
    // inject功能
    initInjection(vm)
    // props/data/watch/computed/medthods
    initState(vm)
    initProvide(vm)
    callHook(vm, 'Created')
    // 挂载节点
    vm.$mount(vm.$options.el)
  }

  // 挂载节点实现
  function mountComponent(vm) {
    // 获取render function
    if (!this.options.render) {
      let { render } = compileToFunctions()
      this.options.render = render
    }
    callHook('beforeMounted')
    vdom = vm.render()
    vm._update(dom)
    // update： 根据diff出的patch 挂载真实的dom
    callHook(vm, 'mounted')
  }

  function queueWatcher(watcher) {
    nextTick(flusScheduleQueue)
    for (;;) {
      // beforeUpdate
      watcher.before()
      // 依赖局部更新节点
      watcher.update()
      callHook('updated')
    }
  }

  Vue.prototype.$deforty = function () {
    callHook(vm, 'beforeDestory')
    // 移除自身及子节点
    remove()
    // 删除依赖
    watcher.teardown()
    // 删除监听
    
    vm.$off()
    // 触发钩子
    callHook(vm, 'destoryed')
  }

```
```js
let data = { a : 1 }
observe(data)

new Wacther(data, 'name', updateComponent)
data.a = 2

function updateComponent() {
  // patches
  vm._update()
}

function observe(obj) {
  // 遍历对象，使用get/set 重新定义对象的每个属性值
  Object.keys(obj).map(key => {
    defineReactibe(obj, key, obj[key])
  })
}

function defineReactive(obj, k, v) {
  if (type(v)== 'object') observe(v)

  let dep = new Dep() 
  Object.defineProperty(obj, k, {
    emumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      if (Dep.target) {
        dep.addSub(Dep.target)
      }
      return v
    },
    set: function reactiveSetter(newVal) {
      v = newVal
      dep.notify()
    }
  })
}

// 依赖收集器
class Dep {
  constructor() {
    this.subs = []
  }
  addSub (sub) {
    this.subs.push(sub)
  }
  notify() {
    this.subs.map(sub => {
      su.update()
    })
  }
}

Dep.target = null

class Watcher {
  constructor(obj, key, cb) {
    Dep.target = this
    Dep.target = null
  }
  addDeo
}

```


1. dom树 -> cssom树
Layout tree
遍历生成的dom树节点，并把他们添加到布局树中
计算布局树节点的坐标位置


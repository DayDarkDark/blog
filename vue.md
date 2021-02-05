1. vue的diff策略
  - 没有旧节点，直接创建新的。
  - 新旧 vnode 不同，直接销毁旧的，创建新的。
  - 新旧 vnode 相同，继续比较子节点：
    其中 vnode 为文本节点，与旧不同则直接更新
    子节点依旧是新旧之间的比较，只有新节点直接创建，只有旧节点则删除旧的，新旧又不同，开始 diff 核心算法，重点讲解：
      - while 循环比较新旧子节点：头索引跟头比较，尾跟尾，比完缩减往中间收拢，比较遵从：
      - 头与头比较，相同则复用不作处理，同时头++，尾、头尾、尾头的目的都是为了复用
      - 用 key 比较
      - map 表遍历查找
      - 剩余节点，批量新增或删除
2. vue3 速度提升
  - vdom：创建 vdom 的时候多了个 dynamicChildren 动态节点，patch 的时候只比对动态。
    vue2 静态节点也会 patch。
  - vdom：节点变更类型用 patchFlag 细分，用位掩码组合，作为判定更新的依据。
    vue2 如果是普通节点，会通过内置的update钩子全量进行新旧对比，然后更新
    如果是component，则会在prepatch阶段进行判断，有变化则会重新触发forceUpdate，造成很多无用的重复对比。
  - diff 核心变化：用数组 map 记录节点变更的位置以及新增的节点 + 最长子序列（如果递增则位置不变）。
  - 相同事件缓存不会重新生成。

  对静态模板进行分析，编译生成了`Block Tree`
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

6.

7. 父子组件生命周期执行顺序
  - 父beforeCreate-> 父created => 子beforeCreate => 子created => 子beforeCreated => 子 beforeMount => 子mounted => 父mounted

8 vue3的模板编译优化

https://mp.weixin.qq.com/s?__biz=Mzg5ODA5MzQ2Mw==&mid=2247486839&idx=1&sn=4ab76188080b95162344e093e7c4203a&chksm=c066958ff7111c9982971426cef51f6031d1ae0f5936b58395d8897a6f191cbd5808dabcd8df&scene=132#wechat_redirect
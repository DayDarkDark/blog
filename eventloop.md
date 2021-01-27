1. `macrotask`
2. 执行`microtasks` 会判断`document`是否需要更新
3. 判断是否有`resie`或者`scroll`事件（自带节流功能）
4. 判断是否触发了媒体查询
5. 更新动画并且发送事件
6. 判断是否有全屏操作事件
7. 执行`requestAnimationFrame`回调
8. 执行 `IntersectionObserver`回调，用于判断元素是否课件，可以用在懒加载上
9. 更新界面
10. 浏览器是60hz的刷新率，16.6ms才会更新一次，有空余时间就会去执行`requestIdleCallback`

1. GUI渲染线程
  - 负责渲染浏览器界面
  - 
2. JS引擎线程
3. 事件触发线程
4. 定时器触发器线程
5. 异步http请求线程

https://segmentfault.com/a/1190000012925872#articleHeader16
1. webpack方法接收用户配置，返回complier对象，compiler.run()启动编译
2. 处理用户自定义的配置，以及默认参数，调用webpack内置插件，挂入compiler

v5
1. 通过持久缓存提高构建性能
2. 使用更好的算法和默认值来改善长期缓存
3. 通过更好的Tree shaking和代码生成来改善捆绑包大小
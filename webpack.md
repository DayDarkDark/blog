webpack流程
￼读取配置文件，按命令 初始化配置参数，创建 Compiler 对象；
￼调用插件的 apply 方法 挂载插件监听，然后从入口文件开始执行编译；
￼按文件类型，调用相应的 Loader 对模块进行 编译，并在合适的时机点触发对应的事件，调用 Plugin 执行，最后再根据模块 依赖查找到所依赖的模块，递归执行第三步；
￼将编译后的所有代码包装成一个个代码块 (Chuck)， 并按依赖和配置确定 输出内容。这个步骤，仍然可以通过 Plugin 进行文件的修改;
￼最后，根据 Output 把文件内容一一写入到指定的文件夹中，完成整个过程
优化
￼无用代码消除 dce 不会被执行的代码
￼Tree-shaking 副作用
￼code-spliting代码分割
￼scope hoisting:作用域提升
编译性能优化
￼升级至 最新 版本的 webpack，能有效提升编译性能；
￼使用 dev-server / 模块热替换 (HMR) 提升开发体验；
监听文件变动 忽略 node_modules 目录能有效提高监听时的编译效率；
缩小编译范围
￼modules: 指定模块路径，减少递归搜索；
￼mainFields: 指定入口文件描述字段，减少搜索；
￼noParse: 避免对非模块化文件的加载；
￼includes/exclude: 指定搜索范围/排除不必要的搜索范围；
￼alias: 缓存目录，避免重复寻址；
babel-loader
￼忽略node_moudles，避免编译第三方库中已经被编译过的代码；
￼使用cacheDirectory，可以缓存编译结果，避免多次重复编译
多进程并发:
webpack-parallel-uglify-plugin: 可多进程并发压缩 js 文件，提高压缩速度；HappyPack: 多进程并发文件的 Loader 解析；
第三方库模块缓存
DLLPlugin 和 DLLReferencePlugin 可以提前进行打包并缓存，避免每次都重新编译
使用分析
￼Webpack Analyse / webpack-bundle-analyzer 对打包后的文件进行分析，寻找可优化的地方；
￼配置profile：true，对各个编译阶段耗时进行监控，寻找耗时最多的地方；
source-map:
开发: cheap-module-eval-source-map；
￼生产: hidden-source-map





v5
1. 通过持久缓存提高构建性能
2. 使用更好的算法和默认值来改善长期缓存
3. 通过更好的Tree shaking和代码生成来改善捆绑包大小

tree shaking

commonjs require() 是动态的 基于条件来导入需要的代码

es6 improt语法是完全静态 


循环引用 coomonjs es6模块

// 
url -> 

箭头函数
https://segmentfault.com/a/1190000015480642

new 报错 try catch

protptype
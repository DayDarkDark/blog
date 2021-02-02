#### 速度分析
1. 分析
  `speed-measure-webpack-plugin`
2. 优化方法
  1. 使用高版本的wepack和node
  2. 使用thread-loader
  3. 预编译资源模块
    1. 设置`externals` `html-webpack-externals-plugin`
      将 react react-dom等基础包通过cdn引入，不打入bundle
    2. 动态链接库
      Dllplugin
    3. hard-source-webpack-plugin
      提供缓存，二次构建显著加快，替代dllplugin
  4. 缩小构建目标
    1. 减少文件搜索范围
      - 优化`resolve.modules`
      - 优化`resolve.mainFields`
      - 优化`resolve.extensions`
    2. 合理使用alias
    3. noParse
    4. ingnorePlugin: moment 忽略 ./locale文件
  
#### 体积分析
1. 分析
  `webpack-bundle-analyzer`
  1. 分割打包  Bundle Spliting `splitchunksPlugin`
    - AggressiveSplittingPlugin
    - AggressiveMergingPlugin
  2. 代码分割 code spilting 
  3. 压缩代码 terser

#### vite
1. 首次启动 分析package.json的dependencies,将 cjs等转成 esm
2. 减少http请求数，提高页面加载性能，vite 将每个依赖单独达成一个esm
3. 



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


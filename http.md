1. 301、302、307
  301 重定向是永久的重定向，搜索引擎在抓取新的内容的同时也将旧的网址替换为了重定向之后的网址。
  只有第一次才会请求，后面请求直接redirect
  http => https
  302重定向只是暂时的重定向，搜索引擎会抓取新的内容而保留旧的地址，因为服务器返回302，所以，搜索搜索引擎认为新的网址是暂时的。
  不强求维持原请求的方法
  更有利于seo oauth
  303 将post请求重定向到get请求
  307 不允许post到get的重定向
  308 与301 一样 不允许post到get的重定向
2. https中间人攻击
  https://juejin.cn/post/6844903604868874247#heading-28
3. http
  - http/1.x
    - 链接无法复用，每次都需要经历三次握手与慢启动
    - http/1.1 虽然有keep-live可以复用一部分连接，但是需要建立多个connection
    - Head-of-line blocking 第一个包阻塞，达到最大请求数量时
  - http/2
    - 二进制传输
    - 多路复用
    - Header头部压缩
    - server push
      例如服务端可以主动把js和css文件推送给浏览器
  - http/3
    http/2使用了多路复用，一个域名下只需要一个TCP连接，如果出现了丢包，整个TCP都需要等待重传
    - QUIC 基于UDP
      - 0RTT建连 缓存当前会话的·上下文
  链接：https://blog.fundebug.com/2019/03/07/understand-http2-and-http3/
<<<<<<< HEAD
  ```QUIC```:https://juejin.cn/post/6844904182361636878
  

=======
  ```QUIC```:https://juejin.cn/post/6844904182361636878
>>>>>>> a1058aa89139a04187c5ac83ca37aacc24a2c114

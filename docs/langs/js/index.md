# JavaScript 快速入门


## 发送HTTP请求

[JavaScript 发起 HTTP 请求](https://www.freecodecamp.org/chinese/news/the-most-popular-ways-to-make-an-http-request-in-javascript/)

[发送HTTP请求的方法](https://cloud.tencent.com/developer/article/2061091)

- 原生API

- Ajax XMLHttpRequest

- $.ajax

- fetch

- Axios

- Angular HttpClient

- XMLHttpRequest

- SuperAgent

- Ky

- ...

## jQuery发送Ajax请求

### 数据格式

字符串

JSON

### $.ajax()

> jQuery中Ajax系列方法之母

```javascript
$.ajax({
    url: "", //链接地址，字符串表示
    data: "", // 发送到服务器的数据
    type: "GET/POST",
    timeout: 500, // 500ms
    cache: false, //是否缓存请求结果，bool表示
    contentType: "", // 内容类型，默认为"application/x-www-form-urlencoded"
    dataType: "json", // 服务器响应的数据类型
    success: "",// 请求成功后，回调的函数
    error: "", // 请求失败后，回调的函数
    complete: "", //请求完成后调用的函数，无论请求是成功还是失败，都会调用该函数
    async: true, //是否异步处理
    username: "", // 访问认证请求中携带的用户名，字符串表示
    password: "", // 访问认证请求中携带的密码，字符串表示
})
```

### $.post()

```javascript
// $.post(url, data, func, dataType);
$.post(
    "url",    // url：链接地址，字符串表示
    {name: "bookName"}, // data: 发送到服务器的数据
    function (data){ // func：请求成功后，服务器回调的函数
        
    },
    "json" // dataType：服务器返回数据的格式
)
```

### $.get()

```javascript
// $.get(url, data, func, dataType);
$.get(
    "url",    // url：链接地址，字符串表示
    {name: "bookName"}, // data: 发送到服务器的数据
    function (data){ // func：请求成功后，服务器回调的函数
        
    },
    "json" // dataType：服务器返回数据的格式
)
```

### $.getJSON()

```javascript
// $.getJSON(url, data, func);
$.getJSON(
    "url",    // url：链接地址，字符串表示
    {name: "bookName"}, // data: 发送到服务器的数据
    function (data){ // func：请求成功后，服务器回调的函数
        
    }
)
```

## 解构赋值

[ES6解构赋值详解](https://blog.csdn.net/RenGJ010617/article/details/141436850)

## JSON 和 JS 对象的异同

[JSON与JS对象的区别js和json的区别](https://blog.csdn.net/yeoman92/article/details/54924930)

[JavaScript对象、JSON对象、JSON字符串的区别](https://www.cnblogs.com/guodefu909/p/JavaScript_JSON.html)

[十分钟搞定JSON和JSON对象](https://zhuanlan.zhihu.com/p/29119549)

## Fetch跨域

[通过fetch看跨域：是谁阻止了跨域请求？ - 掘金](https://juejin.cn/post/7064127816404566053)

# 资源推荐

## 官方

[JavaScript Strings: The Basic Methods and Functions | JavaScript.com](https://www.javascript.com/learn/strings)

## 在线教程

[现代JavaScript教程](https://zh.javascript.info/)

[JavaScript  |  web.dev for China](https://web.developers.google.cn/javascript?hl=zh-cn)

[JavaScript - 学习 Web 开发 | MDN](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript)

[JavaScript教程 - 廖雪峰的官方网站](https://liaoxuefeng.com/books/javascript/introduction/index.html)

[JavaScript 教程 | 菜鸟教程](https://www.runoob.com/js/js-tutorial.html)

## 文档规范

[ECMAScript® 2026 Language Specification](https://tc39.es/ecma262/)

## 项目推荐

1. [next.js](https://github.com/zeit/next.js) 
2. [react](https://github.com/facebook/react) 
3. [javascript-algorithms](https://github.com/trekhleb/javascript-algorithms) 
4. [material-ui](https://github.com/mui-org/material-ui) 
5. [axios](https://github.com/axios/axios) 
6. [node](https://github.com/nodejs/node) 
7. [learnGitBranching](https://github.com/pcottle/learnGitBranching) 
8. [freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp) 
9. [vue](https://github.com/vuejs/vue) 
10. [Rocket.Chat](https://github.com/RocketChat/Rocket.Chat) 
11. [joplin](https://github.com/laurent22/joplin) 
12. [nodebestpractices](https://github.com/goldbergyoni/nodebestpractices) 
13. [NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi) 
14. [vant-weapp](https://github.com/youzan/vant-weapp) 
15. [bootstrap](https://github.com/twbs/bootstrap) 
16. [cypress](https://github.com/cypress-io/cypress) 
17. [Realworld](https://github.com/gothinkster/realworld) 
18. [javascript](https://github.com/airbnb/javascript) 
19. [react-router](https://github.com/ReactTraining/react-router) 
20. [markdown-here](https://github.com/adam-p/markdown-here) 
21. [react-virtualized](https://github.com/bvaughn/react-virtualized) 
22. [lighthouse](https://github.com/GoogleChrome/lighthouse)
23. [Gatsby](https://github.com/gatsbyjs/gatsby)
24. [puppeteer](https://github.com/puppeteer/puppeteer) 
25. [leetcode](https://github.com/azl397985856/leetcode)
26. [awesome-mac](https://github.com/jaywcjlove/awesome-mac) 
27. [wangEditor](https://github.com/wangfupeng1988/wangEditor) 
28. [jitsi-meet](https://github.com/jitsi/jitsi-meet) 
29. [lx-music-desktop](https://github.com/lyswhut/lx-music-desktop)



https://github.com/YUUXIAO/webProject

https://github.com/30-seconds/30-seconds-of-code

https://github.com/leonardomso/33-js-concepts

https://github.com/lydiahallie/javascript-questions

https://github.com/wesbos/JavaScript30

https://www.codewars.com/

https://es6.ruanyifeng.com/

https://wangdoc.com/javascript/

https://zh.javascript.info/

https://developer.mozilla.org/zh-CN/

https://github.com/ryanmcdermott/clean-code-javascript

https://ts.xcatliu.com/

https://www.w3school.com.cn/js/index.asp

https://zuoye.blog.csdn.net/article/details/126079743)

https://github.com/docsifyjs/docsify

## ES6

[《阮一峰 ECMAScript 6 (ES6) 标准入门教程 第三版》 - 书栈网 · BookStack](https://www.bookstack.cn/books/es6-3rd)

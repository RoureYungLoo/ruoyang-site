# Lua快速入门

## 安装

```
yum install -y readline readline-devel
curl -R -O http://www.lua.org/ftp/lua-5.1.4.tar.gz
tar zxf lua-5.1.4.tar.gz
cd lua-5.1.4
make all test
```

## LuaRocks

# 语法基础

- 变量声明
- nil
- 多重赋值
- 数值型
- 运算符
- 字符串
- 函数
- 表
- 元表、元方法

Lua 元表(Metatable) 和元方法（Metamethod) - 知乎 ([zhihu.com](https://zhihu.com))

Lua 元表(Metatable) | 菜鸟教程 ([runoob.com](https://runoob.com))

【Lua进阶系列】lua元方法lua 元方法Lampard猿奋的博客-CSDN博客

```c
void luaT_init (lua_State *L) {
    static const char const luaT_eventname[] = {  / ORDER TM */
        "__index", "__newindex",
        "__gc", "__mode", "__len", "__eq",
        "__add", "__sub", "__mul", "__mod", "__pow",
        "__div", "__idiv",
        "__band", "__bor", "__bxor", "__shl", "__shr",
        "__unm", "__bnot", "__lt", "__le",
        "__concat", "__call"
    };
    int i;
    for (i=0; i<TM_N; i++) {
        G(L)->tmname[i] = luaS_new(L, luaT_eventname[i]);
        luaC_fix(L, obj2gco(G(L)->tmname[i]));  /* never collect these names */
    }
 }
```

当你通过键来访问 table 的时候，如果这个键没有值，那么Lua就会寻找该table的metatable（假定有metatable）中的__index 键。如果__index包含一个表格，Lua会在表格中查找相应的键。

__newindex 元方法用来对表更新，__index则用来对表访问 。

当你给表的一个缺少的索引赋值，解释器就会查找__newindex 元方法：如果存在则调用这个函数而不进行赋值操作。

- 全局表 _G

- 布尔

- 逻辑与或非

- b >10 and "yes" or "no"

- 分支和循环

- userdata

- thread

- local与非local的区别




[Lua的local变量探究 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/35784018)

[Lua的upvalue和闭包_lua upvalue_风云来的博客-CSDN博客](https://blog.csdn.net/chenjiayi_yun/article/details/25219937?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2~default~CTRLIST~Rate-2-25219937-blog-79203986.235^v38^pc_relevant_anti_t3&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~CTRLIST~Rate-2-25219937-blog-79203986.235^v38^pc_relevant_anti_t3&utm_relevant_index=5)

[lua - 在 Lua 中，使用和不使用 "local"关键字声明的本地函数之间有区别吗？ - IT工具网 (coder.work)](https://www.coder.work/article/6961041)

[Lua中local变量和非local变量的区别 - 威少小二orz - 博客园 (cnblogs.com)](https://www.cnblogs.com/vsirWaiter/p/7742068.html)

# 语法进阶

- 官方文档查阅
- 多文件调用
- 迭代器
- string库
- table
- metatable元表
- coroutine
- IO库（读写文件）

## Require多文件调用

- 运行指定文件
- 末尾不带扩展名
- 目录层级用“.”分隔
- 只会运行一次
- 从packa.path中的路径里查找

## 迭代器

ipars

pairs

next

## string
```lua
string.byte()
string.char()
string.format()
string.len()
string.lower()
string.upper()
string.pack()
string.unpack()
string.rep()
string.reverse()
string.sub(str,start,end) --闭区间
```
## Lua弱引用

https://zhuanlan.zhihu.com/p/638008523

https://blog.csdn.net/jiumengdz/article/details/88427895?spm=

## 闭包

[深入理解Lua的闭包一：概念、应用和实现原理_lua 闭包 self_MaximusZhou的博客-CSDN博客](https://blog.csdn.net/maximuszhou/article/details/44280109)

[深入Lua：函数和闭包 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/98917625)

[Lua的闭包详解（终于搞懂了） - 风雨缠舟 - 博客园 (cnblogs.com)](https://www.cnblogs.com/zzy-frisrtblog/p/5864209.html)

解决闭包内存泄漏的方法有：

1. 尽量减少闭包的使用；
2. 尽量减少闭包内部变量的使用；
3. 尽量减少闭包的嵌套；
4. 尽量减少闭包的作用域；
5. 使用弱引用；
6. 定期清理不再使用的闭包；
7. 使用垃圾回收机制。

闭包函数生成后即便执行完，upvalue也是无法释放的，需要闭包函数= nil，去除闭包函数对upvalue的引用，upvalue才能被gc掉。也就是local test = 闭包函数， test()--upvalue无法释放， test = nil --upvalue可以被释放

【【python技巧060】形象理解闭包，玩转闭包】 https://www.bilibili.com/video/BV1Vx4y1u7YX/?share_source=copy_web&vd_source=efea9015bf6407b70a083cf1401dd2dd

## 面向对象

1. middleclass - 一个简单、轻量级的面向对象库，它为Lua提供了类和类的继承。
2. 30log - 一个轻量级的面向对象库，它使用Lua的元表来实现面向对象编程。它提供了一种简单的方式来创建、继承和扩展类。

## 元表 元方法

# 源码分析

《lua设计与实现》蓝皮书

https://dreamanddead.github.io/lua-5.1-source-guide/index.html

[探索Lua5.2内部实现_yuanlin2008的博客-CSDN博客](https://blog.csdn.net/yuanlin2008/category_1307277.html)

[【Lua源码赏析】第一章 阅读源码准备 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/295069323)

[Lua知识树整理————lua源码分析 - 陌冉 - 博客园 (cnblogs.com)](https://www.cnblogs.com/moran-amos/p/14408624.html)

[lua5.1源码解析-底层结构&协程_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1EL41187Dj/?spm_id_from=333.337.search-card.all.click)

[Let Us Build a Lua Interpreter (manistein.club)](http://manistein.club/tags/let-us-build-a-lua-interpreter/)

[(22 封私信 / 80 条消息) Manistein - 知乎 (zhihu.com)](https://www.zhihu.com/people/wu-yin-jie)

# 资源推荐

## 书籍推荐

1. 《Lua程序设计》
2. 《自己动手实现 Lua : 虚拟机、编译器和标准库》
3. 《Lua设计与实现》
4. 《Nginx Lua开发实战》
5. 《Nginx实战：基于Lua语言的配置开发与架构详解》

## 网站推荐

1. Lua 教程 | 菜鸟教程
2. Lua 5.3 参考手册
3. LewisJEllis/awesome-lua: A curated list of quality Lua packages and resources. ([github.com](https://github.com))

[LuatOS 文档](https://wiki.luatos.com/)

[Lua 5.3 readme (luatos.com)](https://wiki.luatos.com/_static/lua53doc/index.html)

## 博文

1. [Lua基础教程与实践](https://blog.csdn.net/osuckseed/article/details/121518282)
2. [Lua基础教程](https://blog.csdn.net/qq_43594278/article/details/116018869)
3. [Lua脚本教程](https://blog.csdn.net/qq_40506747/article/details/120388764)
4. [Lua闭包](https://blog.csdn.net/maximuszhou/article/details/44280109?)
5. [Lua深拷贝浅拷贝](https://blog.csdn.net/qq_44918090/article/details/124979991?)

## 开发框架

1. [OpenResty® - 开源官方站](http://openresty.org/cn/)
2. APISIX
3. KONG
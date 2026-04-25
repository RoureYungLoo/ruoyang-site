# Redis Lua

## Redis EVAL命令

```bash
EVAL "script" numkeys key [key …] arg [arg …]
```

**script**： 参数是一段 Lua 5.1 脚本程序。脚本不必(也不应该)定义为一个 Lua 函数。

**numkeys**： 用于指定键名参数的个数。

**key** [key …]： 从 EVAL 的第三个参数开始算起，表示在脚本中所用到的那些 Redis 键(key)，这些键名参数可以在 Lua 中通过全局变量 KEYS 数组，用 1 为基址的形式访问( KEYS[1] ， KEYS[2] ，以此类推)。

**arg** [arg …]： 附加参数，在 Lua 中通过全局变量 ARGV 数组访问，访问的形式和 KEYS 变量类似( ARGV[1] 、 ARGV[2] ，诸如此类)。

```bash
redis 127.0.0.1:6379> EVAL "return {KEYS[1],KEYS[2],ARGV[1],ARGV[2]}" 2 key1 key2 value1 value2
1) "key1"
2) "key2"
3) "value1"
4) "value2"
```

## Redis EVAL选项

```bash
redis-cli --eval /test.lua 0
```

[Redis中执行Lua脚本](https://blog.csdn.net/MOU_IT/article/details/119513626)

[如何在Redis中执行Lua脚本？](https://zhuanlan.zhihu.com/p/616532651)

[Redis中使用Lua脚本](https://zhuanlan.zhihu.com/p/77484377)

[Redis中使用Lua脚本](https://morris131.blog.csdn.net/article/details/126459553)

[Redis常用命令](https://blog.csdn.net/MOU_IT/article/details/88375719)

[redis 命令手册](https://redis.com.cn/commands.html)
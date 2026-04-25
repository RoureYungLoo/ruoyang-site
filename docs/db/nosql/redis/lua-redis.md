## **Lua Redis**

[Redis Lua API reference | Redis](https://redis.io/docs/interact/programmability/lua-api/)

redis.call

```bash
redis.call("命令名称"，参数1，参数2...)  # 执行指定的redis指令，执行遇到错误会直接返回错误
redis.pcall("命令名称"，参数1，参数2) # 执行指定的redis指令，执行遇到错误以lua表的形式返回。
```

## **openresty lua**

[nrk/redis-lua: A Lua client library for the redis key value storage system. (github.com)](https://github.com/nrk/redis-lua)

## **Redis命令行执行Lua脚本**

https://zhuanlan.zhihu.com/p/77484377

https://blog.csdn.net/u014265398/article/details/104458786

https://www.cnblogs.com/sunnyyangwang/p/16471946.html

- EVAL
- EVALSHA
- SCRIPT LOAD
- SCRIPT EXISTS
- SCRIPT FLUSH
- SCRIPT KILL

写一个lua脚本文件

在redis中执行脚本文件

```bash
# 执行命令
redis-cli -a 密码 --eval Lua脚本路径 key1 key2 keyN ,  arg1 arg2 argN 
# 示例
redis-cli -a 123456 --eval ./Redis_CompareAndSet.lua userName , zhangsan lisi 

redis 127.0.0.1:6379> EVAL script numkeys key [key ...] arg [arg ...]
EVAL "return redis.call('LPUSH',KEYS[1], ARGV[1], ARGV[2], ARGV[3])" 1 somelist 1 2 3

[root@localhost ~]# redis-cli -x script load < 01.lua 
"19fa4b699db3b922b81f5a2817e1dac8821e8bf5"

127.0.0.1:6379> evalsha 19fa4b699db3b922b81f5a2817e1dac8821e8bf5 1 name lisi zhangsan
```

Redis世界中执行

https://www.cnblogs.com/felordcn/p/13838321.html

[Redis使用lua脚本](https://zhuanlan.zhihu.com/p/376535035)
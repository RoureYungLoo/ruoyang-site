# 命令手册

# 字符串(string)

GET

SET

DEL

# 列表(list)

LPUSH

RPUSH

LPOP

RPOP

LINDEX

LRANGE

# 集合(set)

SADD

SREM

SMEMBERS

SISMEMBER

SINTER

SUNION

SDIFF

# 散列(hash)

HSET

HGET

HGETALL

HDEL

# 有序集合(zset)

ZADD

ZRANGE

ZRANGEBYSCORE

ZREM

# 命令手册

## 字符串 string

### SET

```
SET key value [NX|XX]
```

### GET

```
GET key
```

### GETSET

```
GETSET key new_value
```

### MSET

```
MSET key value [key value ...]
```

### MGET

```
MGET key [key ...]
```

### MSETNX

```
MSETNX key value [key value ...]
```

### STRLEN

```
STRLEN key
```

### GETRANGE

闭区间

```
GETRANGE key start end
```

### SETRANGE

```
SETRANGE key index substitute
```

### APPEND

```
APPEND key suffix
```

### INCRBY

整数

```
INCRBY key increment
```

### DECRBY

整数

```
DECRBY key decrement
```

### INCR

整数

```
INCR key
```

### DECR

整数

```
DECR key
```

### INCRBYFLOAT

整数或浮点数

```
INCRBYFLOAT key increment
```

## 散列HASH

### HSET

```
HSET hashKey field value
```

### HSETNX

```
HSETNX hashKey field value
```

### HGET

```
HGET hashKey field
```

### HINCRBY

```
HINCRBY hashKey field increment
```

### HINCRBYFLOAT

```
HINCRBYFLOAT hashKey field increment
```

### HSTRLEN

```
HSTRLEN hashKey field
```

### HEXISTS

```
HEXISTS hashKey field
```

### HDEL

```
HDEL hashKey field
```

### HLEN

```
HLEN hashKey
```

### HMSET

```
HMSET hashKey field value [field value ...]
```

### HMGET

```
HMGET hashKey field [field ...]
```

### HKEYS

```
HKEYS hashKey
```

### HVALS

```
HVALS hashKey
```

### HGETALL

```
HGETALL hashKey
```

## 列表 LIST

### LPUSH

```
LPUSH listKey item [item...]
```

### RPUSH

```
RPUSH listKey item [item...]
```

### LPUSHX

```
LPUSHX listKey item [item...]
```

### RPUSHX

```
RPUSHX listKey item [item...]
```

### LPOP

```
LPOP listKey
```

### RPOP

```
RPOP listKey
```

### RPOPLPUSH

```
RPOPLPUSH source target
```

### LLEN

```
LLEN listKey index
```

### LINDEX

```
LINDEX listKey index
```

### LRANGE

```
LRANGE listKey start end
```

### LSET

```
LSET listKey index new_element
```

### LINSERT

```
LINSERT listKey BEFORE|AFTER target_element new_element
```

### LTRIM

```
LTRIM listKey start end
```

### LREM

```
LREM listKey count element
```

### BLPOP

```
BLPOP listKey [list...] timeout
```

### BRPOP

```
BRPOP listKey [list...] timeout
```

### BRPOPLPUSH

```
BRPOPLPUSH source target timeout
```

## 集合 SET

### SADD

```
SADD set_key element [element...]
```

### SREM

```
SREM set_key element [element...]
```

### SMOVE

```
SMOVE source_key target_key element
```

### SMEMBERS

```
SMEMBERS set_key
```

### SCARD

```
SCARD set_key
```

### SISMEMBER

```
SISMEMBER set_key element
```

### SRANDMEMBER

```
SRANDMEMBER set_key [count]
```

### SPOP

```
SPOP set_key [count]
```

### SINTER

```
SINTER set_key [set_key ...]
```

### SINTERSTORE

```
SINTERSTORE destination_key set_key [set_key]
```

### SDIFF

```
SDIFF set_key [set_key...]
```

### SDIFFSTORE

```
SDIFFSTORE destination_key set_key [set_key...]
```

### SUNION

```
SUNION set_key [set_key...]
```

### SUNIONSTORE

```
SUNIONSTORE destination_key set_key [set_key...]
```

## 有序集合 ZSET

又称sorted set

### ZADD

```
ZADD zset_key score member [score member...]
```

### ZREM

```
ZREM zset_key member [member...]
```

### ZSCORE

```
ZSCORE zset_key member
```

### ZINCRBY

```
ZINCRBY zset_key increment member
```

### ZCARD

```
ZCARD zset_key
```

### ZRANK

```
ZRANK zset_key member
```

### ZREVRANK

```
ZREVRANK zset_key member
```

### ZRANGE

```
ZRANGE zset_key start end
```

### ZREVRANGE

```
ZREVRANGE zset_key start end
```

### ZRANGEBYSCORE

```
ZRANGEBYSCORE zset_key min max [LIMIT offset count]
```

### ZREVRANGEBYSCORE

```
ZREVRANGEBYSCORE zset_key max min [LIMIT offset count]
```

### ZCOUNT

```
ZCOUNT zset_key min max
```

### ZREMRANGEBYRANK

```
ZREMRANGEBYRANK zset_key start end
```

### ZREMRANGEBYSCORE

```
ZREMRANGEBYSCORE zset_key min max
```

### ZUNIONSTORE

```
ZUNIONSTORE destination numbers zset_key [zset_key ...]
```

### ZINTERSTORE

```
ZINTERSCORE destination numbers zset_key [zset_key...]
```

### ZRANGEBYTLEX

```
ZRANGEBYLEX zset_key min max [LIMIT offset count]
```

### ZREVRANGEBYLEX

```
ZREVRANGEBYLEX zset_key max min [LIMIT offset count]
```

### ZLEXCOUNT

```
ZLEXCOUNT zset_key min max
```

### ZREMRANGEBYLEX

```
ZREMRANGEBYLEX zset_key min max
```

### ZPOPMAX

```
ZPOPMAX zset_key [count]
```

### ZPOPMIN

```
ZPOPMIN zset_key [count]
```

### BZPOPMAX

```
BZPOPMAX zset_key [zset_key...] timeout
```

### BZPOPMIN

```
BZPOPMIN zset_key [zset_key...] timeout
```

## Hyperloglog

### PFADD

```
PFADD hyperloglogKey element [element ... ]
```

### PFCOUNT

```
PFCOUNT hyperloglogKey [hyperloglogKey...]
```

### PFMERGE

```
PFMERGE destination hyperloglogKey [hyperloglogKey...]
```

## 位图 bitmap

### SETBIT

```
SETBIT bitmapKey offset value
```

### GETBIT

```
GETBIT bitmapKey offset
```

### BITCOUNT

```
BITCOUNT bitmapKey
```

`BITCOUNT bitmapKey [start end]` ***\**\*字节范围，可为负整数\*\**\***

### BITPOS

`BITPOS bitmapKey value [start] [end]`***\**\*字节范围，可为负整数\*\**\***

### BITOP

```
BITOP operation result_key bitmapKey [bitmapKey ... ]
```

operation：AND  OR  NOT  XOR

### BITFIELD

#### SET

```
BITFIELD bitmap SET type offset value
BITFIELD bitmap SET type #index value
```

#### GET

```
BITFIELD bitmap GET type offset
BITFIELD bitmap GET type #index
```

#### INCRBY

```
BITFIELD bitmap  INCRBY type offset increment
BITFIELD bitmap  INCRBY type #index increment
```

#### OVERFLOW

`BITFIELD bitmap ``***\*OVERFLOW\****`` WARP|SAT|FAIL INCRBY ... ``***\*OVERFLOW\****`` WARP|SAT|FAIL INCRBY ... ``***\*OVERFLOW\****`` WARP|SAT|FAIL INCRBY ...`

### GET/STRLEN/GETRANGE

部分字符串命令可以用于bitmap

## 地理坐标 GEO

### GEOADD

```
GEOADD location_set lon lat name [lon lat name ...]
```

### GEOPOS

```
GEOPOS location_set name [name...]
```

### GEODIST

```
GEODIST location_set name1 name2 [unit]
```

### GEORADIUS

```
GEORADIUS location_set lon lat radius unit [WITHDIST] [WITHCOORD] [ASC|DESC] [COUNT n]
```

## GEORADIUSBYMEMBER

```
GEORADIUSBYMEMBER location_set name radius unit [WITHDIST] [WITHCOORD] [ASC|DESC] [COUNT n] [WITHHASH]
```

### GEOHASH

```
GEOHASH geo_key member [member...]
```

### ZRANGE/ZCARD/ZSCORE/ZREM

这些zset命令可用于geo

## 流 STREAM

### XADD 

### XTRIM

### XDEL

### XRANGE

### XLEN

### XREVRANGE

### XREAD

### XGROUP

## 数据库命令

### SELECT

SELECT db

### KEYS

KEYS pattern

### SCAN

SCAN cursor

SCAN cursor MATCH pattern

SCAN cursor COUNT number

### HSCAN

```
HSCAN hash cursor [MATCH pattern] [ COUNT number]
```

### SSCAN

```
SSCAN set cursor [MATCH pattern] [ COUNT number]
```

### ZSCAN

```
ZSCAN set cursor [MATCH pattern] [ COUNT number]
```

### RANDOMKEY

```
RANDOMKEY
```

### SORT

```
SORT key [ASC|DESC] [ALPHA] [LIMIT offset count]
SORT key [ [GET pattern] [GET pattern] ... ]
SORT key [BY pattern]
SORT key [STORE destination]
```

### EXSITS

```
EXSITS key1 [ key2 ... ]
```

### DBSIZE

```
DBSIZE
```

### TYPE

```
TYPE key
```

### RENAME/RENAMENX

```
RENAME origin new
RENAMENX origin new 
```

### MOVE

```
MOVE key db
```

### DEL

```
DEL key1 [ key2 ... ]
```

### UNLINK

```
UNLINK key1 [ key2 ... ]
```

### FLUSHDB

```
FLUSHDB [async]
```

### FLUSHALL

```
FLUSHALL [async]
```

### SWAP

```
SWAP x y
```

## KEY过期命令

### EXPIRE/PEXPIRE

```
EXPIRE key seconds
PEXPIRE key seconds
```

### SET EX/PX

```
SET key value EX
SET key value PX
```

### EXPIREAT/PEXPIREAT

```
EXPIREAT key seconds_timestamp
PEXPIREAT key milliseconds_timestamp
```

### TTL/PTTL

```
TTL/PTTL key
```

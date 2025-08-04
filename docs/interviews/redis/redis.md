# Redis 面试题

## 什么是NoSQL?

NoSQL（Not Only SQL）指非关系型数据库。常见NoSQL如下:

* 键值型：Redis、DynamoDB
* 文档数据库：MongoDB、CouchDB
* 宽列数据库: Cassandra、HBase
* 图数据库: Neo4J、Graph

## SQL和No SQL有什么区别？

| 对比项目 | SQL 数据库               | NoSQL 数据库       |
| -------- | ------------------------ | ------------------ |
| 数据模型 | 结构化                   | 非结构化           |
| 事务     | 支持                     | 不完全支持         |
| 性能     | 取决于硬盘速度、索引结构 |                    |
| 扩展     | 读写分离、分库分表       | 横向扩展（加机器） |  

## 什么是Redis？

Redis：REmote DIctionary Server

* Redis是一个使用 C 语言开发的开源 NoSQL 键值型数据库。
* Redis 的数据保存在内存中的，读写速度非常快，并且支持持久化
* Redis被广泛应用于分布式缓存、分布式锁等

## Redis提供了哪些数据类型？

基础数据类型

* LIST
* STRING
* HASH
* SET
* ZSET（Sorted SET）

高级数据类型

* Bitmap
* BitFiled
* Bloom filter
* HyperLogLog
* Geo
* Stream

## Redis为什么这么快？

1. **纯内存操作**,  这是主要原因, 内存IO速度远高于磁盘IO
2. **高效的 I/O 模型**. 使用单线程事件循环配合 I/O 多路复用技术，让单个线程可以同时处理多个网络连接上的 I/O 事件（如读写），避免了多线程模型中的上下文切换和锁竞争问题。
3. **高效的底层数据结构**. Redis提供的数据类型, 其内部实现采用高度优化的编码方式（如 ziplist, quicklist, skiplist, hashtable 等）。Redis 会根据数据大小和类型动态选择最合适的内部编码，以在性能和空间效率之间取得最佳平衡。
4. **高效的通信协议**. Redis 设计的 RESP (REdis Serialization Protocol) 协议, 简单高效、解析性能好，并且是二进制安全的。客户端和服务端之间通信的序列化/反序列化开销很小，有助于提升整体的交互速度。

## Redis那么快为什么不用来当主数据库?

1. 内存成本高
2. Redis的持久化仍然有数据丢失风险

## 除了 Redis，还有哪些分布式缓存方案？

* Memcached
* Dragonfly：一种针对现代应用程序负荷需求而构建的内存数据库，完全兼容 Redis 和 Memcached 的 API
* KeyDB： Redis 的一个高性能分支，专注于多线程、内存效率和高吞吐量
* ValKey：Redis闭源后, 由原 Redis 核心开发者社区发起的一个完全开源、社区主导 的 Redis 分支
* Tendis:  腾讯开源的, 基于RocksDB, 兼容Redis 4.0, 社区不活跃, 不建议使用

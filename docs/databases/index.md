# 数据库学习指南

从业务场景出发，可以先看数据如何组织，再看系统主要承担日常事务还是分析查询。一个产品可以同时出现在多个分类里，例如 MySQL 采用关系模型，也常用于处理在线事务。

## 从哪里开始

- 从表、索引和事务入手，练习关系型数据的建模与查询。[MySQL 笔记](./relational/mysql/)
- 从键值模型和常用数据结构入手，了解缓存和过期机制。[Redis 笔记](./non-relational/redis/)
- 用文档模型组织数据，练习基本的查询与写入操作。[MongoDB 笔记](./non-relational/mongodb/)

## 按数据模型分类

### 关系型数据库

- Oracle
- DB2
- Microsoft SQL Server
- Microsoft Access
- MySQL
- MariaDB
- PostgreSQL

### 非关系型数据库

- Cloudant
- MongoDB
- Redis
- HBase

## 按工作负载分类

### 联机分析处理（OLAP）

- Hive
- Spark SQL
- Flink SQL
- ClickHouse
- Elasticsearch
- Druid
- Kylin
- Presto
- Impala

### 联机事务处理（OLTP）

- Oracle Database
- Microsoft SQL Server
- MySQL
- PostgreSQL
- Amazon Aurora
- SAP HANA

## 专用数据库与存储系统

- 时间序列数据库 InfluxDB
- 空间数据库 PostGIS
- 图数据库，Neo4j、InforGrid
- 文档数据库，MongoDB、CouchDB
- 列存储数据库，Cassandra、HBase
- 键值存储数据库，Memcached、Redis、MemcacheDB

# MySQL 面试题

## NoSQL和SQL的区别？

SQL（Structured Query Language，结构化查询语言），代表数据库：SQL Server，Oracle，MySQL(开源)，PostgreSQL(开源)。
NoSQL（Not Only SQL，不仅仅是SQL），代表数据库：MongoDB，Redis
关系型数据库存储结构化数据。这些数据逻辑上以行列二维表的形式存在，每一列代表数据的一种属性，每一行代表一个数据实体。

## 数据库三大范式是什么？

NF：Normal Form

- 第一范式（1NF）：原子性（每一列都是不可分割的原子数据项, 储的数据应该具有“不可再分性”）
- 第二范式（2NF）：唯一性,消除部分依赖 (消除非主键部分依赖联合主键中的部分字段)（一定要在第一范式已经满足的情况下）
- 第三范式（3NF）：独立性，消除传递依赖(非主键值不依赖于另一个非主键值)

## datetime 和timestamp有什么区别?

## CHAR 和 VARCHAR 有什么区别?

CHAR是长度固定字符串, VARCHAR是可变长度字符串

## 什么是数据库约束?常见数据库约束有哪些?

约束是限制数据的插入.

- 外键约束 foreign key
- 主键约束 primary key
- 默认值约束 default value
- 非空约束 not null
- 唯一约束 unique

## 什么是数据库事务?

事务是逻辑上的一组操作，要么都执行，要么都不执行。
数据库事务是指多个对DB的操作（SQL 语句）构成一个逻辑上的整体,构成这个逻辑上的整体的DB操作：要么全部执行成功, 要么全部不执行.

## 数据库事务有哪些特点(AIDC)?

- 原子性（Atomicity）事务中的操作,要么全部执行成功, 要么全部不执行
- 隔离性（Isolation）并发事务之间相互独立互不干扰
- 持久性（Durability）事务提交后数据会持久化存储, 数据不丢失
- 一致性（Consistency）事务执行前后，数据逻辑总量保持一致

## MySQL的默认隔离级别是什么?

MYSQL的默认隔离级别是: 可重复读 Repeatable Read
Oracle、SQL Server的默认隔离级别是读已提交 Read Committed

## 并发事务带来了什么问题?

- 脏读（Dirty Read）事务A读到了事务B未提交的数据(Insert, Update, Delete)
- 虚读（Virtual Read）又称不可重复读(Unrepeatable Read)
事务A多次读取, 读到了事务B已提交的更新(Update).  **行数据内容变更**.
- 幻读（Phantom read）事务A多次读取, 读到了事务B已提交的增(Insert)删(Delete). **总行数变更**

## 数据库事务的隔离级别有哪些?

- 读未提交(Read Uncommitted)  存在脏读、虚读、幻读
- 读已提交(Read Committed)  解决脏读，存在虚读、幻读
- 可重复读(Repeatable Read)  解决脏读、虚读, 存在幻读(InnoDB已解决)
- 串行化(Serializable)  解决脏读、虚读、幻读，性能较低

| 隔离级别 | 脏读 | 不可重复读 | 幻读               |
| -------- | ---- | ---------- | ------------------ |
| 读未提交 | 存在 | 存在       | 存在               |
| 读已提交 | 解决 | 存在       | 存在               |
| 可重复读 | 解决 | 解决       | 存在(InnoDB已解决) |
| 串行化   | 解决 | 解决       | 解决               |

## 不可重复读和幻读的区别是什么?

侧重点不同, 不可重复读(虚读)侧重数据的内容, 幻读侧重数据的数量

## count(*) count(1) count(列名) 有什么区别?

count(*) 统计表行数

count(1) 统计表函数

count(column) 统计column的非null行数

效率:  
count(*) = count(1)

count(column) 会判断列是否为null

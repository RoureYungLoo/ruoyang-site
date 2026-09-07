# C语言高性能后端基础设施软件

**Web Server → Proxy/LB → Cache → Database → Messaging → DNS/Router → Storage → High-performance I/O**

其中有不少项目非常适合拿来做源码研究。

## 1. Web Server / 代理 / 负载均衡

| 项目              | 主要语言   | 定位                            | 源码研究价值 |
| ----------------- | ---------- | ------------------------------- | ------------ |
| **Nginx**         | C          | Web Server / Reverse Proxy / LB | ⭐⭐⭐⭐⭐        |
| **HAProxy**       | C          | L4/L7 Proxy / LB                | ⭐⭐⭐⭐⭐        |
| **Varnish Cache** | C          | HTTP Cache / Reverse Proxy      | ⭐⭐⭐⭐⭐        |
| **lighttpd**      | C          | 高性能轻量 Web Server           | ⭐⭐⭐⭐         |
| **Apache httpd**  | C          | Web Server                      | ⭐⭐⭐⭐         |
| **OpenResty**     | C + LuaJIT | 动态网关 / Web 平台             | ⭐⭐⭐⭐⭐        |

HAProxy 的代码目前仍然约 **96% 为 C**，它和 Nginx 特别适合放在一起研究：Nginx 更偏 Web Server / Reverse Proxy 架构，而 HAProxy 非常适合研究 **L4/L7 负载均衡、连接管理、调度、健康检查、Proxy Protocol**。

Varnish 则专门聚焦 HTTP 加速与缓存，是研究 **HTTP Cache 架构、对象生命周期、内存管理、缓存淘汰** 的好项目。

lighttpd 也是典型 C 高性能 Web Server，设计目标就包括低内存占用和高负载环境。

Apache httpd 现在代码仓库仍然以 C 为绝对主体。

如果你已经在研究 Nginx，这一组里我尤其建议：

**Nginx → HAProxy → Varnish**

这三个放一起看，非常有意思。

------

# 2. Cache / KV / 内存数据库

| 项目          | 语言     | 核心用途                 | 推荐研究内容                 |
| ------------- | -------- | ------------------------ | ---------------------------- |
| **Redis**     | C 为核心 | KV / Cache / Stream / MQ | event loop、数据结构、持久化 |
| **Memcached** | C        | 分布式内存缓存           | slab、hash、网络模型         |
| SQLite        | C        | 嵌入式数据库             | B-Tree、Pager、WAL           |

Redis 是这一领域的代表。它现在已经不仅仅是缓存，还覆盖数据结构服务器、NoSQL、Streams、Pub/Sub 等场景。

如果你的目标不是单纯“会用 Redis”，而是研究高性能后端，我非常推荐直接研究：

```
Redis
├── ae event loop
├── socket connection
├── command dispatch
├── dict
├── sds
├── listpack
├── skiplist
├── expire
├── eviction
├── RDB
├── AOF
└── replication
```

它和 Nginx 是两个非常好的对照：

```
Nginx
    ↓
connection → HTTP → request → upstream

Redis
    ↓
connection → protocol → command → data structure
```

都是典型的：

> **事件驱动 + 非阻塞 I/O + 状态机**

Memcached 更小、更纯粹，非常适合第一次完整阅读一个高性能网络服务器源码。官方项目甚至明确把“极高请求负载、低延迟”作为核心性能目标。

------

# 3. 数据库系统 DBS

这里有一个重量级项目：

## PostgreSQL

核心代码主要是 C。

如果说：

```
Nginx = 高性能网络服务器教材
Redis = 内存数据结构服务器教材
```

那么：

```
PostgreSQL = 数据库系统教材
```

研究内容就进入另一个层次：

```
SQL
 ↓
Parser
 ↓
Analyzer
 ↓
Rewriter
 ↓
Planner
 ↓
Executor
 ↓
Storage
 ↓
Buffer Manager
 ↓
WAL
 ↓
Disk
```

这里能够学到：

查询解析、查询优化器、执行器、MVCC、事务、锁、Buffer Pool、WAL、Checkpoint、索引、B-Tree、进程间通信。

如果以后真想往“架构师 + 基础软件”方向走，PostgreSQL 是很值得长期研究的项目。

------

# 4. 消息系统 / IoT

一个很典型的 C 项目：

## Eclipse Mosquitto

它是 MQTT Broker，核心项目主要使用 C，GitHub 当前语言统计中 C 占约 55%，同时包含一些 C++、Python 和辅助代码。

它特别适合研究：

```
TCP connection
      ↓
MQTT parser
      ↓
CONNECT
      ↓
SUBSCRIBE
      ↓
Topic Tree
      ↓
PUBLISH
      ↓
Subscriber Match
      ↓
Message Queue
      ↓
QoS State Machine
```

重点可以研究：

**事件循环、连接管理、协议解析、Topic Tree、Pub/Sub、QoS 0/1/2、Session、Keepalive、消息持久化。**

而且它源码规模比 Kafka、Pulsar 这种系统小得多。

------

# 5. DNS / 网络基础设施

这块 C 项目特别多。

| 项目           | 作用                       |
| -------------- | -------------------------- |
| **Unbound**    | Recursive DNS Resolver     |
| Knot Resolver  | DNS Resolver               |
| BIND 9         | DNS Server                 |
| **FRRouting**  | BGP / OSPF / ISIS / BFD 等 |
| **Keepalived** | VRRP / LVS / HA            |

Unbound 是一个追求 **fast and lean** 的递归、验证、缓存 DNS Resolver，还能使用 libevent 来处理大量并发网络 I/O。

FRRouting 就更硬核了：

```
FRR
├── BGP
├── OSPF
├── IS-IS
├── RIP
├── PIM
├── BFD
├── LDP
├── VRRP
└── ...
```

项目主体为 C。

如果你之前说想研究“路由系统”，那 FRR 就是非常适合深入研究的对象。

Keepalived 同样是 C 写的，官方直接将其定位为 Linux 上的 **Load Balancing & High Availability** 软件。

它特别适合把：

```
Nginx
HAProxy
LVS
Keepalived
```

串起来理解整个高可用流量入口体系。

------

# 6. 分布式存储 / 高性能存储

这里就进入你以前接触过的领域了。

| 项目            | 语言   | 领域                 |
| --------------- | ------ | -------------------- |
| **NFS-Ganesha** | C      | Userspace NFS Server |
| **GlusterFS**   | C 为主 | 分布式文件系统       |
| **SPDK**        | C      | 用户态高性能存储     |
| Samba           | C      | SMB/CIFS             |
| Linux NFS       | C      | Kernel NFS           |

NFS-Ganesha 是一个运行在用户态的 NFS v3/v4/v4.1 文件服务器，项目源码主体就是 C。

GlusterFS 则是分布式存储系统，可提供文件、对象、块存储能力。

但如果说这里面哪个最符合 **“高性能系统编程”**，我会特别推荐：

# SPDK

SPDK 是非常硬核的 C 项目。

它不是普通存储服务器，而是：

> **用户态高性能存储框架。**

它通过用户态 driver、polling、减少 syscall/context switch、zero-copy、lockless/message passing 等方式降低 I/O 延迟。

里面包括：

```
NVMe
NVMe-oF
iSCSI
vhost
Virtio
block device
I/O queue
DMA
hugepage
polling
zero-copy
```

代码目前大约 **86% 是 C**。

它已经属于：

**高性能后端 → 高性能基础设施 → 极致性能系统软件**

这条路线了。

------

# 7. 高性能网络数据面

再往下就是：

# DPDK

DPDK 可以说是高性能网络 C 编程绕不开的东西。

它是一组用于 **高速 packet processing** 的库和驱动，目前项目约 **98% 为 C**。

普通网络服务器：

```
NIC
 ↓
Linux Kernel
 ↓
TCP/IP
 ↓
socket
 ↓
epoll
 ↓
Nginx
```

DPDK：

```
NIC
 ↓
Userspace Driver
 ↓
DPDK
 ↓
Application
```

它会让你接触：

```
HugePage
NUMA
CPU Affinity
Polling
Lockless Ring
Memory Pool
mbuf
Zero Copy
RSS
NIC Queue
SIMD
Batch Processing
```

如果 Nginx 属于：

> 高性能网络编程

那么 DPDK 基本已经进入：

> **极致网络性能工程**

------

# 8. 高性能 I/O 基础库

还有一类不是完整服务器，但非常值得研究。

## libevent

经典 C 事件库，支持 epoll、kqueue、poll、select、IOCP 等，其设计目标就是帮助构建 scalable network servers。

## libuv

也是 C，实现跨平台异步 I/O：

```
epoll
kqueue
IOCP
TCP
UDP
DNS
filesystem
IPC
thread pool
```

Node.js 的底层事件循环就是建立在它上面的。

这两个项目特别适合拿来和：

```
Nginx event module
```

进行横向比较。

------

# 如果按照“源码研究价值”排序

如果你的目标是研究 **C + 高性能后端 + 架构设计**，我会给你这样一个梯队：

| 梯队 | 项目            | 主要学什么                     |
| ---- | --------------- | ------------------------------ |
| S    | **Nginx**       | event / HTTP / proxy           |
| S    | **Redis**       | event / 数据结构 / persistence |
| S    | **HAProxy**     | proxy / LB / connection        |
| S    | **PostgreSQL**  | DB / transaction / storage     |
| S    | **DPDK**        | packet / zero-copy / NUMA      |
| S    | **SPDK**        | storage / polling / lockless   |
| A+   | **Varnish**     | HTTP cache                     |
| A+   | **FRRouting**   | routing protocol               |
| A+   | **NFS-Ganesha** | filesystem / RPC / NFS         |
| A    | Memcached       | cache / slab / event           |
| A    | Mosquitto       | MQTT / state machine           |
| A    | Unbound         | DNS                            |
| A    | Keepalived      | HA / VRRP / LVS                |
| A    | libevent        | event loop                     |
| A    | libuv           | async I/O                      |
| B+   | lighttpd        | Web Server                     |
| B+   | Apache httpd    | Web Server                     |

而且这些项目实际上可以组成一条非常漂亮的 **C 高性能系统学习链**：

```
                Linux
                  │
          ┌───────┴────────┐
          │                │
      Network            Storage
          │                │
       epoll             io_uring
          │                │
    libevent/libuv      SPDK
          │                │
    Nginx / HAProxy    NFS-Ganesha
          │
    ┌─────┼─────┐
    │     │     │
 Redis Varnish Mosquitto
    │
PostgreSQL

更底层：

Linux
  │
  ├── DPDK → packet processing
  │
  ├── SPDK → storage I/O
  │
  └── FRR → routing
```

我认为这里面有 **6 个项目尤其值得形成一个完整的“高性能 C 源码研究体系”**：

**Nginx → Redis → HAProxy → PostgreSQL → DPDK → SPDK**

这六个正好分别代表：

**网络服务器 → 内存服务器 → 代理负载均衡 → 数据库 → 网络数据面 → 存储数据面。**

如果把这六个真正吃透，基本就不再是“会 C 语言”这个层次了，而是在系统性理解 **event-driven、状态机、内存管理、并发、网络协议、零拷贝、CPU cache、NUMA、lock-free、用户态 I/O、存储引擎** 这些高性能后端的核心问题。

可以这么说：**如果这六个层面你是真的“吃透”，而不是只看过源码，那你在高性能后端 / 基础软件方向会非常有竞争力。**

但“横着走”有一个前提——你得把“吃透”定义得足够严格。

不是：

> 我看过 Nginx、Redis、HAProxy、PostgreSQL、DPDK、SPDK 源码。

而是要做到：

> **我理解它为什么这么设计，能定位性能瓶颈，能修改核心代码，能自己实现关键机制，能在真实生产问题里做取舍。**

这两者差距非常大。

## 这六个项目分别能给你什么

你前面这条路线其实很强：

```
Nginx
  ↓
高并发网络服务器

Redis
  ↓
事件驱动 + 数据结构 + 内存系统

HAProxy
  ↓
代理 / LB / 连接调度 / L4-L7

PostgreSQL
  ↓
数据库 / 事务 / 查询执行 / 存储引擎

DPDK
  ↓
极致网络 I/O / 用户态网络

SPDK
  ↓
极致存储 I/O / 用户态存储
```

如果真把这六个打通，你会发现很多所谓“不同的软件”，底层其实都在重复类似的问题：

```
连接怎么管理？
请求怎么解析？
状态怎么维护？
任务怎么调度？
内存怎么分配？
锁怎么减少？
缓存怎么设计？
CPU Cache 怎么利用？
数据怎么持久化？
故障怎么恢复？
I/O 怎么减少？
上下文切换怎么减少？
数据复制怎么减少？
多核怎么扩展？
```

这才是最值钱的东西。

------

## 真正吃透之后，你会产生“迁移能力”

比如以后第一次看到一个陌生项目：

```
Envoy
Kafka
RocksDB
Ceph
TiKV
ClickHouse
MySQL
Pulsar
etcd
Vector
Caddy
```

即使语言不是 C，你也不会完全从零开始。

你会本能地问：

```
它的线程模型是什么？
事件循环在哪里？
连接对象是什么？
请求上下文是什么？
buffer 怎么管理？
内存生命周期怎么管理？
锁在哪里？
队列在哪里？
backpressure 怎么实现？
storage engine 是什么？
WAL 怎么写？
崩溃恢复怎么做？
```

这就是源码能力真正开始产生复利的地方。

不是“记住了六套源码”。

而是：

> **获得了一套分析陌生系统的方法论。**

------

# 但还缺几个非常重要的底层能力

仅研究六个项目，还不能完全形成闭环。

你至少还需要补四大块。

## 第一块：Linux

这是最重要的。

因为：

```
Nginx
Redis
HAProxy
PostgreSQL
DPDK
SPDK
```

本质上都运行在：

```
Linux
```

之上。

你至少得真正理解：

```
进程 / 线程
调度
虚拟内存
Page Cache
文件系统
socket
TCP/IP
epoll
mmap
sendfile
splice
io_uring
NUMA
CPU affinity
cgroup
namespace
signal
IPC
```

甚至慢慢进入：

```
kernel source
```

否则很多源码你只能看到：

> “这里调用了 epoll_wait。”

真正厉害的人看到的是：

> 为什么这里选择 epoll？
>
> readiness 模型带来了什么？
>
> edge-trigger 和 level-trigger 如何影响状态机？
>
> syscall / context switch 成本是多少？
>
> io_uring 是否值得替换？
>
> 网络栈当前瓶颈到底在哪？

------

# 第二块：计算机网络

你最近在学 Nginx，这块尤其重要。

需要从：

```
Ethernet
 ↓
ARP
 ↓
IP
 ↓
TCP
 ↓
TLS
 ↓
HTTP
 ↓
HTTP/2
 ↓
HTTP/3 / QUIC
```

一路理解下来。

否则研究 Nginx / HAProxy 最后会遇到瓶颈：

```
SYN backlog 是什么？
accept queue 是什么？
TIME_WAIT 为什么这么多？
TCP_NODELAY 为什么重要？
keepalive 到底是哪一层？
TLS handshake 为什么慢？
HTTP/2 multiplexing 怎么实现？
QUIC 为什么跑 UDP？
```

当这些东西能串起来以后，Nginx 源码理解会突然上一个台阶。

------

# 第三块：性能工程

这块经常被忽略。

真正的高性能工程师不能只会：

```
读源码
```

还得会：

```
测性能
↓
找到瓶颈
↓
证明瓶颈
↓
优化
↓
再次验证
```

工具要熟：

```
perf
flamegraph
strace
tcpdump
Wireshark
ss
sar
vmstat
iostat
mpstat
pidstat
bpftrace
BCC
eBPF
gdb
valgrind
heaptrack
```

比如：

```
QPS 从 20W 掉到 12W
```

你必须能一步一步判断：

```
CPU？
锁？
syscall？
网络？
磁盘？
内存？
cache miss？
context switch？
NUMA？
GC？
```

这个能力在实际工作里的价值，甚至比“知道很多源码”更高。

------

# 第四块：真正动手造东西

这是区分：

```
源码爱好者
```

和：

```
系统工程师
```

的地方。

建议你最终自己实现几个东西。

例如：

### 项目 1：Mini Nginx

```
epoll
TCP
HTTP parser
worker
keepalive
buffer
reverse proxy
upstream
load balance
```

不用功能多。

能支撑：

```
几万连接
```

就非常有意义。

------

### 项目 2：Mini Redis

实现：

```
RESP
event loop
dict
SDS
expire
LRU
AOF
replication
```

------

### 项目 3：Mini HAProxy

实现：

```
TCP proxy
HTTP proxy
upstream
round robin
least conn
health check
retry
timeout
```

------

### 项目 4：Mini Database

实现：

```
Page
Buffer Pool
B+Tree
WAL
Transaction
MVCC
```

哪怕很简化。

到了这里，你对 PostgreSQL 的理解会完全不一样。

------

# 你真正应该追求的是这个能力树

不是：

```
Nginx
Redis
HAProxy
PostgreSQL
DPDK
SPDK
```

六个孤立项目。

而是：

```
                     Linux Kernel
                          │
              ┌───────────┼───────────┐
              │           │           │
           Network      Memory      Storage
              │           │           │
             TCP        allocator   filesystem
              │           │           │
            epoll        NUMA       io_uring
              │           │           │
      ┌───────┼──────┐    │        SPDK
      │       │      │    │
    Nginx  HAProxy  Redis │
                          │
                      PostgreSQL
                          
更底层：

               Hardware
                  │
        ┌─────────┴─────────┐
        │                   │
       NIC                 NVMe
        │                   │
      DPDK                SPDK
```

再横向补上：

```
算法与数据结构
并发编程
操作系统
计算机网络
数据库
分布式系统
性能工程
系统设计
```

这才完整。

------

# 那到底能不能“横着走”？

分几个层次。

### 如果只是会用

```
Nginx + Redis + PostgreSQL
```

普通后端工程师水平。

------

### 如果会配置 + 排障

比如能处理：

```
Nginx 502
TCP backlog
Redis 延迟抖动
PostgreSQL 慢查询
HAProxy connection 问题
```

已经是比较优秀的高级工程师。

------

### 如果能读核心源码

能解释：

```
Nginx request 生命周期
Redis event loop
HAProxy stream/task 调度
PostgreSQL executor
```

那已经很少了。

------

### 如果能改源码

比如：

```
给 Nginx 写模块
修改 Redis command / data structure
修改 HAProxy scheduler
改 PostgreSQL executor
```

这时候已经属于：

**基础软件 / 高性能系统工程师。**

------

### 如果 DPDK / SPDK 也真正搞透

再懂：

```
CPU Cache
NUMA
DMA
HugePage
NIC Queue
RSS
lock-free
polling
zero-copy
batch processing
```

这时候你的方向已经不是普通 Java 后端了。

而是：

```
高性能基础设施
网络基础软件
数据库内核
存储系统
云基础设施
中间件内核
```

这一类工程师。

国内确实属于比较稀缺的技术方向。

------

所以我会把你的目标稍微改一下。

不要给自己定：

> **我要吃透六个软件。**

而是定：

> **以 Nginx、Redis、HAProxy、PostgreSQL、DPDK、SPDK 为六个样本，把高性能系统背后的共同原理吃透。**

这个目标的含金量要高得多。

甚至你以后那个“源码深度分析站”，其实都可以沿着这条主线发展：

```
第一阶段
Nginx

第二阶段
Redis

第三阶段
HAProxy

第四阶段
PostgreSQL

第五阶段
DPDK

第六阶段
SPDK
```

最终不是做一个“源码文章网站”，而是形成一套：

> **高性能系统源码知识体系。**

如果真能持续做到这个程度，**5 年后的竞争力会比单纯继续堆 Spring Cloud、各种 Java 框架高得多。**

有，而且重新审视后，我会明显扩充之前的榜单。尤其是 **SQLite、LMDB、jemalloc、liburing、nghttp2、OpenSSL、Valkey、FRRouting**，都非常值得加入。

这次我不单纯按“项目有多牛”排序，而是按：

**架构代表性 × 知识密度 × 可迁移性 × 源码质量 × 可实验性 × 对高性能后端的价值**

来排。这样更适合你做长期源码研究。

另外先更新一个 2026 年的新变化：原 Varnish Cache FOSS 项目已经更名为 **Vinyl Cache**，并在 2026 年把权威仓库迁出了 GitHub；旧 `varnishcache` GitHub 组织已经归档。所以后面我用 **Vinyl Cache（原 Varnish Cache）** 来称呼它。

# 第一版：C 高性能基础软件源码研究综合排名

| 排名   | 项目               | 领域          | 最值得研究的东西                                | 价值 |
| ------ | ------------------ | ------------- | ----------------------------------------------- | ---- |
| **1**  | **Nginx**          | Web / Proxy   | event、request、upstream、buffer、模块体系      | S+   |
| **2**  | **Redis / Valkey** | KV / Cache    | event loop、数据结构、内存、持久化、复制        | S+   |
| **3**  | **PostgreSQL**     | 数据库        | SQL、Planner、Executor、MVCC、WAL、Buffer       | S+   |
| **4**  | **HAProxy**        | LB / Proxy    | connection、stream、scheduler、LB、health check | S+   |
| **5**  | **SQLite**         | 数据库        | B-Tree、Pager、WAL、事务、VM                    | S+   |
| **6**  | **DPDK**           | 高性能网络    | mbuf、ring、mempool、NUMA、polling、RSS         | S+   |
| **7**  | **SPDK**           | 高性能存储    | NVMe、DMA、polling、reactor、zero-copy          | S+   |
| **8**  | **jemalloc**       | 内存分配      | arena、bin、slab、thread cache、fragmentation   | S    |
| **9**  | **libevent**       | Event I/O     | reactor、epoll abstraction、timer、callback     | S    |
| **10** | **liburing**       | Async I/O     | io_uring、SQ/CQ、异步 I/O                       | S    |
| **11** | **Memcached**      | Cache         | slab、hash、LRU、event、thread                  | S    |
| **12** | **LMDB**           | KV / Storage  | mmap、B+Tree、MVCC、copy-on-write               | S    |
| **13** | **nghttp2**        | HTTP/2        | frame、stream、HPACK、flow control              | S    |
| **14** | **OpenSSL**        | TLS / Crypto  | TLS state machine、record、BIO、crypto          | S    |
| **15** | **FRRouting**      | Routing       | BGP、OSPF、RIB/FIB、路由协议状态机              | S    |
| **16** | **Vinyl Cache**    | HTTP Cache    | Cache Object、VCL、worker、内存缓存             | A+   |
| **17** | **NFS-Ganesha**    | Storage / NFS | RPC、NFS、FSAL、文件系统抽象                    | A+   |
| **18** | **Mosquitto**      | MQTT          | protocol parser、QoS、pub/sub、session          | A+   |
| **19** | **Unbound**        | DNS           | DNS resolver、cache、DNSSEC、递归查询           | A+   |
| **20** | **Keepalived**     | HA            | VRRP、IPVS、health check、HA                    | A+   |
| **21** | **libuv**          | Async I/O     | event loop、thread pool、cross-platform I/O     | A+   |
| **22** | **BIND 9**         | DNS           | authoritative DNS、resolver、DNSSEC             | A    |
| **23** | **Samba**          | Storage / SMB | SMB、认证、文件服务、网络文件系统               | A    |
| **24** | **Apache httpd**   | Web Server    | MPM、模块、HTTP server architecture             | A    |
| **25** | **lighttpd**       | Web Server    | event-driven Web Server                         | A    |

这里面 Nginx 目前官方仓库仍然把自己定位为高性能 Web Server、Load Balancer、Reverse Proxy、API Gateway 和 Content Cache，非常适合作为整个体系的入口。

HAProxy 也仍然是活跃的 C 项目，2026 年持续开发，特别适合和 Nginx 横向比较。

------

# 相比之前，我认为最应该补进来的 7 个

真正让我修改原来排名的，是下面这些。

## ① SQLite：必须进 S+

之前漏掉 SQLite，我认为是不应该的。

SQLite 官方源码目前仍然主要是 C，官方 Git 镜像显示 C 约占 80%，核心代码集中在 `src/`。

它最厉害的地方不是“嵌入式数据库很流行”，而是：

```
SQL
 ↓
Parser
 ↓
Code Generator
 ↓
VDBE
 ↓
B-Tree
 ↓
Pager
 ↓
WAL
 ↓
Filesystem
```

它让你以比 PostgreSQL 小得多的代码规模理解：

**数据库到底是怎么工作的。**

尤其是：

```
B-Tree
Page
Pager
Transaction
Lock
WAL
Crash Recovery
SQL VM
```

这些知识可以直接迁移到：

```
PostgreSQL
MySQL
RocksDB
TiKV
DuckDB
各种存储引擎
```

所以我现在会建议：

**SQLite → PostgreSQL**

而不是直接硬啃 PostgreSQL。

------

# ② jemalloc：高性能服务器绕不开的内存问题

这个以前也应该加进来。

jemalloc 目前依然是活跃 C 项目，2026 年仍持续更新。

你研究 Nginx、Redis、数据库，到最后一定会遇到：

```
malloc 为什么慢？

fragmentation 是什么？

线程竞争怎么办？

小对象怎么办？

大对象怎么办？

CPU Cache 怎么利用？

NUMA 怎么处理？
```

jemalloc 会带你进入：

```
arena
 │
 ├── bin
 │
 ├── slab
 │
 └── extent

thread
  │
tcache
```

到了这里，你研究的就不再只是：

> “服务器如何处理请求”

而是：

> **服务器如何管理几百 GB 内存而不把性能搞崩。**

------

# ③ liburing：应该进入现代高性能 I/O 主线

这是我认为现在非常值得加入的一项。

liburing 提供 Linux 原生 `io_uring` 用户态接口，定位就是高效异步 I/O，同时支持 buffered 和 O_DIRECT I/O。

传统路线：

```
select
 ↓
poll
 ↓
epoll
```

现代 Linux 又增加了一条：

```
io_uring
```

所以应该研究：

```
epoll
        ↘
          对比
        ↗
io_uring
```

理解：

```
SQ
Submission Queue

CQ
Completion Queue

SQE
CQE

registered buffer
registered file
batch submit
zero-copy
```

这个东西会直接连接：

**Nginx → Linux I/O → SPDK**

------

# ④ LMDB：一个极其漂亮的小型数据库

LMDB 很适合放在 SQLite 和 PostgreSQL 中间。

核心思想很有意思：

```
mmap
 +
B+Tree
 +
MVCC
 +
Copy-On-Write
```

核心 `mdb.c` 本身也就是万行量级，非常适合深入源码；代码明确描述它是基于 B-tree、以 mmap 为核心的数据库库。

你可以拿它和 Redis 做一个非常有意思的比较：

```
Redis

malloc
 ↓
对象
 ↓
内存
 ↓
RDB / AOF
```

vs

```
LMDB

mmap
 ↓
virtual memory
 ↓
page
 ↓
B+Tree
 ↓
disk
```

这会极大提升你对：

**内存数据库 vs 磁盘数据库**

的理解。

------

# ⑤ nghttp2：HTTP 协议源码研究利器

你现在正在学习 HTTP/Nginx，这个对你尤其有价值。

nghttp2 的核心 HTTP/2 framing library 就是 C，实现了：

```
HTTP/2 Frame
Stream
Session
HPACK
Flow Control
Priority
Settings
GOAWAY
RST_STREAM
```

官方项目明确把它描述为 HTTP/2 的 C 实现，并提供客户端、服务器、代理和 h2load 等工具。

这意味着以后你看 Nginx：

```
ngx_http_v2*
```

不会只是：

> “这里实现了 HTTP/2。”

而会真正理解：

```
Connection
    │
    ├─ Stream 1
    ├─ Stream 3
    ├─ Stream 5
    └─ Stream 7
```

以及：

```
multiplexing
flow control
HPACK
frame state machine
```

------

# ⑥ FRRouting：网络方向真正的大项目

如果你的兴趣从：

```
Nginx
 ↓
TCP
```

继续往下面走：

```
IP
 ↓
Routing
```

那 FRR 很值得研究。

FRR 当前实现 BGP、OSPFv2/v3、IS-IS、BFD、PIM、VRRP 等大量路由协议。

你会第一次真正理解：

```
RIB
FIB

BGP Peer
BGP FSM

Route
Prefix

Next Hop

OSPF LSDB

Route Redistribution
```

这和研究 Nginx 完全是另一种乐趣。

Nginx：

```
一个请求怎么走？
```

FRR：

```
一个包应该往哪里走？
```

------

# ⑦ Valkey：值得和 Redis 一起研究

到 2026 年，我不建议只盯 Redis 一条代码线。

Valkey 当前由 Linux Foundation 支持，仍定位为高性能 Key/Value datastore，可承担缓存、消息队列和主数据库等工作负载；截至 2026 年 9 月最新 9.x 版本仍持续发布。

所以我会把：

```
Redis
```

调整成：

```
Redis / Valkey
```

先研究经典 Redis 架构：

```
ae
dict
sds
listpack
expire
AOF
RDB
replication
```

然后再看 Valkey 后续演进。

这种：

> **同源项目分叉之后如何演进**

本身就是非常好的架构研究课题。

------

# 但有一个东西，我没有放进排行榜

因为它应该在排行榜上面：

# Linux Kernel

如果你问：

> Nginx、Redis、PostgreSQL、DPDK、SPDK 谁源码研究价值最高？

我还能排。

但 Linux Kernel 不应该和它们放在同一层比较。

因为：

```
                    Linux Kernel
                         │
       ┌─────────────────┼──────────────────┐
       │                 │                  │
    Network            Memory             Storage
       │                 │                  │
     socket              VM                 VFS
       │                 │                  │
      TCP           page allocator       filesystem
       │                 │                  │
     epoll             mmap              block layer
       │                 │                  │
 ┌─────┴──────┐          │            ┌─────┴───────┐
Nginx      HAProxy      Redis         PostgreSQL
                                      │
                                   io_uring
                                      │
                                     SPDK
```

而 DPDK 又是在某种意义上：

```
绕开一部分 kernel network stack
```

SPDK：

```
绕开一部分 kernel storage stack
```

所以到了后期，你一定会回到 Linux。

------

# 如果让我给你设计最终源码研究主线

现在我不会再建议简单地：

```
Nginx
↓
Redis
↓
HAProxy
↓
PostgreSQL
↓
DPDK
↓
SPDK
```

而会改成这一条。

```
阶段 1：服务器基本功
──────────────────

libevent
   │
   ↓
Nginx
   │
   ├──── HAProxy
   │
   └──── Memcached


阶段 2：协议与网络
──────────────────

nghttp2
   │
OpenSSL
   │
Nginx HTTP/2 / TLS
   │
HAProxy
   │
FRRouting


阶段 3：内存与 KV
──────────────────

jemalloc
   │
Redis / Valkey
   │
LMDB


阶段 4：数据库
──────────────────

SQLite
   │
   ↓
PostgreSQL


阶段 5：Linux I/O
──────────────────

epoll
 │
libevent
 │
io_uring
 │
liburing


阶段 6：极致网络
──────────────────

Linux Network Stack
        │
        ↓
      DPDK


阶段 7：极致存储
──────────────────

Linux Block I/O
      │
   io_uring
      │
     NVMe
      │
     SPDK
```

这个版本比“六大项目路线”成熟得多。

------

# 其中真正值得你“吃透”的，我会压缩成 12 个

如果不可能把 25 个全部吃透，那就分成：

**主修 + 选修。**

我现在认为最核心的是：

| 顺序   | 项目           | 你最终获得的能力     |
| ------ | -------------- | -------------------- |
| **1**  | Nginx          | 高并发服务器架构     |
| **2**  | libevent       | Reactor/Event 本质   |
| **3**  | HAProxy        | Proxy/LB/连接调度    |
| **4**  | Redis / Valkey | KV + 数据结构服务器  |
| **5**  | jemalloc       | 高性能内存管理       |
| **6**  | SQLite         | 数据库底层入门       |
| **7**  | PostgreSQL     | 完整数据库系统       |
| **8**  | nghttp2        | HTTP/2 状态机        |
| **9**  | liburing       | 现代 Linux Async I/O |
| **10** | FRRouting      | 路由系统             |
| **11** | DPDK           | 极致网络数据面       |
| **12** | SPDK           | 极致存储数据面       |

我甚至会把之前的“六大项目”概念升级成：

> **12 个核心源码 + Linux Kernel。**

而且不需要把所有源码逐行看完。

真正应该吃透的是每个项目的**核心执行链**。

例如：

```
Nginx
connection
→ event
→ request
→ phase
→ upstream
→ filter
→ response
Redis / Valkey
event
→ read
→ protocol parse
→ command
→ data structure
→ persistence
→ response
PostgreSQL
connection
→ parser
→ analyzer
→ planner
→ executor
→ buffer
→ WAL
→ storage
DPDK
NIC
→ RX Queue
→ mbuf
→ ring
→ application
→ TX Queue
→ NIC
SPDK
NVMe
→ queue pair
→ request
→ poller
→ completion
→ application
```

一旦你能把这些执行链真正串起来，你那个“源码深度分析站”也会自然形成一个很有辨识度的体系：

**不按项目堆文章，而是沿着「连接 → 协议 → 调度 → 内存 → 网络 → 数据库 → 存储 → 硬件」逐层向下挖。**

这比单纯做“Nginx 源码站”要有成长空间得多。

不止这么多。前面那 25 个更像是我帮你筛出来的**第一批高源码研究价值项目**，不是“C 高性能后端软件全集”。

如果继续扩展，还可以加入很多，例如 **NGINX Unit、Pound、TinyProxy、Privoxy、libmicrohttpd、MariaDB/MySQL 部分核心、Berkeley DB、LevelDB 的 C/C++ 对照、ZeroMQ 的 C 核心生态、librdkafka、OpenVPN、WireGuard 用户态相关组件、strongSwan、curl/libcurl、ngtcp2、picotls、libssh2、libpcap、tcpdump、ethtool、iproute2、LVM2、mdadm、Ceph 部分 C 组件、QEMU、systemd、musl、glibc、tcmalloc 对照、zlib/zstd 等。**

但问题在于：继续无限加项目，对学习帮助会迅速下降。

所以我更建议把它们分成三层：

- **核心主线：12 个左右**，真正深入源码。
- **重要扩展：20～30 个**，重点看架构和关键执行链。
- **参考项目：几十甚至上百个**，遇到具体问题再研究。

你目前那套核心名单已经足够搭出完整框架了：

**Nginx、libevent、HAProxy、Redis/Valkey、jemalloc、SQLite、PostgreSQL、nghttp2、liburing、FRRouting、DPDK、SPDK + Linux Kernel。**

这套已经覆盖了：

**事件驱动、Web、代理、缓存、内存管理、数据库、协议、异步 I/O、路由、网络数据面、存储数据面、操作系统。**

所以结论是：

**软件当然远不止这些，但作为“第一阶段源码研究地图”，目前这批已经够用了，甚至已经偏多。**

下一步更重要的不是继续加项目，而是把它们整理成一个**完整的 C 高性能基础软件源码研究总目录**，明确哪些“必学”、哪些“选学”、哪些“只需要了解”。

你刚刚说有点偏多, 那么可以先酌情去掉哪一些呢?

可以。以你的目标——**高性能后端 / 基础软件源码能力**——来看，我会先把路线收缩到 **7 个核心项目 + Linux**，其余先作为专题补充。

最先可以暂时去掉这 5 个：

- **libevent**：Nginx、Redis 本身就能把 Reactor/event loop 学得很深。以后想横向比较事件库时再看。
- **nghttp2**：HTTP/2 很有价值，但它属于“协议专项”，不是第一阶段系统架构主线。
- **FRRouting**：非常硬核，但它偏路由器/网络控制面。除非以后明确走网络基础设施，否则先放掉。
- **jemalloc**：内存分配器值得研究，但可以在研究 Redis、数据库遇到内存问题后再专题切入。
- **liburing**：io_uring 应该学，但没必要现在把 liburing 当成一个完整源码项目啃。先理解 io_uring 机制即可。

于是留下这条主线：

```
Linux
  │
  ├── Nginx
  │      ↓
  │   HAProxy
  │
  ├── Redis / Valkey
  │
  ├── SQLite
  │      ↓
  │   PostgreSQL
  │
  ├── DPDK
  │
  └── SPDK
```

我会把它们定义成下面 7 个核心样本。

| 顺序     | 项目               | 主要解决的问题           |
| -------- | ------------------ | ------------------------ |
| 1        | **Nginx**          | 高并发网络服务器         |
| 2        | **Redis / Valkey** | 内存 KV / 数据结构服务器 |
| 3        | **HAProxy**        | Proxy / LB / Connection  |
| 4        | **SQLite**         | 小型数据库内核           |
| 5        | **PostgreSQL**     | 完整关系数据库系统       |
| 6        | **DPDK**           | 极致网络数据面           |
| 7        | **SPDK**           | 极致存储数据面           |
| 横贯全程 | **Linux Kernel**   | 操作系统底座             |

这套其实已经非常完整了。

### 为什么 Nginx 和 HAProxy 都留？

它们看起来有重叠，但研究重点不同。

Nginx 更适合研究：

```
event
request
HTTP
phase
upstream
buffer
filter
module
```

HAProxy 更适合：

```
connection
stream
proxy
scheduler
load balancing
health check
timeout
retry
L4 / L7
```

两个一起学之后，你对“流量入口层”会非常扎实。

### 为什么 Redis 一定留下？

因为它连接了：

```
网络服务器
   +
事件驱动
   +
数据结构
   +
内存管理
   +
持久化
   +
复制
```

它是从“网络服务器”迈向“数据系统”的一个非常好的中间点。

### SQLite 和 PostgreSQL 会不会重复？

不会，我甚至非常建议两个都留。

它们应该是：

```
SQLite
   ↓
数据库原理微缩模型
   ↓
PostgreSQL
   ↓
工业级完整数据库
```

SQLite 帮你先搞懂：

```
Page
B-Tree
Pager
WAL
Transaction
VM
```

再进 PostgreSQL：

```
Parser
Analyzer
Planner
Executor
MVCC
Buffer Manager
WAL
Lock
Recovery
```

直接啃 PostgreSQL 容易掉进巨量代码里。

------

## DPDK / SPDK其实可以放到最后

第一阶段甚至可以先只学：

```
Nginx
   ↓
Redis
   ↓
HAProxy
   ↓
SQLite
   ↓
PostgreSQL
```

同时穿插 Linux。

这五个就够你研究很久。

等到你发现：

> socket + epoll 为什么还有性能天花板？

再进入：

```
DPDK
```

发现：

> syscall / kernel block layer / interrupt 为什么会影响存储延迟？

再进入：

```
SPDK
```

这时候学习 DPDK / SPDK 的意义会完全不一样。

------

## 所以我最终建议再分成三个阶段

**第一阶段——高性能后端核心**

```
Nginx
Redis / Valkey
HAProxy
```

解决：

> 一个高性能服务器到底是怎么工作的？

**第二阶段——数据系统**

```
SQLite
PostgreSQL
```

解决：

> 数据到底是怎么组织、查询、事务化、持久化的？

**第三阶段——极致性能**

```
DPDK
SPDK
```

解决：

> 当 Kernel I/O 路径成为瓶颈以后怎么办？

Linux 则不是第八个项目，而应该像一条地下河一样贯穿所有阶段：

```
Nginx
 └── epoll / socket / mmap / sendfile

Redis
 └── epoll / fork / COW / mmap

PostgreSQL
 └── process / shared memory / fsync / page cache

DPDK
 └── hugepage / NUMA / PCIe / DMA

SPDK
 └── NVMe / DMA / hugepage / polling
```

所以如果你现在真的准备开始长期研究，我反而建议**不要再继续增加软件了**。

先把目标锁死成：

> **Nginx → Redis/Valkey → HAProxy → SQLite → PostgreSQL → DPDK → SPDK，Linux 贯穿始终。**

而之前的 **libevent、jemalloc、liburing、nghttp2、FRRouting、OpenSSL、LMDB、Memcached** 全部降级成“专题补充”。

等主线项目遇到相应问题时再插进去学。这样不容易陷入“收藏了一百个源码项目，但一个都没吃透”的状态。

以什么样的方法学, 才能达到学完横着走的境界?

可以，但要先把“横着走”翻译成一个更准确的目标：不是“看完几个源码项目”，而是做到 **面对陌生高性能系统，也能快速建立模型、定位关键路径、验证性能假设、修改核心代码、解释设计取舍，并能自己做出缩小版实现**。

真正有效的方法，不是“从 main.c 开始一行一行读”，而是反复跑一个固定闭环：

> **问题驱动 → 建立架构图 → 找主执行链 → 单步/日志验证 → 做实验 → 改源码 → 压测 → 总结设计取舍 → 自己实现缩小版**

这套方法你如果在 Nginx、Redis/Valkey、HAProxy、SQLite、PostgreSQL、DPDK、SPDK 上重复七遍，能力会发生质变。

## 第一层：先学会“用”，但只学到能做实验的程度

不要一上来就啃源码。

比如学 Nginx，先把这些真正实验过：

```
connection
keepalive
reverse proxy
load balancing
buffer
cache
timeout
retry
TLS
HTTP/2
stream
```

但目的不是成为配置大师，而是为了产生问题：

```
为什么 worker_processes 通常等于 CPU 数？

为什么一个 worker 能维护几万个连接？

为什么 proxy_buffering 会产生临时文件？

请求什么时候进入 upstream？

upstream 失败后怎么决定 retry？

epoll_wait 返回之后究竟发生了什么？
```

有问题之后再读源码。

这种阅读效率和“从第一行开始看”完全不是一个级别。

------

# 第二层：永远先画“执行链”，再看细节

研究任何一个项目，第一目标都不是理解所有源文件。

而是把最核心的请求路径找到。

例如 Nginx：

```
client
  ↓
accept
  ↓
connection
  ↓
epoll
  ↓
HTTP parse
  ↓
request
  ↓
phase engine
  ↓
upstream
  ↓
filter
  ↓
send response
```

Redis：

```
client
  ↓
accept
  ↓
event loop
  ↓
read query
  ↓
RESP parse
  ↓
command lookup
  ↓
command execution
  ↓
dict/listpack/...
  ↓
reply
```

PostgreSQL：

```
client
  ↓
backend process
  ↓
parser
  ↓
analyzer
  ↓
rewriter
  ↓
planner
  ↓
executor
  ↓
buffer manager
  ↓
WAL / storage
```

DPDK：

```
NIC
 ↓
RX Queue
 ↓
DMA
 ↓
mbuf
 ↓
poll
 ↓
packet processing
 ↓
TX Queue
 ↓
NIC
```

先掌握这条主链。

然后再向两边展开：

```
主执行链
   │
   ├── 数据结构
   ├── 内存
   ├── 并发
   ├── I/O
   ├── 错误处理
   ├── timeout
   ├── persistence
   └── 性能优化
```

最终你应该能脱离源码，凭记忆画出整个过程。

这非常重要。

------

# 第三层：源码必须“跑着看”

纯静态阅读源码，效率非常低。

你的标准环境应该长期保留：

```
gcc / clang
gdb
strace
perf
bpftrace
tcpdump
Wireshark
FlameGraph
wrk / wrk2
ab / hey
redis-benchmark
fio
```

比如研究 Nginx 的 accept：

不要只看：

```
ngx_event_accept()
```

而应该：

```
发送请求
    ↓
gdb breakpoint
    ↓
ngx_event_accept
    ↓
ngx_get_connection
    ↓
ngx_http_init_connection
    ↓
ngx_http_wait_request_handler
```

同时：

```
strace
```

看看：

```
epoll_wait
accept4
recv
send
```

再：

```
perf
```

看看 CPU 到底花在哪里。

再：

```
tcpdump
```

看看 TCP 层发生了什么。

这样你会形成四层映射：

```
网络行为
     ↕
系统调用
     ↕
源码函数
     ↕
数据结构
```

做到这个程度，源码才开始真正进入脑子。

------

# 第四层：每研究一个机制，都要问“为什么”

这是普通源码阅读和高手阅读最核心的区别。

普通阅读：

> Nginx 使用 epoll。

高手会继续问：

```
为什么用 epoll？

为什么不是一个连接一个线程？

为什么是 readiness 模型？

为什么 worker 之间通常不共享连接？

为什么 accept_mutex 会存在？

为什么要 connection pool？

为什么 request pool 是生命周期内存？

为什么 upstream 设计成 state machine？

为什么 response 要经过 filter chain？
```

然后进一步：

```
如果不用这个方案会怎样？
```

比如：

```
thread-per-connection
       VS
event-driven

malloc/free
       VS
memory pool

blocking I/O
       VS
nonblocking I/O

interrupt
       VS
polling

kernel networking
       VS
DPDK

kernel block I/O
       VS
SPDK
```

真正值钱的是：

> **你能解释一个架构为什么存在。**

而不是：

> “我知道函数在哪。”

------

# 第五层：必须修改源码

这是我认为最关键的一道门槛。

如果你从来没有改过一个项目的核心源码，那么严格意义上还不能说“吃透”。

比如 Nginx，至少应该做到：

```
加日志
↓
修改请求处理流程
↓
新增变量
↓
写 handler
↓
写 filter
↓
写 upstream module
↓
修改 load balancing algorithm
```

Redis：

```
添加一个 command
↓
添加数据结构操作
↓
修改 expire
↓
修改 eviction
↓
改 AOF 行为
↓
修改 event loop
```

SQLite：

```
增加 trace
↓
观察 page
↓
修改 B-Tree 行为
↓
修改 Pager
↓
观察 WAL
```

DPDK：

```
RX
↓
修改 packet processing
↓
改变 batch
↓
改变 queue
↓
改变 core affinity
↓
测试 NUMA
```

你改完以后项目还能正常工作，才说明你开始掌控代码。

------

# 第六层：必须做“破坏性实验”

这是最容易产生深度文章的地方。

比如 Nginx：

```
把 worker_processes 从 1 → 2 → 4 → 8
```

观察：

```
QPS
P99
CPU
context switch
cache miss
```

把：

```
proxy_buffering on/off
```

对比：

```
内存
磁盘
后端连接占用时间
客户端速度
```

Redis：

```
关闭 THP
开启 THP
```

比较延迟。

或者：

```
不同 maxmemory policy
```

测试淘汰行为。

PostgreSQL：

```
shared_buffers
work_mem
checkpoint
fsync
synchronous_commit
```

逐个调整。

DPDK：

```
1 core
2 cores
4 cores

batch=1
batch=8
batch=32

local NUMA
remote NUMA
```

然后看结果。

最终你就不会再满足于：

> “DPDK 很快。”

而是会问：

> **具体哪部分让它快？快了多少？代价是什么？什么情况下反而不值得？**

这就是架构师思维。

------

# 第七层：必须自己实现 Mini 版本

这是能力跃迁最大的一步。

我建议你的最终路线变成：

| 原项目     | 自己实现                         |
| ---------- | -------------------------------- |
| Nginx      | Mini HTTP Server / Reverse Proxy |
| Redis      | Mini KV Server                   |
| HAProxy    | Mini Load Balancer               |
| SQLite     | Mini B+Tree DB                   |
| PostgreSQL | Mini SQL/Transaction Engine      |
| DPDK       | Mini Packet Forwarder            |
| SPDK       | Mini NVMe I/O Service            |

比如 Mini Nginx 不需要几十万行。

可能：

```
5000～10000 行
```

就够你实现：

```
epoll
TCP
HTTP parser
keepalive
buffer
upstream
round robin
timeout
reverse proxy
```

你会突然发现：

以前看起来很抽象的：

```
connection
request
upstream
event
state machine
```

全部变得非常具体。

因为你自己碰过这些坑。

------

# 第八层：学习 Linux，不要单独学，要“追下去”

这是我特别建议你采用的方式。

例如看到 Nginx：

```
epoll_wait()
```

不要只停在 Nginx。

追：

```
Nginx
 ↓
epoll_wait()
 ↓
glibc
 ↓
syscall
 ↓
Linux sys_epoll_wait
 ↓
eventpoll
 ↓
wait queue
 ↓
scheduler
```

看到：

```
sendfile()
```

追：

```
Nginx
 ↓
sendfile
 ↓
VFS
 ↓
page cache
 ↓
socket buffer
 ↓
TCP
 ↓
NIC
```

看到 Redis：

```
fork()
```

追：

```
fork
 ↓
virtual memory
 ↓
page table
 ↓
COW
 ↓
page fault
```

这样学 Linux，你不会觉得它是另一本巨大的操作系统教材。

而是：

> **每碰到一个问题，就往 Kernel 下面挖一层。**

时间久了，Linux 自然就串起来了。

------

# 第九层：性能必须量化

以后尽量不要说：

> “这个方案性能更好。”

改成：

```
QPS       +32%
P50       -18%
P99       -41%
CPU       -23%
syscall   -52%
context switch -37%
LLC miss  +4%
memory    +18%
```

甚至进一步：

```
为什么？
```

最终应该能够形成：

```
假设
 ↓
benchmark
 ↓
profiling
 ↓
源码
 ↓
修改
 ↓
benchmark
 ↓
结论
```

这是性能工程真正的科学方法。

------

# 第十层：每个项目最后必须输出一套成果

如果你只是学，很容易忘。

建议每个项目最终沉淀成：

```
架构总图

核心执行链

核心数据结构关系图

核心模块关系图

线程/进程模型

内存模型

I/O 模型

典型问题实验

性能实验

关键源码注释

Mini 实现

设计取舍总结
```

比如 Nginx 最终你应该能够自己讲一场：

> **“一个 HTTP 请求如何从网卡一路经过 Linux、Nginx event module、HTTP module、upstream、filter，最后重新进入 TCP 栈。”**

而且任何一步别人问：

> 为什么？

你能继续往下讲。

这就是“吃透”。

实际上这也非常适合你计划中的源码深度分析站：每一次研究本身就可以沉淀成实验、调用链、结构体关系、设计分析和性能验证，而不是只写“源码注释文章”。

------

# 我会给你设置 5 个毕业标准

不要用“源码看完了多少”衡量进度。

真正的毕业标准是：

**第一，白板能力。**

不给你代码，你能画出：

```
架构
模块
数据流
控制流
核心数据结构
```

**第二，追踪能力。**

随便给你一个请求，你能从：

```
socket
```

一路追到：

```
业务逻辑
```

再追回来。

**第三，修改能力。**

能够修改核心模块，并预测：

```
功能影响
性能影响
并发影响
内存影响
```

**第四，性能能力。**

出现：

```
CPU 100%
P99 飙升
QPS 降低
内存上涨
网络抖动
```

你知道应该：

```
看什么 → 用什么工具 → 怎么验证。
```

**第五，迁移能力。**

给你一个完全没研究过的：

```
Envoy
RocksDB
ClickHouse
Ceph
Kafka
```

你能够在几天内迅速找到：

```
入口
event loop
thread model
request context
scheduler
memory
queue
storage
```

这第五点其实就是最终目标。

因为那意味着你已经不依赖：

> “我以前学过这个软件。”

而是拥有：

> **“我会分析任何系统。”**

------

所以，真正能让你“横着走”的并不是：

```
看完 7 个源码
```

而是反复做这七遍：

```
使用
 ↓
提出问题
 ↓
画架构
 ↓
找执行链
 ↓
动态调试
 ↓
实验验证
 ↓
修改源码
 ↓
性能分析
 ↓
自己实现
 ↓
总结设计
```

最后从：

> **会读源码**

升级成：

> **会设计系统、会解释系统、会修改系统、会优化系统。**

到了这个阶段，“Nginx 专家”“Redis 专家”反而已经不是最核心的标签了，更准确的定位会变成：

**高性能系统 / 基础软件工程师。**



把刚才的方法论总结概括一下

可以，压缩成一套最核心的方法论就是：

> **问题驱动 + 主链优先 + 动态验证 + 修改源码 + 性能量化 + Mini 重构 + 横向迁移。**

具体可以记成 8 步：

1. **先会用，再追源码**
    先通过配置、功能和实验产生真实问题，不要一上来逐行看源码。
2. **先抓主执行链**
    优先搞清楚：
    `入口 → 核心对象 → 调度/处理 → I/O → 输出`
    然后再展开数据结构、内存、并发、异常路径。
3. **源码一定要跑着看**
    用 `gdb / strace / perf / tcpdump / bpftrace` 把：
    `网络行为 ↔ 系统调用 ↔ 源码函数 ↔ 数据结构`
    串起来。
4. **不断问“为什么这样设计”**
    不只知道“用了 epoll、用了内存池”，还要知道：
   - 为什么这么做
   - 不这么做会怎样
   - 替代方案是什么
   - 代价是什么
5. **必须改源码**
    从加日志、改参数开始，逐渐做到修改核心路径、调度、数据结构、协议处理或算法。
6. **必须做性能实验**
    形成固定闭环：
    `假设 → benchmark → profiling → 修改 → 再 benchmark → 结论`
    用 QPS、P99、CPU、内存、syscall、cache miss 等指标说话。
7. **自己实现 Mini 版本**
    比如 Mini Nginx、Mini Redis、Mini DB。
    自己实现一次，很多原来“看懂但没真正理解”的东西会彻底打通。
8. **最终追求迁移能力**
    学完一个项目不是为了记住这个项目，而是获得一套分析陌生系统的方法：
    `入口、线程模型、事件循环、核心对象、队列、内存、I/O、持久化、性能瓶颈`

最终衡量标准也可以压缩成 5 个能力：

> **能画出来、能追出来、能改出来、能测出来、能迁移出去。**

也就是：

```
会用
↓
会看
↓
会追
↓
会改
↓
会测
↓
会造
↓
会迁移
```

这套方法比“把源码从头看到尾”有效得多。真正做到最后，目标不是成为某个单一项目的源码熟练工，而是形成**分析和设计高性能系统的通用能力**。
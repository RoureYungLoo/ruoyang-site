# RocketMQ 快速入门

# 基本概念

主题

## 消息

- 消息
- 消息类型
  - 普通消息
  - 顺序消息
  - 事务消息
  - 定时消息
  - 延时消息
- 消息队列
- 消息视图
- 消息标签
- 消息位点
- 消费位点
- 消息索引
- 消息过滤
- 消息轨迹
- 消息堆积

## 生产者

- 生产者

## 消费者

- 消费者
- 消费者分组
- 消费结果
- 重置消费位点

## 事务

- 事务检查器
- 事务状态

## 订阅关系

# 本地部署

安装jdk和maven

# 

```bash
JAVA_HOME=/usr/share/jdk1.8.0_202/
CLASSPATH=.:$JAVA_HOME/lib/dt.jar:/$JAVA_HOME/lib/tools.jar:$JAVA_HOME/jre/lib/rt.jar

MAVEN_HOME=/usr/share/apache-maven-3.8.9/
PATH=$PATH:$JAVA_HOME/bin/:$MAVEN_HOME/bin/

export JAVA_HOME MAVEN_HOME CLASSPATH PATH
```

验证

```bash
[root@192 ~]# java -version
java version "1.8.0_202"
Java(TM) SE Runtime Environment (build 1.8.0_202-b08)
Java HotSpot(TM) 64-Bit Server VM (build 25.202-b08, mixed mode)
[root@192 ~]# mvn -v
Apache Maven 3.8.9 (e26b057cc3a17459358ef53e4d0e2e381bf08a1c)
Maven home: /usr/share/apache-maven-3.8.9
Java version: 1.8.0_202, vendor: Oracle Corporation, runtime: /usr/share/jdk1.8.0_202/jre
Default locale: en_US, platform encoding: UTF-8
OS name: "linux", version: "5.14.0-604.el9.x86_64", arch: "amd64", family: "unix"
```

注意maven镜像配置settings.xml

```xml
<mirror>  
      <id>alimaven</id>  
      <name>aliyun maven</name>  
      <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
      <mirrorOf>central</mirrorOf>          
</mirror>
```

下载[RocketMQ源码包](https://dist.apache.org/repos/dist/release/rocketmq/5.3.2/rocketmq-all-5.3.2-source-release.zip)

```bash
wget https://dist.apache.org/repos/dist/release/rocketmq/5.3.2/rocketmq-all-5.3.2-source-release.zip
```

编译

```bash
unzip rocketmq-all-5.3.2-source-release.zip
cd rocketmq-all-5.3.2-source-release/
mvn -Prelease-all -DskipTests -Dspotbugs.skip=true clean install -U
```

进入编译后的产物目录

```bash
cd distribution/target/rocketmq-5.3.2/rocketmq-5.3.2
```

启动nameserver

```bash
nohup sh bin/mqnamesrv &
tail -f ~/logs/rocketmqlogs/namesrv.log
```

启动Broker和proxy

```bash
nohup sh bin/mqbroker -n localhost:9876 --enable-proxy &
tail -f ~/logs/rocketmqlogs/proxy.log 
```

# 命令行测试

```bash
export NAMESRV_ADDR=localhost:9876
sh bin/tools.sh org.apache.rocketmq.example.quickstart.Producer
sh bin/tools.sh org.apache.rocketmq.example.quickstart.Consumer
```

# SDK测试



# 领域模型

## 消息生产

### 生产者Producer

构建消息, 传输消息到服务端

定义: 

- 传输行为
  - 发送方式: 同步传输 / 异步传输
  - 批量发送
  - 事务行为
- 生产者 和 主题 是 ***\*多对多\**** 关系



内部属性：

- 客户端ID
- 通信参数
  - 接入点信息
  - 身份认证信息
  - 请求超时时间
- 预绑定主题列表
- 事务检查器
- 发送重试策略

## 消息存储

### 主题Topic

定义:

- 数据分类隔离
- 数据身份和权限

内部属性:

- 主题名称
- 队列列表
- 消息类型: Normal / FIFO / Delay / Transaction

手动创建:

# 

```bash
 sh mqadmin updateTopic 
    -n <nameserver_address> 
    -t <topic_name> 
    -c <cluster_name> 
    -a +message.type=<message_type>
```

### 队列 MessageQueue

定义:

- 消息存储和传输的实际容器
- 默认顺序存储消息
- 支持流式操作

内部属性:

- 读写权限
  - 6 读写
  - 4 只读
  - 2 只写
  - 0 不可读写

### 消息Message

定义:

- 最小数据传输单元

特点:

- 消息不可变, 所有消费者获取的消息都是只读的
- 消息持久化默认开启

内部属性:

- 主题名称
- 消息类型
- 消息队列
- 消息位点
- 消息ID
- 索引Key列表
- 过滤标签Tag
- 定时时间
- 消息发送时间
- 消息保存时间戳
- 消息重试次数
- 业务自定义属性
- 消息负载

约束:

- 普通/顺序消息: 最大限制4MB
- 事务/延时/定时消息: 最大限制64KB

## 消息消费

## 

### 消费者 Consumer

接收并处理消息

消费者端的传输行为:

- 消费者身份
- 消费者类型
- 消费者本地运行配置

内部属性:

- 消费者分组名称
- 客户端ID
- 通信参数
- 预绑定订阅关系列表
- 消费监听器

### 消费者分组 Consumer Group

承载多个消费行为一致的消费者的负载均衡分组。

定义:

- 同一个消费者组
  - 订阅关系
  - 投递顺序性
  - 消费重试策略

内部属性:

- 消费者分组名称
- 投递顺序性
- 消费重试策略

### 订阅关系 Subscription

消费者获取消息、处理消息的规则和状态配置。

订阅关系可以控制的传输行为:

- 消息过滤规则
- 消费状态

订阅关系判断原则:

- **不同消费者分组对同一个主题的订阅相互独立**
- **同一个消费者分组对不同主题的订阅相互独立**

内部属性:

- 过滤类型
  - TAG过滤
  - SQL92过滤
- 过滤表达式

## 消息传输

### 点对点模型(队列模型)

- 消费匿名
- 一对一消费.每一条消息都只会被唯一一个消费者处理

### 发布订阅模型

- 消费独立
- 一对多通信

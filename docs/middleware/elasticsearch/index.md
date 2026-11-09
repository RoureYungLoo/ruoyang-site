# Elastic Search 快速入门

- [Quick start | ElasticSearch Guide](https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started.html)
- [什么是 ElasticSearch?](https://elasticsearch.bookhub.tech/intro/)
- [可伸缩性：集群、节点、分片 ](https://learnku.com/docs/elasticsearch73/7.3/scalability-and-resilience-clusters-nodes-and-shards/6448)

# ES是什么？

分布式搜索和分析引擎。

为各种数据类型提供接近实时的搜索和分析。

倒排索引的数据结构是什么？

 BKD 树是什么？

ES动态映射是什么？

Apache Lucene 搜索引擎库、

REST API

Kibana

## 数据搜索

结构化查询、全文查询、复合查询...

单词搜索、短语搜索、相似性搜索、前缀搜索...

## 数据分析

ES聚合是什么操作？

ES索引是什么？

分片是什么？分为***\*主分片\****和***\*副本\****

## 容灾

CCR是什么？跨集群复制

ES 桶是什么？ES  metrics是什么？

```bash
curl -X<VERB> '<PROTOCOL>://<HOST>:<PORT>/<PATH>?<QUERY_STRING>' -d '<BODY>'
```

# 安装ES

[ES支持列表](https://www.elastic.co/cn/support/matrix)

```bash
JAVA_HOME=/usr/local/java/
JRE_HOME=/usr/local/java/jre/
CLASSPATH=.:/$JRE_HOME/lib/rt.jar:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar

PATH=$PATH:$JAVA_HOME/bin/:$CLASSPATH

export PATH JAVA_HOME JRE_HOME CLASSPATH
```

```
yum install java-17-openjdk
```

[使用 RPM 安装 Elasticsearch](https://elasticsearch.bookhub.tech/set_up_elasticsearch/installing_elasticsearch/rpm)

通过二进制方式安装

```
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.17.24-linux-x86_64.tar.gz
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.17.24-linux-x86_64.tar.gz.sha512
shasum -a 512 -c elasticsearch-7.17.24-linux-x86_64.tar.gz.sha512 
tar -xzf elasticsearch-7.17.24-linux-x86_64.tar.gz
cd elasticsearch-7.17.24/ 
```

通过rpm方式安装

```
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.17.24-x86_64.rpm
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.17.24-x86_64.rpm.sha512
shasum -a 512 -c elasticsearch-7.17.24-x86_64.rpm.sha512 
rpm --install elasticsearch-7.17.24-x86_64.rpm

systemctl daemon-reload
systemctl enable elasticsearch.service
systemctl start elasticsearch.service
systemctl stop elasticsearch.service
```

通过docker安装

```
# 创建网络
docker network create elastic

# 拉取镜像
docker pull docker.elastic.co/elasticsearch/elasticsearch:8.15.1
docker pull docker.elastic.co/elasticsearch/elasticsearch:7.11.2

# 单节点
docker run 
    --name es01 
    --net elastic 
    -p 9200:9200 
    -p 9300:9300 
    -it 
    -m 1GB 
    -e "discovery.type=single-node" 
    docker.elastic.co/elasticsearch/elasticsearch:8.15.1

docker run -p 9200:9200 -p 9300:9300 
           -e "discovery.type=single-node" 
            docker.elastic.co/elasticsearch/elasticsearch:7.11.2
```

通过docker compose安装（至少需要4GB内存）

```
version: '2.2'
services:
  es01:
    image: docker.elastic.co/elasticsearch/elasticsearch:7.11.2
    container_name: es01
    environment:
      - node.name=es01
      - cluster.name=es-docker-cluster
      - discovery.seed_hosts=es02,es03
      - cluster.initial_master_nodes=es01,es02,es03
      - bootstrap.memory_lock=true
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
    ulimits:
      memlock:
        soft: -1
        hard: -1
    volumes:
      - data01:/usr/share/elasticsearch/data
    ports:
      - 9200:9200
    networks:
      - elastic
  es02:
    image: docker.elastic.co/elasticsearch/elasticsearch:7.11.2
    container_name: es02
    environment:
      - node.name=es02
      - cluster.name=es-docker-cluster
      - discovery.seed_hosts=es01,es03
      - cluster.initial_master_nodes=es01,es02,es03
      - bootstrap.memory_lock=true
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
    ulimits:
      memlock:
        soft: -1
        hard: -1
    volumes:
      - data02:/usr/share/elasticsearch/data
    networks:
      - elastic
  es03:
    image: docker.elastic.co/elasticsearch/elasticsearch:7.11.2
    container_name: es03
    environment:
      - node.name=es03
      - cluster.name=es-docker-cluster
      - discovery.seed_hosts=es01,es02
      - cluster.initial_master_nodes=es01,es02,es03
      - bootstrap.memory_lock=true
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
    ulimits:
      memlock:
        soft: -1
        hard: -1
    volumes:
      - data03:/usr/share/elasticsearch/data
    networks:
      - elastic

volumes:
  data01:
    driver: local
  data02:
    driver: local
  data03:
    driver: local

networks:
  elastic:
    driver: bridge
```

启动集群：`docker-compose up`

查看状态：`curl -X GET "localhost:9200/_cat/nodes?v=true&pretty"`

配置修改：

```
node.name: node-1
network.host: 0.0.0.0
http.port: 9200
cluster.initial_master_nodes: ["node-1" ]
```

中文分词器

https://release.infinilabs.com/analysis-ik/stable/elasticsearch-analysis-ik-7.17.24.zip

解压后放到：/usr/share/elasticsearch/plugins/analysis-ik目录下：

# 启动ES

```
./bin/elasticsearch
```

# 集群状态

http://192.168.42.129:9200/_cat/health?v=true

curl常见操作

# 入门操作

插入数据

批量插入

```
# account.json 是一个文件
curl -H "Content-Type: application/json" 
    -XPOST "localhost:9200/bank/_bulk?pretty&refresh" 
    --data-binary "@accounts.json"
```

搜索数据

聚合分析

维度聚合

# kibana安装

版本尽量和ES保持一致

[Past Releases of Elastic Stack Software | Elastic](https://www.elastic.co/cn/downloads/past-releases)

https://artifacts.elastic.co/downloads/kibana/kibana-7.17.24-x86_64.rpm

```
curl -L -O https://artifacts.elastic.co/downloads/kibana/kibana-7.11.2-linux-x86_64.tar.gz
tar xzvf kibana-7.11.2-linux-x86_64.tar.gz
cd kibana-7.11.2-linux-x86_64/
./bin/kibana
```

修改部分配置，路径kibana/config/kibana.yml

```
server.port: 5601         #kibana端口
server.host: "0.0.0.0"   #所有主机都能访问，或者也可以指定一个ip
elasticsearch.hosts: "http://es服务公网IP:9200"     #配置es的访问地址     
kibana.index: ".kibana"
i18n.locale: "zh-CN"
```

或者使用rpm包安装

```
wget https://artifacts.elastic.co/downloads/kibana/kibana-8.15.1-x86_64.rpm
```

参考链接：

[记录在linux上单机elasticsearch8和kibana8 - huan1993 - 博客园 (cnblogs.com)](https://www.cnblogs.com/huan1993/p/16842127.html)

[windows环境下elasticsearch8.1.0+kibana8.1.0安装教程（用户密码版）_fatal error: [config validation of [elasticsearch\]-CSDN博客](https://blog.csdn.net/qq_41985662/article/details/123647941)

[Linux下Kibana的安装、配置及开机自启动-阿里云开发者社区 (aliyun.com)](https://developer.aliyun.com/article/789870)

# ES配置

三个，分别是：

- `elasticsearch.yml` 用于配置 Elasticsearch
- `jvm.options` 用于配置 Elasticsearch JVM 设置
- `log4j2.properties` 用于配置 Elasticsearch 日志记录

可以使用环境变量：

```
node.name:    ${HOSTNAME}
network.host: ${ES_NETWORK_HOST}
```

## 重要配置

```
cluster.name
node.name
path.data
path.logs

discovery.seed_hosts
cluster.initial_master_nodes
# jvm heap size
# jvm heap dump path
# jvm gc log
```

# 安全设置

[elasticSearch 设置用户名密码 && 查询_elasticsearch密码怎么看-CSDN博客](https://blog.csdn.net/mengo1234/article/details/104989382)

# LogStash

https://www.elastic.co/cn/downloads/past-releases/logstash-7-17-24

通过rpm包的方式安装

https://artifacts.elastic.co/downloads/logstash/logstash-7.17.24-x86_64.rpm

```
curl -O 
    https://artifacts.elastic.co/downloads/logstash/logstash-8.15.1-x86_64.rpm
rpm -ivh logstash-8.15.1-x86_64.rpm

# 下载软件包
wget https://artifacts.elastic.co/downloads/logstash/logstash-7.17.24-x86_64.rpm
# 安装
rpm -ivh logstash-7.17.24-x86_64.rpm
# 配置文件
cp /etc/logstash/logstash-sample.conf /etc/logstash/conf.d/logstash.conf 

systemctl daemon-reload
systemctl enable --now logstash
```

# 资源推荐

## 官方资源

[Elastic — The Search AI Company | Elastic](https://www.elastic.co/cn/)

[Documentation (elastic.co)](https://www.elastic.co/docs)

[简体中文 | Elastic](https://www.elastic.co/guide/cn/index.html)

[Elasticsearch 翻译说明 | Elasticsearch 中文文档 (bookhub.tech)](https://elasticsearch.bookhub.tech/)

## 三方资源

https://www.cnblogs.com/konghuanxi/p/18094055

https://www.cnblogs.com/buchizicai/p/17093719.html



[《Elasticsearch中文文档》 | Elasticsearch 技术论坛 (learnku.com)](https://learnku.com/docs/elasticsearch73/7.3)

[REST API | Elasticsearch 中文文档 (bookhub.tech)](https://elasticsearch.bookhub.tech/rest_apis/)

[Elasticsearch 教程 - 菜鸟教程 (cainiaojc.com)](https://www.cainiaojc.com/elasticsearch/)

[全文搜索引擎 Elasticsearch 入门教程 - 阮一峰的网络日志 (ruanyifeng.com)](https://ruanyifeng.com/blog/2017/08/elasticsearch.html)

[5.2.15. IP Range Aggregation | 第五章. Aggregations |《Elasticsearch中文文档 7.3》| Elasticsearch 技术论坛 (learnku.com)](https://learnku.com/docs/elasticsearch73/7.3/5215-ip-range-aggregation/8051)

[入门指南 · Elasticsearch 中文文档 (kilvn.com)](https://docs.kilvn.com/elasticsearch/)

[Elasticsearch 入门 | Elasticsearch 中文文档 (bookhub.tech)](https://elasticsearch.bookhub.tech/getting_started/)

[Elasticsearch中文文档——基于v7.11 - 《elasticsearch 中文文档帮助手册教程 V7.11》 - 极客文档](https://geekdaxue.co/read/elasticsearch-doc-zh-v7.11/README.md#apcj6p)

[序言 | Elasticsearch: 权威指南 | Elastic](https://www.elastic.co/guide/cn/elasticsearch/guide/current/foreword_id.html)zehttps://cloud.tencent.com/developer/article/1804665



https://cloud.tencent.com/developer/article/1804665

## ELK整合

https://www.cnblogs.com/hanzeng1993/p/15078477.html

https://blog.csdn.net/Baldprogrammer/article/details/119429530
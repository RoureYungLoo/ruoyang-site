# BIG DATA 大数据

## 技术栈一览
从数据的采集，传输，存储，计算，分析，应用等方面，来介绍

### 1. 数据采集与传输

  - **Kafka**：高吞吐分布式消息队列，用于日志/事件流传输。
  - **Pulsar**：新一代消息/流平台，支持多租户。
  - **Flume**：日志采集、聚合、传输，常用于日志入HDFS。
  - **Logstash / Filebeat**：Elastic 生态日志采集。
  - **DataX / SeaTunnel**：异构数据源离线同步工具。
  - **Flink CDC / Canal / Maxwell**：数据库变更数据捕获（CDC），实时同步。

### 2. 数据存储

- **HDFS**：Hadoop 分布式文件系统，大数据存储基础。
- **对象存储**：S3、MinIO、OSS，云原生数据湖存储。
- **HBase**：基于 HDFS 的列式 NoSQL，适合海量随机读写。
- **Cassandra**：分布式宽列 NoSQL，高可用。
- **MongoDB**：文档型 NoSQL。
- **Elasticsearch**：分布式搜索与分析引擎，常用于日志检索。
- **ClickHouse / Doris / StarRocks**：高性能 OLAP 存储与分析。
- **数据湖格式**：Apache Iceberg、Apache Hudi、Delta Lake，提供事务、增量读写、时间旅行等能力。

### 3. 数据计算与处理

- **MapReduce**：Hadoop 早期批处理模型，已逐步被替代。
- **Spark**：主流批处理/微批处理引擎，支持 SQL、ML、Graph。
- **Flink**：主流实时流处理引擎，支持事件时间、精确一次语义。
- **Storm**：早期实时计算框架。
- **Hive**：SQL on Hadoop，离线数仓核心。
- **Tez**：Hive 执行引擎优化。
- **Presto / Trino**：联邦查询引擎，跨数据源交互式分析。
- **Impala**：Hadoop 上的交互式 SQL 引擎。

### 4. 数据查询与分析

- **Hive SQL / Spark SQL / Flink SQL**：大数据 SQL 分析入口。
- **Presto / Trino**：跨源即席查询。
- **ClickHouse / Doris / StarRocks**：OLAP 多维分析。
- **Kylin**：预计算 OLAP 引擎。
- **Druid**：实时分析数据库。

### 5. 资源管理与调度

- **YARN**：Hadoop 资源管理，调度 MapReduce、Spark 等任务。
- **Kubernetes**：云原生资源编排，越来越多大数据组件容器化运行。
- **Mesos**：早期通用资源管理框架。
- **Volcano / YuniKorn**：K8s 上的批处理/大数据任务调度器。

### 6. 任务调度与工作流

- **Apache Airflow**：Python 工作流调度平台。
- **DolphinScheduler**：国产分布式可视化调度。
- **Azkaban / Oozie**：Hadoop 生态传统工作流调度。

### 7. 数据集成与 ETL/ELT

- **SeaTunnel / DataX**：数据同步与集成。
- **Flink CDC**：实时 CDC 同步。
- **dbt**：数据仓库转换建模工具。
- **Kettle / NiFi**：传统 ETL 工具。

### 8. 协调与服务发现

- **ZooKeeper**：分布式协调、配置管理、选举。
- **etcd**：云原生场景下的分布式键值存储与协调。

### 9. 数据治理与元数据

- **Apache Atlas**：元数据管理与数据血缘。
- **DataHub / Amundsen**：现代元数据管理平台。
- **Apache Ranger**：统一权限管控。
- **Kerberos**：大数据集群认证。
- **Apache Knox**：集群边界网关。

### 10. 可视化与 BI

- **Superset**：开源可视化 BI 平台。
- **Grafana**：监控与指标可视化。
- **Tableau / Power BI / FineBI / Metabase**：商业或开源 BI 工具。

### 11. 监控运维

- **Prometheus + Grafana**：集群与任务监控。
- **Zabbix / Nagios**：传统运维监控。
- **EFK / ELK**：日志采集检索分析栈。

### 12. 开发语言与工具

- **Java / Scala**：大数据核心组件主要开发语言。
- **Python**：数据科学、Spark/Flink API、Airflow 等常用。
- **SQL**：数据仓库与分析通用语言。

## 精简

| 类别            | 最主流技术               | 说明                                                |
| :-------------- | :----------------------- | :-------------------------------------------------- |
| 数据采集与传输  | **Kafka**                | 事实标准消息队列/事件流平台                         |
| 数据存储        | **HDFS**                 | 传统自建大数据平台存储底座；云上可用对象存储 S3/OSS |
| 批计算          | **Spark**                | 最主流的批处理/微批处理引擎                         |
| 流计算          | **Flink**                | 实时计算事实标准                                    |
| 交互式分析/OLAP | **ClickHouse**           | 高性能分析型数据库，社区活跃                        |
| 资源管理与调度  | **YARN**                 | Hadoop 生态标准；云原生趋势用 Kubernetes            |
| 工作流调度      | **Airflow**              | 最通用的工作流编排平台                              |
| 数据集成/CDC    | **Flink CDC**            | 实时数据同步主流方案                                |
| 分布式协调      | **ZooKeeper**            | 分布式协调与元数据管理标准                          |
| 元数据与治理    | **Apache Atlas**         | Hadoop 生态元数据与血缘管理                         |
| 可视化 BI       | **Superset**             | 最流行的开源 BI 平台                                |
| 监控运维        | **Prometheus + Grafana** | 集群与任务监控主流组合                              |
| 开发语言        | **SQL**                  | 数据分析与数仓核心语言；Java/Scala/Python 按需配合  |

import{_ as s,o as n,c as e,ag as p}from"./chunks/framework.DXGyWiRo.js";const k=JSON.parse('{"title":"Elastic Search 快速入门","description":"","frontmatter":{},"headers":[],"relativePath":"middleware/es/index.md","filePath":"middleware/es/index.md","lastUpdated":1777478697000}'),l={name:"middleware/es/index.md"};function t(i,a,c,r,o,h){return n(),e("div",null,[...a[0]||(a[0]=[p(`<h1 id="elastic-search-快速入门" tabindex="-1">Elastic Search 快速入门 <a class="header-anchor" href="#elastic-search-快速入门" aria-label="Permalink to &quot;Elastic Search 快速入门&quot;">​</a></h1><ul><li><a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started.html" target="_blank" rel="noreferrer">Quick start | ElasticSearch Guide</a></li><li><a href="https://elasticsearch.bookhub.tech/intro/" target="_blank" rel="noreferrer">什么是 ElasticSearch?</a></li><li><a href="https://learnku.com/docs/elasticsearch73/7.3/scalability-and-resilience-clusters-nodes-and-shards/6448" target="_blank" rel="noreferrer">可伸缩性：集群、节点、分片 </a></li></ul><h1 id="es是什么" tabindex="-1">ES是什么？ <a class="header-anchor" href="#es是什么" aria-label="Permalink to &quot;ES是什么？&quot;">​</a></h1><p>分布式搜索和分析引擎。</p><p>为各种数据类型提供接近实时的搜索和分析。</p><p>倒排索引的数据结构是什么？</p><p>BKD 树是什么？</p><p>ES动态映射是什么？</p><p>Apache Lucene 搜索引擎库、</p><p>REST API</p><p>Kibana</p><h2 id="数据搜索" tabindex="-1">数据搜索 <a class="header-anchor" href="#数据搜索" aria-label="Permalink to &quot;数据搜索&quot;">​</a></h2><p>结构化查询、全文查询、复合查询...</p><p>单词搜索、短语搜索、相似性搜索、前缀搜索...</p><h2 id="数据分析" tabindex="-1">数据分析 <a class="header-anchor" href="#数据分析" aria-label="Permalink to &quot;数据分析&quot;">​</a></h2><p>ES聚合是什么操作？</p><p>ES索引是什么？</p><p>分片是什么？分为****主分片*<em><strong>和</strong></em>*副本****</p><h2 id="容灾" tabindex="-1">容灾 <a class="header-anchor" href="#容灾" aria-label="Permalink to &quot;容灾&quot;">​</a></h2><p>CCR是什么？跨集群复制</p><p>ES 桶是什么？ES metrics是什么？</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -X</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">VERB</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&lt;PROTOCOL&gt;://&lt;HOST&gt;:&lt;PORT&gt;/&lt;PATH&gt;?&lt;QUERY_STRING&gt;&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&lt;BODY&gt;&#39;</span></span></code></pre></div><h1 id="安装es" tabindex="-1">安装ES <a class="header-anchor" href="#安装es" aria-label="Permalink to &quot;安装ES&quot;">​</a></h1><p><a href="https://www.elastic.co/cn/support/matrix" target="_blank" rel="noreferrer">ES支持列表</a></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">JAVA_HOME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/usr/local/java/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">JRE_HOME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/usr/local/java/jre/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CLASSPATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.:/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$JRE_HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/lib/rt.jar:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$JAVA_HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/lib/dt.jar:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$JAVA_HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/lib/tools.jar</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$PATH</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$JAVA_HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/bin/:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$CLASSPATH</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PATH JAVA_HOME JRE_HOME CLASSPATH</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yum install java-17-openjdk</span></span></code></pre></div><p><a href="https://elasticsearch.bookhub.tech/set_up_elasticsearch/installing_elasticsearch/rpm" target="_blank" rel="noreferrer">使用 RPM 安装 Elasticsearch</a></p><p>通过二进制方式安装</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.17.24-linux-x86_64.tar.gz</span></span>
<span class="line"><span>wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.17.24-linux-x86_64.tar.gz.sha512</span></span>
<span class="line"><span>shasum -a 512 -c elasticsearch-7.17.24-linux-x86_64.tar.gz.sha512 </span></span>
<span class="line"><span>tar -xzf elasticsearch-7.17.24-linux-x86_64.tar.gz</span></span>
<span class="line"><span>cd elasticsearch-7.17.24/</span></span></code></pre></div><p>通过rpm方式安装</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.17.24-x86_64.rpm</span></span>
<span class="line"><span>wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.17.24-x86_64.rpm.sha512</span></span>
<span class="line"><span>shasum -a 512 -c elasticsearch-7.17.24-x86_64.rpm.sha512 </span></span>
<span class="line"><span>rpm --install elasticsearch-7.17.24-x86_64.rpm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>systemctl daemon-reload</span></span>
<span class="line"><span>systemctl enable elasticsearch.service</span></span>
<span class="line"><span>systemctl start elasticsearch.service</span></span>
<span class="line"><span>systemctl stop elasticsearch.service</span></span></code></pre></div><p>通过docker安装</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 创建网络</span></span>
<span class="line"><span>docker network create elastic</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 拉取镜像</span></span>
<span class="line"><span>docker pull docker.elastic.co/elasticsearch/elasticsearch:8.15.1</span></span>
<span class="line"><span>docker pull docker.elastic.co/elasticsearch/elasticsearch:7.11.2</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 单节点</span></span>
<span class="line"><span>docker run </span></span>
<span class="line"><span>    --name es01 </span></span>
<span class="line"><span>    --net elastic </span></span>
<span class="line"><span>    -p 9200:9200 </span></span>
<span class="line"><span>    -p 9300:9300 </span></span>
<span class="line"><span>    -it </span></span>
<span class="line"><span>    -m 1GB </span></span>
<span class="line"><span>    -e &quot;discovery.type=single-node&quot; </span></span>
<span class="line"><span>    docker.elastic.co/elasticsearch/elasticsearch:8.15.1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker run -p 9200:9200 -p 9300:9300 </span></span>
<span class="line"><span>           -e &quot;discovery.type=single-node&quot; </span></span>
<span class="line"><span>            docker.elastic.co/elasticsearch/elasticsearch:7.11.2</span></span></code></pre></div><p>通过docker compose安装（至少需要4GB内存）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>version: &#39;2.2&#39;</span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span>  es01:</span></span>
<span class="line"><span>    image: docker.elastic.co/elasticsearch/elasticsearch:7.11.2</span></span>
<span class="line"><span>    container_name: es01</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>      - node.name=es01</span></span>
<span class="line"><span>      - cluster.name=es-docker-cluster</span></span>
<span class="line"><span>      - discovery.seed_hosts=es02,es03</span></span>
<span class="line"><span>      - cluster.initial_master_nodes=es01,es02,es03</span></span>
<span class="line"><span>      - bootstrap.memory_lock=true</span></span>
<span class="line"><span>      - &quot;ES_JAVA_OPTS=-Xms512m -Xmx512m&quot;</span></span>
<span class="line"><span>    ulimits:</span></span>
<span class="line"><span>      memlock:</span></span>
<span class="line"><span>        soft: -1</span></span>
<span class="line"><span>        hard: -1</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - data01:/usr/share/elasticsearch/data</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - 9200:9200</span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span>      - elastic</span></span>
<span class="line"><span>  es02:</span></span>
<span class="line"><span>    image: docker.elastic.co/elasticsearch/elasticsearch:7.11.2</span></span>
<span class="line"><span>    container_name: es02</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>      - node.name=es02</span></span>
<span class="line"><span>      - cluster.name=es-docker-cluster</span></span>
<span class="line"><span>      - discovery.seed_hosts=es01,es03</span></span>
<span class="line"><span>      - cluster.initial_master_nodes=es01,es02,es03</span></span>
<span class="line"><span>      - bootstrap.memory_lock=true</span></span>
<span class="line"><span>      - &quot;ES_JAVA_OPTS=-Xms512m -Xmx512m&quot;</span></span>
<span class="line"><span>    ulimits:</span></span>
<span class="line"><span>      memlock:</span></span>
<span class="line"><span>        soft: -1</span></span>
<span class="line"><span>        hard: -1</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - data02:/usr/share/elasticsearch/data</span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span>      - elastic</span></span>
<span class="line"><span>  es03:</span></span>
<span class="line"><span>    image: docker.elastic.co/elasticsearch/elasticsearch:7.11.2</span></span>
<span class="line"><span>    container_name: es03</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>      - node.name=es03</span></span>
<span class="line"><span>      - cluster.name=es-docker-cluster</span></span>
<span class="line"><span>      - discovery.seed_hosts=es01,es02</span></span>
<span class="line"><span>      - cluster.initial_master_nodes=es01,es02,es03</span></span>
<span class="line"><span>      - bootstrap.memory_lock=true</span></span>
<span class="line"><span>      - &quot;ES_JAVA_OPTS=-Xms512m -Xmx512m&quot;</span></span>
<span class="line"><span>    ulimits:</span></span>
<span class="line"><span>      memlock:</span></span>
<span class="line"><span>        soft: -1</span></span>
<span class="line"><span>        hard: -1</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - data03:/usr/share/elasticsearch/data</span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span>      - elastic</span></span>
<span class="line"><span></span></span>
<span class="line"><span>volumes:</span></span>
<span class="line"><span>  data01:</span></span>
<span class="line"><span>    driver: local</span></span>
<span class="line"><span>  data02:</span></span>
<span class="line"><span>    driver: local</span></span>
<span class="line"><span>  data03:</span></span>
<span class="line"><span>    driver: local</span></span>
<span class="line"><span></span></span>
<span class="line"><span>networks:</span></span>
<span class="line"><span>  elastic:</span></span>
<span class="line"><span>    driver: bridge</span></span></code></pre></div><p>启动集群：<code>docker-compose up</code></p><p>查看状态：<code>curl -X GET &quot;localhost:9200/_cat/nodes?v=true&amp;pretty&quot;</code></p><p>配置修改：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>node.name: node-1</span></span>
<span class="line"><span>network.host: 0.0.0.0</span></span>
<span class="line"><span>http.port: 9200</span></span>
<span class="line"><span>cluster.initial_master_nodes: [&quot;node-1&quot; ]</span></span></code></pre></div><p>中文分词器</p><p><a href="https://release.infinilabs.com/analysis-ik/stable/elasticsearch-analysis-ik-7.17.24.zip" target="_blank" rel="noreferrer">https://release.infinilabs.com/analysis-ik/stable/elasticsearch-analysis-ik-7.17.24.zip</a></p><p>解压后放到：/usr/share/elasticsearch/plugins/analysis-ik目录下：</p><h1 id="启动es" tabindex="-1">启动ES <a class="header-anchor" href="#启动es" aria-label="Permalink to &quot;启动ES&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>./bin/elasticsearch</span></span></code></pre></div><h1 id="集群状态" tabindex="-1">集群状态 <a class="header-anchor" href="#集群状态" aria-label="Permalink to &quot;集群状态&quot;">​</a></h1><p><a href="http://192.168.42.129:9200/_cat/health?v=true" target="_blank" rel="noreferrer">http://192.168.42.129:9200/_cat/health?v=true</a></p><p>curl常见操作</p><h1 id="入门操作" tabindex="-1">入门操作 <a class="header-anchor" href="#入门操作" aria-label="Permalink to &quot;入门操作&quot;">​</a></h1><p>插入数据</p><p>批量插入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># account.json 是一个文件</span></span>
<span class="line"><span>curl -H &quot;Content-Type: application/json&quot; </span></span>
<span class="line"><span>    -XPOST &quot;localhost:9200/bank/_bulk?pretty&amp;refresh&quot; </span></span>
<span class="line"><span>    --data-binary &quot;@accounts.json&quot;</span></span></code></pre></div><p>搜索数据</p><p>聚合分析</p><p>维度聚合</p><h1 id="kibana安装" tabindex="-1">kibana安装 <a class="header-anchor" href="#kibana安装" aria-label="Permalink to &quot;kibana安装&quot;">​</a></h1><p>版本尽量和ES保持一致</p><p><a href="https://www.elastic.co/cn/downloads/past-releases" target="_blank" rel="noreferrer">Past Releases of Elastic Stack Software | Elastic</a></p><p><a href="https://artifacts.elastic.co/downloads/kibana/kibana-7.17.24-x86_64.rpm" target="_blank" rel="noreferrer">https://artifacts.elastic.co/downloads/kibana/kibana-7.17.24-x86_64.rpm</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl -L -O https://artifacts.elastic.co/downloads/kibana/kibana-7.11.2-linux-x86_64.tar.gz</span></span>
<span class="line"><span>tar xzvf kibana-7.11.2-linux-x86_64.tar.gz</span></span>
<span class="line"><span>cd kibana-7.11.2-linux-x86_64/</span></span>
<span class="line"><span>./bin/kibana</span></span></code></pre></div><p>修改部分配置，路径kibana/config/kibana.yml</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server.port: 5601         #kibana端口</span></span>
<span class="line"><span>server.host: &quot;0.0.0.0&quot;   #所有主机都能访问，或者也可以指定一个ip</span></span>
<span class="line"><span>elasticsearch.hosts: &quot;http://es服务公网IP:9200&quot;     #配置es的访问地址     </span></span>
<span class="line"><span>kibana.index: &quot;.kibana&quot;</span></span>
<span class="line"><span>i18n.locale: &quot;zh-CN&quot;</span></span></code></pre></div><p>或者使用rpm包安装</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>wget https://artifacts.elastic.co/downloads/kibana/kibana-8.15.1-x86_64.rpm</span></span></code></pre></div><p>参考链接：</p><p><a href="https://www.cnblogs.com/huan1993/p/16842127.html" target="_blank" rel="noreferrer">记录在linux上单机elasticsearch8和kibana8 - huan1993 - 博客园 (cnblogs.com)</a></p><p>[windows环境下elasticsearch8.1.0+kibana8.1.0安装教程（用户密码版）_fatal error: [config validation of <a href="https://blog.csdn.net/qq_41985662/article/details/123647941" target="_blank" rel="noreferrer">elasticsearch]-CSDN博客</a></p><p><a href="https://developer.aliyun.com/article/789870" target="_blank" rel="noreferrer">Linux下Kibana的安装、配置及开机自启动-阿里云开发者社区 (aliyun.com)</a></p><h1 id="es配置" tabindex="-1">ES配置 <a class="header-anchor" href="#es配置" aria-label="Permalink to &quot;ES配置&quot;">​</a></h1><p>三个，分别是：</p><ul><li><code>elasticsearch.yml</code> 用于配置 Elasticsearch</li><li><code>jvm.options</code> 用于配置 Elasticsearch JVM 设置</li><li><code>log4j2.properties</code> 用于配置 Elasticsearch 日志记录</li></ul><p>可以使用环境变量：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>node.name:    \${HOSTNAME}</span></span>
<span class="line"><span>network.host: \${ES_NETWORK_HOST}</span></span></code></pre></div><h2 id="重要配置" tabindex="-1">重要配置 <a class="header-anchor" href="#重要配置" aria-label="Permalink to &quot;重要配置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cluster.name</span></span>
<span class="line"><span>node.name</span></span>
<span class="line"><span>path.data</span></span>
<span class="line"><span>path.logs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>discovery.seed_hosts</span></span>
<span class="line"><span>cluster.initial_master_nodes</span></span>
<span class="line"><span># jvm heap size</span></span>
<span class="line"><span># jvm heap dump path</span></span>
<span class="line"><span># jvm gc log</span></span></code></pre></div><h1 id="安全设置" tabindex="-1">安全设置 <a class="header-anchor" href="#安全设置" aria-label="Permalink to &quot;安全设置&quot;">​</a></h1><p><a href="https://blog.csdn.net/mengo1234/article/details/104989382" target="_blank" rel="noreferrer">elasticSearch 设置用户名密码 &amp;&amp; 查询_elasticsearch密码怎么看-CSDN博客</a></p><h1 id="logstash" tabindex="-1">LogStash <a class="header-anchor" href="#logstash" aria-label="Permalink to &quot;LogStash&quot;">​</a></h1><p><a href="https://www.elastic.co/cn/downloads/past-releases/logstash-7-17-24" target="_blank" rel="noreferrer">https://www.elastic.co/cn/downloads/past-releases/logstash-7-17-24</a></p><p>通过rpm包的方式安装</p><p><a href="https://artifacts.elastic.co/downloads/logstash/logstash-7.17.24-x86_64.rpm" target="_blank" rel="noreferrer">https://artifacts.elastic.co/downloads/logstash/logstash-7.17.24-x86_64.rpm</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl -O </span></span>
<span class="line"><span>    https://artifacts.elastic.co/downloads/logstash/logstash-8.15.1-x86_64.rpm</span></span>
<span class="line"><span>rpm -ivh logstash-8.15.1-x86_64.rpm</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 下载软件包</span></span>
<span class="line"><span>wget https://artifacts.elastic.co/downloads/logstash/logstash-7.17.24-x86_64.rpm</span></span>
<span class="line"><span># 安装</span></span>
<span class="line"><span>rpm -ivh logstash-7.17.24-x86_64.rpm</span></span>
<span class="line"><span># 配置文件</span></span>
<span class="line"><span>cp /etc/logstash/logstash-sample.conf /etc/logstash/conf.d/logstash.conf </span></span>
<span class="line"><span></span></span>
<span class="line"><span>systemctl daemon-reload</span></span>
<span class="line"><span>systemctl enable --now logstash</span></span></code></pre></div><h1 id="资源推荐" tabindex="-1">资源推荐 <a class="header-anchor" href="#资源推荐" aria-label="Permalink to &quot;资源推荐&quot;">​</a></h1><h2 id="官方资源" tabindex="-1">官方资源 <a class="header-anchor" href="#官方资源" aria-label="Permalink to &quot;官方资源&quot;">​</a></h2><p><a href="https://www.elastic.co/cn/" target="_blank" rel="noreferrer">Elastic — The Search AI Company | Elastic</a></p><p><a href="https://www.elastic.co/docs" target="_blank" rel="noreferrer">Documentation (elastic.co)</a></p><p><a href="https://www.elastic.co/guide/cn/index.html" target="_blank" rel="noreferrer">简体中文 | Elastic</a></p><p><a href="https://elasticsearch.bookhub.tech/" target="_blank" rel="noreferrer">Elasticsearch 翻译说明 | Elasticsearch 中文文档 (bookhub.tech)</a></p><h2 id="三方资源" tabindex="-1">三方资源 <a class="header-anchor" href="#三方资源" aria-label="Permalink to &quot;三方资源&quot;">​</a></h2><p><a href="https://www.cnblogs.com/konghuanxi/p/18094055" target="_blank" rel="noreferrer">https://www.cnblogs.com/konghuanxi/p/18094055</a></p><p><a href="https://www.cnblogs.com/buchizicai/p/17093719.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/buchizicai/p/17093719.html</a></p><p><a href="https://learnku.com/docs/elasticsearch73/7.3" target="_blank" rel="noreferrer">《Elasticsearch中文文档》 | Elasticsearch 技术论坛 (learnku.com)</a></p><p><a href="https://elasticsearch.bookhub.tech/rest_apis/" target="_blank" rel="noreferrer">REST API | Elasticsearch 中文文档 (bookhub.tech)</a></p><p><a href="https://www.cainiaojc.com/elasticsearch/" target="_blank" rel="noreferrer">Elasticsearch 教程 - 菜鸟教程 (cainiaojc.com)</a></p><p><a href="https://ruanyifeng.com/blog/2017/08/elasticsearch.html" target="_blank" rel="noreferrer">全文搜索引擎 Elasticsearch 入门教程 - 阮一峰的网络日志 (ruanyifeng.com)</a></p><p><a href="https://learnku.com/docs/elasticsearch73/7.3/5215-ip-range-aggregation/8051" target="_blank" rel="noreferrer">5.2.15. IP Range Aggregation | 第五章. Aggregations |《Elasticsearch中文文档 7.3》| Elasticsearch 技术论坛 (learnku.com)</a></p><p><a href="https://docs.kilvn.com/elasticsearch/" target="_blank" rel="noreferrer">入门指南 · Elasticsearch 中文文档 (kilvn.com)</a></p><p><a href="https://elasticsearch.bookhub.tech/getting_started/" target="_blank" rel="noreferrer">Elasticsearch 入门 | Elasticsearch 中文文档 (bookhub.tech)</a></p><p><a href="https://geekdaxue.co/read/elasticsearch-doc-zh-v7.11/README.md#apcj6p" target="_blank" rel="noreferrer">Elasticsearch中文文档——基于v7.11 - 《elasticsearch 中文文档帮助手册教程 V7.11》 - 极客文档</a></p><p><a href="https://www.elastic.co/guide/cn/elasticsearch/guide/current/foreword_id.html" target="_blank" rel="noreferrer">序言 | Elasticsearch: 权威指南 | Elastic</a>zehttps://cloud.tencent.com/developer/article/1804665</p><p><a href="https://cloud.tencent.com/developer/article/1804665" target="_blank" rel="noreferrer">https://cloud.tencent.com/developer/article/1804665</a></p><h2 id="elk整合" tabindex="-1">ELK整合 <a class="header-anchor" href="#elk整合" aria-label="Permalink to &quot;ELK整合&quot;">​</a></h2><p><a href="https://www.cnblogs.com/hanzeng1993/p/15078477.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/hanzeng1993/p/15078477.html</a></p><p><a href="https://blog.csdn.net/Baldprogrammer/article/details/119429530" target="_blank" rel="noreferrer">https://blog.csdn.net/Baldprogrammer/article/details/119429530</a></p>`,103)])])}const g=s(l,[["render",t]]);export{k as __pageData,g as default};

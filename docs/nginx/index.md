# Nginx 快速入门

```bash
yum install -y gcc-c++ pcre pcre-devel zlib zlib-devel openssl openssl-devel

curl -O https://nginx.org/download/nginx-1.24.0.tar.gz
tar -zxvf nginx-1.10.0.tar.gz
cd nginx-1.10.0.tar.gz
./configure && make && make install PREFIX=/usr/local/nginx/
```
添加service服务文件
```bash
vim /usr/lib/systemd/system/nginx.service

[Unit]
After=network.target remote-fs.target nss-lookup.target
[Service]
ExecStartPre=/usr/local/nginx/sbin/nginx -t -c /usr/local/nginx/conf/nginx.conf
ExecStart=/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
ExecReload= /usr/local/nginx/sbin/nginx -s reload
ExecStop= /usr/local/nginx/sbin/nginx -s stop
Type=forking
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

nginx.conf

```nginx
# 全局参数
user nginx;              # Nginx进程运行用户
worker_processes auto;   # Nginx工作进程数，通常设置为CPU核数
error_log /var/log/nginx/error.log warn;    # 错误日志路径和日志级别
pid /run/nginx.pid;      # 进程PID保存路径

# 定义事件模块
events {
    worker_connections 1024;    # 每个工作进程最大并发连接数
    use epoll;                  # 使用epoll网络模型，提高性能
    multi_accept on;            # 开启支持多个连接同时建立
}

# 定义HTTP服务器模块
http {
    # 缓存文件目录
    client_body_temp_path /var/cache/nginx/client_temp;
    proxy_temp_path /var/cache/nginx/proxy_temp;
    fastcgi_temp_path /var/cache/nginx/fastcgi_temp;

    # 定义日志格式，main是默认的日志格式
    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
        '$status $body_bytes_sent "$http_referer" '
        '"$http_user_agent" "$http_x_forwarded_for"';

    # 默认访问日志保存路径和格式
    access_log /var/log/nginx/access.log main;

    # 定义MIME类型
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    # 代理参数
    proxy_connect_timeout 6s;       # 连接超时时间
    proxy_send_timeout 10s;         # 发送超时时间
    proxy_read_timeout 10s;         # 接收超时时间
    proxy_buffer_size 16k;          # 缓冲区大小
    proxy_buffers 4 32k;            # 缓冲区个数和大小
    proxy_busy_buffers_size 64k;    # 忙碌缓冲区大小
    proxy_temp_file_write_size 64k; # 代理临时文件写入大小

    # 启用压缩，可以提高网站访问速度
    gzip on;
    gzip_min_length 1k;                    # 最小压缩文件大小
    gzip_types text/plain text/css application/json application/javascript application/xml;

    # 定义HTTP服务器
    server {
        listen 80;              # 监听端口

        server_name example.com;    # 域名

        # 重定向到HTTPS，强制使用HTTPS访问
        if ($scheme != "https") {
            return 301 https://$server_name$request_uri;
        }

        # HTTPS服务器配置
        ssl_certificate      /etc/nginx/ssl/server.crt;    # SSL证书路径
        ssl_certificate_key  /etc/nginx/ssl/server.key;    # SSL私钥路径

        # SSL会话缓存参数
        ssl_session_cache shared:SSL:10m;
        ssl_session_timeout 10m;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers on;
        ssl_ciphers ECDH+AESGCM:ECDH+AES256:ECDH+AES128:DH+3DES:!ADH:!AECDH:!MD5;

        # 配置代理路径
        location / {
            proxy_pass http://localhost:8080;        # 转发请求的目标地址
            proxy_set_header Host $host;             # 设置请求头中的Host字段
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                            # 设置HTTP头中的X-Forwarded-For字段，表示客户端真实IP，多个IP用逗号隔开
            proxy_set_header X-Real-IP $remote_addr; # 设置请求头中的X-Real-IP字段，表示客户端真实IP
        }

        # 配置静态文件访问路径
        location /static/ {
            alias /path/to/static/files/;   # 静态文件的目录
            expires 7d;                     # 静态文件缓存时间
            add_header Pragma public;       # 添加HTTP响应头
            add_header Cache-Control "public, must-revalidate, proxy-revalidate";
        }

        # 配置错误页面
        error_page 404 /404.html;           # 404错误页
        location = /404.html {
            internal;                       # 不接受外部访问
            root /usr/share/nginx/html;     # 404错误页文件所在目录
        }

        # 配置重定向
        location /old/ {
            rewrite ^/old/([^/]+) /new/$1 permanent;   # 将/old/xxx路径重定向为/new/xxx，返回301状态码
        }
    }

    # 其他服务配置
    # server {
    #     ...
    # }

    # 配置TCP负载均衡
    upstream backends {
        server backend1.example.com:8080 weight=5;  # 后端服务器地址和权重
        server backend2.example.com:8080;
        server backend3.example.com:8080 backup;   # 备用服务器
        keepalive 16;                               # 连接池大小
    }

    server {
        listen 80;
        server_name example.com;

        location / {
            proxy_pass http://backends;             # 负载均衡转发请求的目标地址
            proxy_set_header Host $host;            # 设置请求头中的Host字段
            proxy_set_header X-Real-IP $remote_addr; # 设置请求头中的X-Real-IP字段，表示客户端真实IP
        }
    }
}
```

请求频控

```nginx
#limit_conn_zone：限制并发连接数，即同一时间连接数
#设置一个自定义名字（perip）,大小为10M的缓存空间，$binary_remote_addr表示以每个IP地址来限制
limit_conn_zone $binary_remote_addr zone=perip:10m;
#设置一个自定义名字（perserver）,大小为10M的缓存空间，$server_name表示以server来限制
limit_conn_zone $server_name zone=perserver:10m;
 
server
{
    limit_conn perip 2;  #每个ip的并发连接数
    limit_conn perserver 20; #server总并发连接数
    limit_rate 1024k;#限制下载速度；
}
 
####
#limit_req_zone：限制单位时间内的请求数
#设置一个自定义名字（perip）,大小为10M的缓存空间，每个IP地址，每秒接受1个请求
limit_req_zone $binary_remote_addr zone=perip:10m rate=1r/s;
#设置一个自定义名字（perserver）,大小为10M的缓存空间，server，每秒接受10个请求
limit_req_zone $server_name zone=perserver:10m rate=10r/s;
 
server
{
     #单个IP的请求数，burst：缓冲队列的长度，nodelay：大于缓冲长度的將直接503，不设置nodelay则会排队等待
    limit_req zone=perip burst=5 nodelay; 
    limit_req zone=perserver burst=10; #总请求数
}
```



# 资源推荐

- [Nginx | 代码酷](https://www.echo.cool/docs/middleware/nginx)
- [Nginx源码分析_老码农zhuli的博客-CSDN博客](https://blog.csdn.net/initphp/category_9265172.html)
- [Nginx开发从入门到精通 — Nginx开发从入门到精通 (taobao.org)](https://tengine.taobao.org/book/)
- https://tengine.taobao.org/nginx_docs/cn/docs/
- https://nginx.ac.cn/

- [Core functionality (nginx.org)](http://nginx.org/en/docs/ngx_core_module.html#worker_priority)

- [Module ngx_http_core_module (nginx.org)](http://nginx.org/en/docs/http/ngx_http_core_module.html)

- [Module ngx_stream_core_module (nginx.org)](http://nginx.org/en/docs/stream/ngx_stream_core_module.html)

- [【精选】Nginx 配置示例_nginx配置例子_刘李404not found的博客-CSDN博客](https://blog.csdn.net/qq_39680564/article/details/127280234?ops_request_misc=%7B%22request%5Fid%22%3A%22169812647616800211570451%22%2C%22scm%22%3A%2220140713.130102334..%22%7D&request_id=169812647616800211570451&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~baidu_landing_v2~default-1-127280234-null-null.142^v96^pc_search_result_base5&utm_term=nginx示例配置文件&spm=1018.2226.3001.4187)

- [nginx配置 location root - bw_0927 - 博客园 (cnblogs.com)](https://www.cnblogs.com/my_life/articles/7070805.html)

- https://blog.csdn.net/moqiang02/article/details/38552717?ops_

- https://blog.csdn.net/zouyang920/article/details/122863369?o

  root和alias的区别

- [nginx 80端口配置多个location无效 访问404_nginx_风间琉璃c-华为云开发者联盟 (csdn.net)](https://huaweicloud.csdn.net/63564330d3efff3090b5cb24.html?spm=1001.2101.3001.6650.6&utm_medium=distribute.pc_relevant.none-task-blog-2~default~BlogCommendFromBaidu~activity-6-122662734-blog-119208194.235^v38^pc_relevant_anti_t3&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~BlogCommendFromBaidu~activity-6-122662734-blog-119208194.235^v38^pc_relevant_anti_t3&utm_relevant_index=11)

  root 替换

  Alisa 拼接

# 书籍推荐
- 《HTTP 权威指南》
- 《TCP/IP 详解卷一：协议》
- 《深入理解 Linux 内核》
- 《Lniux 内核设计与实现》
- 《深入理解 Nginx 模块开发与架构解析》
- 《Nginx 底层设计与源码分析》

- 《Nginx完全开发指南 使用C、C++、JavaScript和lua》

# 源码相关

如何解读 Nginx 源码？ - 知乎
https://www.zhihu.com/question/20989718

# Open Resty 快速入门
- 同步非阻塞
- Lua JIT
- cosocket
- 单元测试和性能测试
- 火焰图
- 性能优化

# Hello World

```bash
# 安装依赖
yum install -y pcre-devel openssl-devel gcc curl zlib-devel make git
# 下载源码
wget https://openresty.org/download/openresty-1.29.2.3.tar.gz
# 解压缩
tar -zxf openresty-1.29.2.3.tar.gz
cd openresty-1.29.2.3
./configure
# 编译 安装
make && make install


vim /usr/local/openresty/nginx/conf/nginx.conf
################################
worker_processes  1;
events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;
    server {
        listen       80;
        server_name  localhost;
        location / {
            content_by_lua '
                ngx.header["Content-Type"] = "application/json; charset=utf-8"
                ngx.say("hello, world")
		        ngx.exit(200)
            ';
        }
    }
}

################################
/usr/local/openresty/nginx/sbin/nginx -t
/usr/local/openresty/nginx/sbin/nginx

# 验证
[root@localhost]# curl -v 127.0.0.1
* Rebuilt URL to: 127.0.0.1/
*   Trying 127.0.0.1...
* TCP_NODELAY set
* Connected to 127.0.0.1 (127.0.0.1) port 80 (#0)
> GET / HTTP/1.1
> Host: 127.0.0.1
> User-Agent: curl/7.61.1
> Accept: */*
> 
< HTTP/1.1 200 OK
< Server: openresty/1.29.2.3
< Date: Thu, 30 Apr 2026 00:38:16 GMT
< Content-Type: application/octet-stream
< Transfer-Encoding: chunked
< Connection: keep-alive
< 
hello, world
* Connection #0 to host 127.0.0.1 left intact
```
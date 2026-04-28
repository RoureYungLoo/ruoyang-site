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

# 参考链接

[Nginx | 代码酷](https://www.echo.cool/docs/middleware/nginx)
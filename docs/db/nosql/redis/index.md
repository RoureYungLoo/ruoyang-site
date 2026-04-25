
# 安装

```bash
# 安装依赖
yum install -y make gcc systemd-devel openssl openssl-devel
# 下载 Redis 软件压缩包
curl -O http://download.redis.io/releases/redis-7.4.8.tar.gz
# 解压
tar -zxf redis-7.4.8.tar.gz
# 切换目录
cd redis-7.4.8
# 编译 Redis
make USE_SYSTEMD=yes BUILD_TLS=yes
# 如果 make 过程中出错
# make distclean
# 安装 Redis
make install PREFIX=/usr/local/redis/ 
mkdir -p /etc/redis && cp redis.conf /etc/redis/redis.conf
# 修改配置文件
sed -i 's/bind 127.0.0.1/bind 0.0.0.0/g' /etc/redis/redis.conf
sed -i 's/protected-mode yes/protected-mode no/g' /etc/redis/redis.conf
sed -i 's/daemonize no/daemonize yes/g' /etc/redis/redis.conf
sed -i 's/# supervised auto/supervised auto/g' /etc/redis/redis.conf
# sed -i 's/# cluster-enabled yes/cluster-enabled yes/g' /etc/redis/redis.conf

sysctl_conf=/etc/sysctl.conf
cat >> $sysctl_conf << EOF
net.core.somaxconn = 1024
vm.overcommit_memory = 1
EOF

/sbin/sysctl -p

cp utils/systemd-redis_server.service /usr/lib/systemd/system/redis.service
# 修改redis.service文件
systemctl daemon-reload
# 开机自启
systemctl enable redis.service --now
```

redis.service

```bash
[Unit]
Wants=network-online.target
After=network-online.target

[Service]
ExecStart=/usr/local/redis/bin/redis-server /etc/redis/redis.conf
LimitNOFILE=10032
NoNewPrivileges=yes
#OOMScoreAdjust=-900
#PrivateTmp=yes
Type=notify
TimeoutStartSec=5
TimeoutStopSec=5
UMask=0077
#User=redis
#Group=redis
#WorkingDirectory=/var/lib/redis

[Install]
WantedBy=multi-user.target
```

# 资源推荐

官方文档：https://redis.io/docs/latest/get-started/
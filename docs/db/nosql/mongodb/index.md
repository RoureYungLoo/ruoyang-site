# MongoDB快速入门

配置yum repo

```bash
[mongodb-org-8.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/9/mongodb-org/8.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://pgp.mongodb.com/server-8.0.asc
yum makecache
yum install -y mongodb-org
```

配置文件路径: `/etc/mongod.conf` 

```bash
systemctl enable mongod --now
```

运行 mongosh

卸载: 

```bash
systemctl stop mongod stop 
yum erase $(rpm -qa | grep mongodb-org)
rm -r /var/log/mongodb
rm -r /var/lib/mongo
```

# 资源推荐

[MongoDB CRUD 操作 - 数据库手册 - MongoDB Docs](https://www.mongodb.com/zh-cn/docs/manual/crud/#std-label-crud)

[MongoDB中文手册|官方文档中文版 | MongoDB-CN-Manual](https://docs.mongoing.com/)

[在 Red Hat 或 CentOS 上安装 MongoDB Community Edition - 数据库手册 v8.0 - MongoDB Docs](https://www.mongodb.com/zh-cn/docs/manual/tutorial/install-mongodb-on-red-hat/)

[在 Red Hat 或 CentOS 上安装 MongoDB Enterprise Edition - 数据库手册 - MongoDB Docs](https://www.mongodb.com/zh-cn/docs/manual/tutorial/install-mongodb-enterprise-on-red-hat/)
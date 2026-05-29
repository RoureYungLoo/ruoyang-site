# 安装与配置

## 版本选择

老项目：jdk8

新项目：jdk17

特殊项目：jdk11

主要还是看spring boot 依赖的jdk版本

## 免费商用版本

分别是`jdk 8u202`, `jdk 11.0.2`, `jdk 17+`

下载地址：

- [JDK8](https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html)

- [JDK17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)

# 在线安装

## linux

```
yum install  https://download.oracle.com/java/17/latest/jdk-17_linux-x64_bin.rpm
yum install -y java-17-openjdk
```

# 离线安装

## linux

```bash
wget https://download.oracle.com/java/17/archive/jdk-17.0.12_linux-x64_bin.tar.gz
tar -zxf jdk-17.0.12_linux-x64_bin.tar.gz -C /usr/local/

cat >> /etc/profile << 'EOF'
JAVA_HOME=/usr/local/jdk-17.0.12/
# 一般不需要配置 CLASSPATH
# CLASSPATH=.:$JAVA_HOME/jre/lib/rt.jar:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
PATH=$PATH:$JAVA_HOME/bin
export PATH JAVA_HOME # CLASSPATH  
EOF

source /etc/profile
```
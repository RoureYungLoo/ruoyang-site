# Gradle 快速入门

[Gradle是什么？ - Gradle8.1.1中文文档 - API参考文档 - 全栈行动派](https://doc.qzxdp.cn/gradle/8.1.1/userguide/what_is_gradle.html)

[Gradle中文网](https://gradle.github.net.cn/)

[Gradle 详细手册（从入门到入土）Gradle是专注于灵活性和性能的开源构建自动化工具，一般使用Groovy或Kot - 掘金](https://juejin.cn/post/6932813521344430094)

[【Gradle教程】Gradle 基础入门 - 东北小狐狸 - 博客园](https://www.cnblogs.com/hellxz/p/helloworld-gradle.html)

[Groovy 概述_w3cschool](https://www.w3cschool.cn/groovy/groovy_overview.html)

[Apache Groovy 编程语言 - Groovy 编程语言](https://groovy-lang.cn/index.html)

# Gradle是什么？

一种开源构建自动化工具

# Gradle的设计原则

高性能

基于JVM

约定

可扩展

支持IDE

# Gradle术语

项目

任务：动作、输入、输出

插件

构建阶段：初始化、配置、执行构建

构建集

# 安装Gradle

前置条件：安装Java

```cmd
PS C:\Users\dell> java -version
java version "11.0.2" 2019-01-15 LTS
Java(TM) SE Runtime Environment 18.9 (build 11.0.2+9-LTS)
Java HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.2+9-LTS, mixed mode)
```

下载并解压

配置环境变量

GRADLE_HOME

验证 

gradle -v

```cmd
PS C:\Users\dell> gradle -v

------------------------------------------------------------
Gradle 8.12
------------------------------------------------------------

Build time:    2024-12-20 15:46:53 UTC
Revision:      a3cacb207fec727859be9354c1937da2e59004c1

Kotlin:        2.0.21
Groovy:        3.0.22
Ant:           Apache Ant(TM) version 1.10.15 compiled on August 25 2024
Launcher JVM:  11.0.2 (Oracle Corporation 11.0.2+9-LTS)
Daemon JVM:    D:\Program Files\Java\jdk-11.0.2 (no JDK specified, using current Java home)
OS:            Windows 10 10.0 amd64
```
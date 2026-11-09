# Spring Boot 快速入门

Spring Boot 通过自动配置、Starter 依赖和内嵌服务器简化 Spring 应用的创建与部署。它并没有替代 Spring Framework，而是为常见工程配置提供了合理默认值。

## 核心能力

- Starter 统一管理一类功能所需的依赖；
- 自动配置根据类路径、配置项和已有 Bean 推断应用配置；
- 外部化配置支持 properties、YAML、环境变量和命令行参数；
- Actuator 提供健康检查、指标和运行状态端点；
- 内嵌服务器让 Web 应用可以直接打包运行。

排查自动配置问题时，应先查看条件评估结果，再确认配置绑定、Bean 覆盖关系和环境配置来源。

## 下一步

- [Spring Framework](../framework/)
- [Spring Cloud](../cloud/)

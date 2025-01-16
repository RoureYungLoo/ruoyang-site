# 2023组件选型

- 注册中心（Spring Cloud Zookeeper）：负责服务的注册和发现。
- 网关（Spring Cloud Gateway）：作为外部请求的入口，实现路由和负载均衡。
- 云服务配置（Spring Cloud Config）：用于管理服务的配置信息。
- 熔断（Sentinel）：提供熔断器功能，实现服务的限流和降级。
- 服务追踪（Micrometer Tracing）：用于追踪和监控服务的性能和调用情况。
- 测试集成（JUnit 5 + Spring Boot Test）：用于编写和执行单元测试。
- 远程调用（OpenFeign）：用于服务之间的远程调用。
- 接口文档（springdoc-openapi + openapi3）：用于生成和管理 API 的文档。
- 分布式事务（Seata）：用于处理跨多个服务的事务。
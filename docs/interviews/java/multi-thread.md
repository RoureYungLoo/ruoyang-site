# Java 多线程

## 线程池的核心参数有哪些? 分别是什么含义?  
| **参数**              | **含义**   | 约束                |
| ------------------- | -------- | ----------------- |
| **corePoolSize**    | 核心线程数    | <=maximumPoolSize |
| **maximumPoolSize** | 最大线程数    | >=corePoolSize    |
| **keepAliveTime**   | 空闲线程存活时间 |                   |
| **unit**            | 时间单位     |                   |
| **workQueue**       | 任务队列     | NotNull           |
| **threadFactory**   | 线程工厂     | NotNull           |
| **handler**         | 拒绝策略     | NotNull           |
## 线程池的工作原理是什么?
```java
线程池提交(commit)任务时:
初始状态: 当前线程数 < 核心线程数, 创建新线程运行该任务

入队状态: 当前线程数 >= 核心线程数并且 < 最大线程数, 根据任务队列判断:
	如果队列已满, 创建临时线程运行该任务;
	如果队列没满, 将任务添加到队列;

拒绝状态: 当前线程数 >= 最大线程数, 根据任务队列判断:
	如果队列已满, 触发拒绝策略;
	如果队列没满, 将任务添加到队列;

workerCount < corePoolSize, 启动新线程运行该任务
corePoolSize <= workerCount < maximumPoolSize, 队列未满则入队, 队列已满则创建临时线程运行该任务
workerCount >= maximumPoolSize 队列未满则入队, 队列已满则触发拒绝策略
```
## 线程池的拒绝策略有哪些?
- **AbortPolicy** 拒绝并抛出异常, 默认策略
- **DiscardPolicy** 直接丢弃,不抛出异常
- **DiscardOldestPolicy** 丢弃入队最久的任务, 尝试重新提交被拒绝的该任务
- **CallerRunsPolicy** 丢给调用者运行
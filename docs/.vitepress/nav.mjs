export const nav = [
  { text: "首页", link: "/" },
  {
    text: "基础知识",
    items: [
      {
        text: "计算机基础",
        items: [
          { text: "计算机网络", link: "/computer-science-fundamentals/computer-networks/" },
          { text: "计算机组成原理", link: "/computer-science-fundamentals/computer-organization/" },
          { text: "操作系统", link: "/computer-science-fundamentals/operating-systems/" },
        ],
      },
      {
        text: "数据结构与算法",
        items: [
          { text: "数据结构", link: "/computer-science-fundamentals/data-structures/" },
          { text: "算法分析与设计", link: "/computer-science-fundamentals/algorithm-analysis-and-design/" },
          { text: "排序算法", link: "/algorithms/sorting/" },
        ],
      },
    ],
  },
  {
    text: "编程语言",
    items: [
      {
        text: "Web 前端",
        items: [
          { text: "HTML", link: "/programming-languages/hypertext-markup-language/" },
          { text: "CSS", link: "/programming-languages/cascading-style-sheets/" },
          { text: "JavaScript", link: "/programming-languages/javascript/" },
          { text: "React", link: "/react/" },
        ],
      },
      {
        text: "后端与系统",
        items: [
          { text: "Java", link: "/programming-languages/java/" },
          { text: "C", link: "/programming-languages/c/" },
          { text: "C++", link: "/programming-languages/c-plus-plus/" },
          { text: "Python", link: "/programming-languages/python/" },
          { text: "Lua", link: "/programming-languages/lua/" },
        ],
      },
    ],
  },
  {
    text: "后端技术",
    items: [
      {
        text: "数据存储",
        items: [
          { text: "数据库概览", link: "/databases/" },
          { text: "MySQL", link: "/databases/relational/mysql/" },
          { text: "Redis", link: "/databases/non-relational/redis/" },
          { text: "MongoDB", link: "/databases/non-relational/mongodb/" },
        ],
      },
      {
        text: "Java 生态",
        items: [
          { text: "Spring Framework", link: "/spring/framework/" },
          { text: "Spring Boot", link: "/spring/boot/" },
          { text: "Spring Cloud", link: "/spring/cloud/" },
        ],
      },
      {
        text: "消息与中间件",
        items: [
          { text: "Kafka", link: "/message-queues/kafka/" },
          { text: "RocketMQ", link: "/message-queues/rocketmq/" },
          { text: "Elasticsearch", link: "/middleware/elasticsearch/" },
          { text: "Nginx", link: "/nginx/" },
          { text: "OpenResty", link: "/middleware/openresty/" },
        ],
      },
    ],
  },
  { text: "大数据", link: "/big-data/" },
  {
    text: "工程实践",
    items: [
      {
        text: "开发与构建工具",
        items: [
          { text: "Git", link: "/version-control/git/" },
          { text: "Maven", link: "/build-tools/maven/" },
          { text: "Gradle", link: "/build-tools/gradle/" },
        ],
      },
      {
        text: "工程方法与工具",
        items: [
          { text: "软件工程", link: "/software-engineering/" },
          { text: "源码阅读", link: "/source-code/reading/" },
          { text: "桌面应用与接口测试", link: "/graphical-user-interface/" },
          { text: "原型设计工具", link: "/user-interface-design/" },
        ],
      },
      {
        text: "系统管理与排查",
        items: [
          { text: "Linux 网络故障排查", link: "/troubleshooting/linux" },
          { text: "Samba 文件共享", link: "/system-administration/samba" },
          { text: "Windows 系统优化", link: "/system-optimization/windows" },
        ],
      },
    ],
  },
  {
    text: "专题笔记",
    items: [
      { text: "人工智能智能体", link: "/artificial-intelligence/agent/" },
      { text: "程序化广告", link: "/programmatic-advertising/" },
      { text: "广告预测与算法工程", link: "/algorithm-engine/" },
      { text: "后台管理框架选型", link: "/low-code-administration/" },
    ],
  },
  {
    text: "面试复习",
    items: [
      { text: "面试复习总览", link: "/interviews/" },
      {
        text: "基础与语言",
        items: [
          { text: "计算机网络", link: "/interviews/network/" },
          { text: "Java", link: "/interviews/java/base" },
        ],
      },
      {
        text: "数据与场景",
        items: [
          { text: "MySQL", link: "/interviews/mysql/mysql" },
          { text: "Redis", link: "/interviews/redis/redis" },
          { text: "场景题", link: "/interviews/scenes/" },
        ],
      },
    ],
  },
  {
    text: "本站",
    items: [
      { text: "最近更新", link: "/latest" },
      { text: "关于本站", link: "/about" },
    ],
  },
];

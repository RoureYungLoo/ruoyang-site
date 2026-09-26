import { defineConfig } from "vitepress";
import { sidebar } from "./sidebar/index.mjs";

export default defineConfig({
  title: "若阳的网站",
  srcExclude: [
    "testpkg/**",
    "code/review/redis/**",
    "cs_base/alg/{01,02,algorithm_analysis_and_design}.md",
    "cs_base/ds/{data_structures,hash_table,search,sort}.md",
    "cs_base/net/network.md",
    "cs_base/os/operating_systems.md",
    "cs_base/poc/principles_of_computers.md",
    "db/nosql/valkey/index.md",
    "db/sql/sqlserver/index.md",
    "interviews/java/{annotation,concurrency,extends,io,polymorphism,proxy,reflection}.md",
    "interviews/bases/index.md",
    "langs/{csharp,go,sql,ts}/index.md",
    "langs/cpp/10-C++新特性.md",
    "langs/java/Java.md",
    "mq/{activemq,apollo,rabbitmq,zeromq}/index.md",
    "project/index.md",
    "seaeng/{elastic,lucene}/index.md",
    "vercon/svn/index.md",
  ],
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.svg",
      },
    ],
  ],
  lang: "zh-CN",
  themeConfig: {
    search: {
      provider: "local",
    },
    nav: [
      { text: "首页", link: "/" },
      {
        text: "基础知识",
        items: [
          {
            text: "计算机基础",
            items: [
              { text: "计算机网络", link: "/cs_base/net/" },
              { text: "计算机组成原理", link: "/cs_base/poc/" },
              { text: "操作系统", link: "/cs_base/os/" },
            ],
          },
          {
            text: "数据结构与算法",
            items: [
              { text: "数据结构", link: "/cs_base/ds/" },
              { text: "算法分析与设计", link: "/cs_base/alg/" },
              { text: "排序算法", link: "/algo/sort/" },
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
              { text: "HTML", link: "/langs/html/" },
              { text: "CSS", link: "/langs/css/" },
              { text: "JavaScript", link: "/langs/js/" },
              { text: "React", link: "/react/" },
            ],
          },
          {
            text: "后端与系统",
            items: [
              { text: "Java", link: "/langs/java/" },
              { text: "C", link: "/langs/c/" },
              { text: "C++", link: "/langs/cpp/" },
              { text: "Python", link: "/langs/py/" },
              { text: "Lua", link: "/langs/lua/" },
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
              { text: "数据库概览", link: "/db/" },
              { text: "MySQL", link: "/db/sql/mysql/" },
              { text: "Redis", link: "/db/nosql/redis/" },
              { text: "MongoDB", link: "/db/nosql/mongodb/" },
            ],
          },
          {
            text: "Java 生态",
            items: [
              { text: "Spring Framework", link: "/spring/base/" },
              { text: "Spring Boot", link: "/spring/boot/" },
              { text: "Spring Cloud", link: "/spring/cloud/" },
            ],
          },
          {
            text: "消息与中间件",
            items: [
              { text: "Kafka", link: "/mq/kafka/" },
              { text: "RocketMQ", link: "/mq/rocketmq/" },
              { text: "ElasticSearch", link: "/middleware/es/" },
              { text: "Nginx", link: "/nginx/" },
              { text: "OpenResty", link: "/middleware/openresty/" },
            ],
          },
        ],
      },
      {
        text: "工程实践",
        items: [
          {
            text: "开发与构建工具",
            items: [
              { text: "Git", link: "/vercon/git/" },
              { text: "Maven", link: "/build_tool/maven/" },
              { text: "Gradle", link: "/build_tool/gradle/" },
            ],
          },
          {
            text: "工程方法与工具",
            items: [
              { text: "软件工程", link: "/se/" },
              { text: "源码阅读", link: "/code/review/" },
              { text: "API 测试工具", link: "/gui/" },
              { text: "原型设计工具", link: "/ui/" },
            ],
          },
          {
            text: "专题方向",
            items: [
              { text: "大数据", link: "/big_data/" },
              { text: "AI Agent", link: "/ai/agent/" },
              { text: "程序化广告", link: "/programming_advertising/" },
            ],
          },
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
    ],
    sidebar,
    lightModeSwitchTitle: "开灯",
    darkModeSwitchTitle: "关灯",
    socialLinks: [
      { icon: "github", link: "https://github.com/RoureYungLoo" },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WeChat</title><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/></svg>',
        },
        link: "/weixin.jpg",
      },
    ],
    notFound: {
      title: "您正在访问的页面走丢了呢",
      quote: "快去看看其他页面吧~",
      linkLabel: "首页",
      linkText: "前往首页",
      code: "糟糕",
    },
    footer: {
      message: "基于 MIT 许可发布",
      copyright: `版权所有 © 2024-${new Date().getFullYear()} 禄若阳`,
    },
    docFooter: {
      prev: "上一页: 温故而知新",
      next: "下一页: 学而时习之",
    },
    outline: {
      level: [1, 6],
      label: "本页内容",
    },
    editLink: {
      pattern:
        "https://github.com/RoureYungLoo/ruoyang-site/tree/main/docs/:path",
      text: "在 GitHub 上编辑此页面",
    },
    lastUpdated: {
      text: "最近更新",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
  },
  lastUpdated: true,
  markdown: {
    lineNumbers: false,
  },
});

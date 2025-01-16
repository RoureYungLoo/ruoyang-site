import { defineConfig } from "vitepress";

let sidebar_cpp = "/program-langs/cpp/";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "禄若阳的笔记",
  description: "禄若阳的笔记",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.svg",
      },
    ],
  ],
  lang: "CN",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      {
        text: "计算机基础",
        items: [
          { text: "组成原理", link: "/base/poc/" },
          { text: "操作系统", link: "/base/os/" },
          { text: "数据结构", link: "/base/ds/" },
          { text: "计算机网络", link: "/base/net/" },
        ],
      },
      {
        text: "编程语言",
        items: [
          {
            text: " 前  端 ",
            items: [
              { text: "HTML", link: "/langs/html/" },
              { text: "CSS", link: "/langs/css/" },
              { text: "JavasCript", link: "/langs/js/" },
              { text: "TypesCript", link: "/langs/ts/" },
            ],
          },
          {
            text: " 后  端 ",
            items: [
              { text: "C语言", link: "/langs/c/" },
              { text: "C++", link: "/langs/cpp/" },
              { text: "C#", link: "/langs/csharp/" },
              { text: "Java", link: "/langs/java/" },
              { text: "Python", link: "/langs/py/" },
              { text: "Golang", link: "/langs/go/" },
              { text: "SQL", link: "/langs/sql/" },
              { text: "Lua", link: "/langs/lua/" },
            ],
          },
        ],
      },
      {
        text: "并发 | 网络",
        items: [
          { text: "并发编程", link: "/con/" },
          { text: "网络编程", link: "/net/" },
        ],
      },
      { text: "JVM", link: "/jvm" },

      {
        text: "数据库",
        items: [
          { text: "简介", link: "/db/" },
          {
            text: ">>>SQL<<<",
            items: [
              { text: "MySQL", link: "/db/sql/mysql/" },
              { text: "SQL Server", link: "/db/sql/sqlserver/" },
            ],
          },
          {
            text: ">>NoSQL<<",
            items: [
              { text: "Redis", link: "/db/nosql/redis/" },
              { text: "ValKey", link: "/db/nosql/valkey/" },
            ],
          },
        ],
      },
      {
        text: "消息队列",
        items: [
          { text: "RabbitMQ", link: "/mq/rabbitmq/" },
          { text: "Apollo", link: "/mq/apollo/" },
          { text: "RocketMQ", link: "/mq/rocketmq/" },
          { text: "Kafka", link: "/mq/kafka/" },
          { text: "ZeroMQ", link: "/mq/zeromq/" },
          { text: "ActiveMQ", link: "/mq/activemq/" },
        ],
      },
      {
        text: "Spring教程",
        items: [
          { text: "Spring Framework", link: "/spring/base/" },
          { text: "Spring Boot", link: "/spring/boot/" },
          { text: "Spring Cloud", link: "/spring/cloud/" },
        ],
      },
      {
        text: "版本管理",
        items: [
          { text: "Git", link: "/vercon/git/" },
          { text: "SVN", link: "/vercon/svn/" },
        ],
      },
      {
        text: "搜索引擎",
        items: [
          { text: "lucene", link: "/seaeng/lucene/" },
          { text: "ElasticSearch", link: "/seaeng/elastic/" },
        ],
      },
      {
        text: "常用算法",
        items: [
          { text: "查找算法", link: "/algo/search" },
          { text: "排序算法", link: "/algo/sort/" },
          { text: "刷题算法", link: "/algo/oj" },
        ],
      },
      {
        text: "面试题",
        items: [
          { text: "基础题", link: "/interviews/bases/" },
          { text: "场景题", link: "/interviews/scenes/" },
          { text: "问题排查类", link: "/interviews/debug/" },
        ],
      },
      { text: "关于", link: "/about" },
    ],

    sidebar: {
      "/program-langs/c/": [
        {
          text: "C语言",
          collapsed: true,
          items: [{ text: "1", link: "/program-langs/c/1/" }],
        },
      ],

      "/program-langs/cpp/": [
        {
          text: "C++",
          collapsed: true,
          items: [{ text: "1", link: "/program-langs/cpp/" }],
        },
      ],
      "/program-langs/csharp/": [
        {
          text: "C#",
          collapsed: true,
          items: [{ text: "1", link: "/program-langs/c/1/" }],
        },
      ],
      "/program-langs/java/": [
        {
          text: "java",
          collapsed: true,
          items: [{ text: "1", link: "/program-langs/c/1/" }],
        },
      ],
      "/program-langs/python/": [
        {
          text: "python",
          collapsed: true,
          items: [{ text: "1", link: "/program-langs/c/1/" }],
        },
      ],
      "/program-langs/go/": [
        {
          text: "go",
          collapsed: true,
          items: [{ text: "1", link: "/program-langs/c/1/" }],
        },
      ],
      "/program-langs/sql/": [
        {
          text: "sql",
          collapsed: true,
          items: [{ text: "1", link: "/program-langs/c/1/" }],
        },
      ],
      "/program-langs/js/": [
        {
          text: "javascript",
          collapsed: true,
          items: [{ text: "1", link: "/program-langs/c/1/" }],
        },
      ],
      "/program-langs/ts/": [
        {
          text: "typescript",
          collapsed: true,
          items: [{ text: "1", link: "/program-langs/c/1/" }],
        },
      ],
      "/program-langs/lua/": [
        {
          text: "lua",
          collapsed: true,
          items: [{ text: "1", link: "/program-langs/c/1/" }],
        },
      ],
      "/interviews/bases/": [
        {
          text: "基础面试题",
          collapsed: false,
          items: [{ text: "java基础", link: "/interviews/bases/java" }],
        },
      ],
      "/interviews/scenes/": [
        {
          text: "场景面试题",
          link: "/interviews/scenes/",
        },
      ],
      // "/code/review/": [
      //   {
      //     text: "源码进阶",
      //     collapsed: false,
      //     items: [
      //       { text: "redis", link: "/code/review/redis/" }],
      //   },
      // ],
      "/code/review/redis/": [
        {
          text: "Redis源码解析",
          collapsed: false,
          items: [
            { text: "第一讲", link: "/code/review/redis/1" },
            { text: "第二讲", link: "/code/review/redis/2" },
            { text: "第三讲", link: "/code/review/redis/3" },
            { text: "第四讲", link: "/code/review/redis/4" },
          ],
        },
      ],
    },

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
      prev: "上一页",
      next: "下一页",
    },
    outline: {
      label: "页面导航",
    },
    editLink: {
      pattern: "https://github.com/roueyunloo/",
      text: "在 GitHub 上编辑此页面",
    },
  },
});

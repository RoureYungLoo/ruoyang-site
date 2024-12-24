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
          { text: "组成原理", link: "/pc" },
          { text: "操作系统", link: "/os" },
          { text: "数据结构", link: "/ds" },
          { text: "计算机网络", link: "/net" },
        ],
      },
      {
        text: "编程语言",
        items: [
          { text: "C语言", link: "/program-langs/c/c" },
          { text: "C++", link: sidebar_cpp },
          { text: "C#", link: "/10" },
          { text: "Java", link: "/3" },
          { text: "Python", link: "/4" },
          { text: "Golang", link: "/5" },
          { text: "SQL", link: "/6" },
          { text: "JavasCript", link: "/7" },
          { text: "TypesCript", link: "/8" },
          { text: "Lua", link: "/9" },
        ],
      },
      {
        text: "并发 | 网络",
        items: [
          { text: "并发编程", link: "con" },
          { text: "网络编程", link: "/netprogram" },
        ],
      },
      { text: "JVM", link: "/jvm" },

      {
        text: "数据库",
        items: [
          {
            text: "SQL",
            items: [
              { text: "MySQL", link: "/MySQL" },
              { text: "SQL Server", link: "/sqlserver" },
            ],
          },
          {
            text: "NoSQL",
            items: [
              { text: "Redis", link: "/redis" },
              { text: "ValKey", link: "/valkey" },
            ],
          },
        ],
      },
      { text: "消息队列", items: [{ text: "RabbitMQ", link: "/rabbitmq" }] },
      {
        text: "Spring教程",
        items: [
          { text: "Spring Framework", link: "/item-1" },
          { text: "Spring Boot", link: "/item-2" },
          { text: "Spring Cloud", link: "/item-3" },
        ],
      },
      {
        text: "版本管理",
        items: [
          { text: "Git", link: "/git" },
          { text: "SVN", link: "/svn" },
        ],
      },
      {
        text: "搜索引擎",
        items: [
          { text: "lucence", link: "/luc" },
          { text: "ElasticSearch", link: "/es" },
        ],
      },
      {
        text: "常用算法",
        items: [
          { text: "查找算法", link: "/locate" },
          { text: "排序算法", link: "/sort" },
          { text: "刷题算法", link: "/leecode" },
        ],
      },
      {
        text: "面试题",
        items: [
          { text: "八股文", link: "/interviews/bases/" },
          { text: "场景题", link: "/interviews/scenes/" },
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
            { text: "第四讲", link: "/code/review/redis/4" },]
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
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
      copyright: `版权所有 © 2019-${new Date().getFullYear()} 禄若阳`,
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

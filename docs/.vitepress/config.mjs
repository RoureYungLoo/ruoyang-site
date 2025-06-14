import { defineConfig } from "vitepress";

let sidebar_cpp = "/program-langs/cpp/";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: " ",
  // description: " ",
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
          { text: "计算机网络", link: "/base/net/net.md" },
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
              { text: "JS", link: "/langs/js/" },
              { text: "TS", link: "/langs/ts/" },
            ],
          },
          {
            text: " 后  端 ",
            items: [
              { text: "C", link: "/langs/c/" },
              { text: "C++", link: "/langs/cpp/" },
              // { text: "C#", link: "/langs/csharp/" },
              { text: "Java", link: "/langs/java/" },
              { text: "Python", link: "/langs/py/" },
              { text: "Golang", link: "/langs/go/" },
              { text: "SQL", link: "/langs/sql/" },
              // { text: "Lua", link: "/langs/lua/" },
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
          { text: "Spring Framework", link: "/spring/framework/" },
          { text: "Spring Boot", link: "/spring/boot/" },
          { text: "Spring Cloud", link: "/spring/cloud/" },
          { text: "Spring Cloud Alibaba", link: "/spring/cloud/alibaba" },
          { text: "Spring Cloud Netflix", link: "/spring/cloud/netflix" },
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
        link: "/interviews/"
      },
      { text: "关于", link: "/about" },
    ],

    sidebar: {
      "/base/ds/": [

      ],
      "/langs/html/": [
        {
          text: "HTML",
          items: [
            { text: "01", link: "/langs/html/01" },
          ]
        }
      ],
      "/langs/css/": [
        {
          text: "CSS",
          items: [
            { text: "01", link: "/langs/css/01" },
          ]
        }
      ],
      "/langs/js/": [
        {
          text: "JavaSript编程语言",
          collapsed: true,
          items: [{ text: "1", link: "/program-langs/c/1/" }],
        },
      ],
      "/langs/ts/": [
        {
          text: "TypeScript编程语言",
          collapsed: true,
          items: [{ text: "1", link: "/program-langs/c/1/" }],
        },
      ],
      "/langs/c/": [
        {
          text: "C编程语言",
          // collapsed: false,
          items: [
            { text: "C语言概述", link: "/langs/c/C语言概述" },
            { text: "结构化的C程序设计", link: "/langs/c/结构化的C程序设计" },
            { text: "C语言程序流程控制", link: "/langs/c/C语言程序流程控制" },
            { text: "C语言数组", link: "/langs/c/C语言数组" },
            { text: "C语言指针", link: "/langs/c/C语言指针" },
            { text: "C语言字符和字符串", link: "/langs/c/C语言字符和字符串" },
            { text: "格式化输入和输出", link: "/langs/c/格式化输入和输出" },
            { text: "结构体_共用体_枚举_位域", link: "/langs/c/结构体_共用体_枚举_位域" },
          ],
        },
      ],

      "/langs/cpp/": [
        {
          text: "C++编程语言",
          // collapsed: false,
          items: [
            { text: "C++对象技术简介", link: "/langs/cpp/00-C++对象技术简介" },
            { text: "C++类与对象简介", link: "/langs/cpp/01-类与对象简介" },
            { text: "C++类的深入剖析一", link: "/langs/cpp/02-类的深入剖析一" },
            { text: "C++类的深入剖析二", link: "/langs/cpp/03-类的深入剖析二" },
            { text: "C++运算符重载", link: "/langs/cpp/04-运算符重载" },
            { text: "C++继承", link: "/langs/cpp/05-C++继承" },
            { text: "C++多态", link: "/langs/cpp/06-C++多态" },
            { text: "C++模板", link: "/langs/cpp/07-C++模板" },
            { text: "C++IO", link: "/langs/cpp/08-C++IO流" },
            { text: "C++异常", link: "/langs/cpp/09-C++异常处理" },
            { text: "C++新特性", link: "/langs/cpp/10-C++新特性" },
          ],
        },
      ],
      "/langs/csharp/": [
        {
          text: "C#编程语言",
          collapsed: true,
          items: [
            { text: "C#01", link: "/program-langs/c/1/" }
          ],
        },
      ],
      "/langs/java/": [
        {
          text: "Java编程语言",
          // collapsed: false,
          items: [
            { text: "概述与基础", link: "/langs/java/01" },
            { text: "选择与循环", link: "/langs/java/02" },
            { text: "类与对象", link: "/langs/java/03" },
            { text: "数组", link: "/langs/java/04" },
            { text: "字符串", link: "/langs/java/05" },
            { text: "继承与多态", link: "/langs/java/06" },
            { text: "常用类", link: "/langs/java/07" },
            { text: "内部类、枚举、注解", link: "/langs/java/08" },
            { text: "接口、Lambda表达式", link: "/langs/java/09" },
            { text: "泛型与集合", link: "/langs/java/10" },
            { text: "异常处理", link: "/langs/java/11" },
            { text: "输入输出(IO)", link: "/langs/java/12" },
            { text: "GUI编程", link: "/langs/java/13" },
            { text: "数据库编程", link: "/langs/java/14" },
            { text: "反射与代理", link: "/langs/java/15" },
            { text: "多线程与并发", link: "/langs/java/16" },
            { text: "网络编程", link: "/langs/java/17" },
          ],
        },
      ],
      "/langs/py/": [
        {
          text: "Python编程语言",
          collapsed: true,
          items: [{ text: "1", link: "/program-langs/c/1/" }],
        },
      ],
      "/langs/go/": [
        {
          text: "Go编程语言",
          collapsed: true,
          items: [{ text: "1", link: "/program-langs/c/1/" }],
        },
      ],
      "/langs/sql/": [
        {
          text: "SQL编程语言",
          collapsed: true,
          items: [{ text: "1", link: "/program-langs/c/1/" }],
        },
      ],

      "/langs/lua/": [
        {
          text: "Lua编程语言",
          collapsed: true,
          items: [{ text: "1", link: "/program-langs/c/1/" }],
        },
      ],
      "/interviews/": [
        {
          text:"计算机网络",
          link:"/interviews/network/"
        },
        {
          text: "Java 面试题",
          //collapsed: false,
          items: [
            { text: "基础", link: "/interviews/java/java基础.md" },
            { text: "继承与多态", link: "/interviews/java/继承与多态.md" },
            { text: "集合", link: "/interviews/java/集合.md" },
            { text: "多线程", link: "/interviews/java/多线程.md" },
            { text: "并发", link: "/interviews/java/并发.md" },
            { text: "反射与注解", link: "/interviews/java/反射与注解.md" },
            { text: "代理", link: "/interviews/java/代理.md" },
            { text: "IO", link: "/interviews/java/IO.md" },
            { text: "JVM", link: "/interviews/java/jvm.md" }
          ],
        },
        {
          text: "场景类",
          collapsed: false,
          items: [
            { text: "场景1", link: "/interviews/java" },
            { text: "场景2", link: "/interviews/java" }
          ],
        },
        {
          text: "系统设计类",
          collapsed: false,
          items: [
            { text: "设计1", link: "/interviews/java" },
            { text: "设计2", link: "/interviews/java" }
          ],
        },
        {
          text: "问题排查类",
          collapsed: false,
          items: [
            { text: "排查1", link: "/interviews/bases/java" },
            { text: "排查2", link: "/interviews/bases/java" },
            { text: "排查3", link: "/interviews/bases/java" },
            { text: "排查4", link: "/interviews/bases/java" },

          ],
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
      prev: "温故而知新",
      next: "学而时习之",
    },
    outline: {
      label: "本页内容",
    },
    editLink: {
      pattern: "https://github.com/roueyunloo/",
      text: "在 GitHub 上编辑此页面",
    },
  },
});

export const interviewsSidebar = {
  "/interviews/": [
    { text: "计算机网络", link: "/interviews/network/" },
    {
      text: "Java 面试题",
      items: [
        { text: "基础", link: "/interviews/java/base.md" },
        { text: "集合", link: "/interviews/java/collection.md" },
        { text: "多线程", link: "/interviews/java/multi-thread.md" },
        { text: "JVM", link: "/interviews/java/jvm.md" },
      ],
    },
    {
      text: "MySQL 面试题",
      collapsed: false,
      items: [{ text: "MySQL01", link: "/interviews/mysql/mysql.md" }],
    },
    {
      text: "Redis 面试题",
      collapsed: false,
      items: [{ text: "Redis01", link: "/interviews/redis/redis.md" }],
    },
  ],
  "/interviews/scenes/": [
    { text: "场景面试题", link: "/interviews/scenes/" },
  ],
};

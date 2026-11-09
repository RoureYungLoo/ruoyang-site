import { generateSidebar } from "./generate.mjs";

export const interviewsSidebar = {
  "/interviews/": [
    ...generateSidebar({
      directory: "interviews/network",
      base: "/interviews/network/",
    }),
    ...generateSidebar({
      directory: "interviews/java",
      base: "/interviews/java/",
      text: "Java 面试题",
    }),
    ...generateSidebar({
      directory: "interviews/mysql",
      base: "/interviews/mysql/",
      text: "MySQL 面试题",
      collapsed: false,
    }),
    ...generateSidebar({
      directory: "interviews/redis",
      base: "/interviews/redis/",
      text: "Redis 面试题",
      collapsed: false,
    }),
  ],
  "/interviews/scenes/": generateSidebar({
    directory: "interviews/scenes",
    base: "/interviews/scenes/",
  }),
};

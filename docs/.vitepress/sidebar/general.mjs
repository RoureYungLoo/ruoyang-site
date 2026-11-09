import { generateSidebar } from "./generate.mjs";

export const generalSidebar = {
  "/": [{ text: "首页", link: "/" }],
  "/build-tools/maven/": generateSidebar({
    directory: "build-tools/maven",
    base: "/build-tools/maven/",
  }),
  "/build-tools/gradle/": generateSidebar({
    directory: "build-tools/gradle",
    base: "/build-tools/gradle/",
  }),
  "/nginx/": generateSidebar({
    directory: "nginx",
    base: "/nginx/",
  }),
  "/computer-science-fundamentals/algorithm-analysis-and-design/": generateSidebar({
    directory: "computer-science-fundamentals/algorithm-analysis-and-design",
    base: "/computer-science-fundamentals/algorithm-analysis-and-design/",
    text: "算法分析与设计",
    collapsed: false,
  }),
  "/computer-science-fundamentals/data-structures/": generateSidebar({
    directory: "computer-science-fundamentals/data-structures",
    base: "/computer-science-fundamentals/data-structures/",
    text: "数据结构",
    collapsed: false,
  }),
  "/computer-science-fundamentals/computer-networks/": generateSidebar({
    directory: "computer-science-fundamentals/computer-networks",
    base: "/computer-science-fundamentals/computer-networks/",
  }),
  "/computer-science-fundamentals/computer-organization/": generateSidebar({
    directory: "computer-science-fundamentals/computer-organization",
    base: "/computer-science-fundamentals/computer-organization/",
  }),
  "/computer-science-fundamentals/operating-systems/": generateSidebar({
    directory: "computer-science-fundamentals/operating-systems",
    base: "/computer-science-fundamentals/operating-systems/",
  }),
  "/big-data/": generateSidebar({
    directory: "big-data",
    base: "/big-data/",
  }),
  "/programmatic-advertising/": generateSidebar({
    directory: "programmatic-advertising",
    base: "/programmatic-advertising/",
    text: "程序化广告",
  }),
};

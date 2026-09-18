export const generalSidebar = {
  "/": [{ text: "首页", link: "/" }],
  "/build_tool/maven/": [
    { text: "Maven快速入门", link: "/build_tool/maven/" },
  ],
  "/build_tool/gradle/": [
    { text: "Gradle快速入门", link: "/build_tool/gradle/" },
  ],
  "/nginx/": [{ text: "Nginx 快速入门", link: "/nginx" }],
  "/cs_base/alg/": [
    {
      text: "算法分析设计",
      collapsed: false,
      items: [{ text: "学习指南", link: "/cs_base/alg/" }],
    },
  ],
  "/cs_base/ds/": [
    {
      text: "数据结构",
      collapsed: false,
      items: [{ text: "学习指南", link: "/cs_base/ds/" }],
    },
  ],
  "/cs_base/net/": [
    { text: "网络学习指南", link: "/cs_base/net/" },
    { text: "VPN 原理与实践", link: "/cs_base/net/vpn" },
  ],
  "/cs_base/poc/": [
    { text: "计算机组成学习指南", link: "/cs_base/poc/" },
  ],
  "/cs_base/os/": [
    { text: "操作系统学习指南", link: "/cs_base/os/" },
    { text: "Linux", link: "/cs_base/os/linux" },
    {
      text: "Ubuntu 22.04 LTS 安装教程",
      link: "/cs_base/os/ubuntu2204",
    },
  ],
  "/big_data/": [{ text: "大数据快速入门", link: "/big_data/" }],
};

import { generateSidebar } from "./generate.mjs";

export const languagesSidebar = {
  "/programming-languages/hypertext-markup-language/": generateSidebar({
    directory: "programming-languages/hypertext-markup-language",
    base: "/programming-languages/hypertext-markup-language/",
  }),
  "/programming-languages/cascading-style-sheets/": generateSidebar({
    directory: "programming-languages/cascading-style-sheets",
    base: "/programming-languages/cascading-style-sheets/",
    text: "CSS 学习指南",
  }),
  "/programming-languages/javascript/": generateSidebar({
    directory: "programming-languages/javascript",
    base: "/programming-languages/javascript/",
  }),
  "/programming-languages/c/": generateSidebar({
    directory: "programming-languages/c",
    base: "/programming-languages/c/",
    text: "C编程语言",
  }),
  "/programming-languages/c-plus-plus/": generateSidebar({
    directory: "programming-languages/c-plus-plus",
    base: "/programming-languages/c-plus-plus/",
    text: "C++编程语言",
  }),
  "/programming-languages/java/": generateSidebar({
    directory: "programming-languages/java",
    base: "/programming-languages/java/",
    text: "Java编程语言",
  }),
  "/programming-languages/python/": generateSidebar({
    directory: "programming-languages/python",
    base: "/programming-languages/python/",
  }),
  "/programming-languages/lua/": generateSidebar({
    directory: "programming-languages/lua",
    base: "/programming-languages/lua/",
  }),
};

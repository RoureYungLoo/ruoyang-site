import { generateSidebar } from "./generate.mjs";

export const dataSidebar = {
  "/databases/non-relational/mongodb/": generateSidebar({
    directory: "databases/non-relational/mongodb",
    base: "/databases/non-relational/mongodb/",
  }),
  "/databases/non-relational/redis/": generateSidebar({
    directory: "databases/non-relational/redis",
    base: "/databases/non-relational/redis/",
  }),
  "/databases/relational/mysql/": generateSidebar({
    directory: "databases/relational/mysql",
    base: "/databases/relational/mysql/",
    text: "MySQL数据库",
  }),
};

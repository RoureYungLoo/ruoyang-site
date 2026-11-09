import { generateSidebar } from "./generate.mjs";

export const middlewareSidebar = {
  "/message-queues/kafka/": generateSidebar({
    directory: "message-queues/kafka",
    base: "/message-queues/kafka/",
  }),
  "/message-queues/rocketmq/": generateSidebar({
    directory: "message-queues/rocketmq",
    base: "/message-queues/rocketmq/",
  }),
  "/middleware/elasticsearch/": generateSidebar({
    directory: "middleware/elasticsearch",
    base: "/middleware/elasticsearch/",
  }),
  "/middleware/openresty/": generateSidebar({
    directory: "middleware/openresty",
    base: "/middleware/openresty/",
  }),
};

# Sidebar 维护说明

Sidebar 由 `generate.mjs` 在 VitePress 启动或构建时根据 Markdown 文件生成。
各领域的 `.mjs` 文件只负责声明文档目录、URL 前缀和可选的分组标题。

## 新增文章

在已经声明的目录内新增 `.md` 文件后，文章会自动出现在对应 Sidebar 中。
生成器默认只扫描该目录的直接子文件，不递归扫描子目录；新建内容子目录时，
需要在对应领域配置中增加一次 `generateSidebar()` 调用。

## Frontmatter

```yaml
---
title: Hadoop 基础
order: 20
sidebar: true
---
```

- `title`：Sidebar 展示名称；省略时依次使用文章的第一个一级标题和文件名。
- `order`：数值越小越靠前。未指定时，`index.md` 默认排在最前，其余按文件名自然排序。
- `sidebar: false`：页面仍会构建，但不会出现在 Sidebar 中。

构建排除项统一维护在 `../content.mjs`，Sidebar 生成器会复用这份配置，
不会为未构建的 Markdown 生成链接。

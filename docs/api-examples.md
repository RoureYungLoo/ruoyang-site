---
outline: deep
---

# VitePress 内置功能示例

本页只使用 VitePress 自带的 Markdown 扩展，不依赖自定义组件或客户端脚本。

## 自定义容器

::: info 信息
适合补充背景或上下文。
:::

::: tip 提示
适合突出实践建议。
:::

::: warning 注意
适合提示可能产生的风险。
:::

::: danger 警告
适合标注高风险操作。
:::

::: details 点击查看详情
这里是默认折叠的补充内容。
:::

## 代码组

::: code-group

```sh [npm]
npm run docs:dev
```

```sh [pnpm]
pnpm docs:dev
```

:::

## 表格

| 功能 | 写法 |
| --- | --- |
| 页面标题 | Markdown 一级标题 |
| 目录层级 | Frontmatter 中的 `outline` |
| 代码高亮 | 带语言标识的代码块 |
| 站内搜索 | `themeConfig.search` 配置 |

更多用法请参阅 [VitePress Markdown 扩展](https://vitepress.dev/guide/markdown)。

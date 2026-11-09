# 若阳的网站

基于 VitePress 的个人技术笔记站点，内容涵盖计算机基础、编程语言、数据库、中间件、工程实践和面试复习。

## 本地开发

使用 Node.js 和 npm。GitHub Pages 工作流目前使用 Node.js 20；依赖版本由 `package-lock.json` 锁定。

```sh
npm ci
npm run docs:dev
```

打开终端输出的本地地址。开发命令带有 `--host`，也可通过本机局域网地址访问。

Windows PowerShell 如果提示禁止运行 `npm.ps1`，可将命令中的 `npm` 改为 `npm.cmd`，无需修改系统执行策略。

| 命令 | 用途 |
| --- | --- |
| `npm run docs:dev` | 启动开发服务器 |
| `npm run docs:check` | 检查顶部导航和侧边栏是否指向存在且参与构建的页面 |
| `npm run docs:build` | 构建站点，同时检查正文中的站内死链接 |
| `npm run docs:preview` | 预览最近一次构建产物，需先执行构建 |

## 项目结构

```text
.
├── .github/workflows/deploy.yml  # GitHub Pages 构建与部署
├── docs/                        # Markdown 文章，目录同时决定页面 URL
│   ├── .vitepress/
│   │   ├── config.mjs           # 站点、搜索、主题等主配置
│   │   ├── nav.mjs              # 顶部导航
│   │   ├── content.mjs          # 暂不参与构建的文章与目录
│   │   ├── sidebar/             # 按领域组织的侧边栏及生成器
│   │   └── theme/               # Vue 主题扩展和自定义组件
│   ├── public/                 # 公共静态资源，按根路径引用
│   └── index.md                # 首页
├── scripts/check-navigation.mjs # 导航检查
├── .editorconfig               # UTF-8、换行和缩进约定
├── package.json
└── package-lock.json
```

主要内容目录：

| 目录 | 内容 |
| --- | --- |
| `computer-science-fundamentals/`、`algorithms/` | 计算机基础、数据结构与算法 |
| `programming-languages/`、`react/` | 编程语言与前端 |
| `databases/`、`big-data/` | 数据库与大数据 |
| `spring/`、`message-queues/`、`middleware/`、`nginx/` | 后端框架与中间件 |
| `build-tools/`、`version-control/`、`source-code/reading/`、`software-engineering/` | 工具、版本控制、源码阅读与软件工程 |
| `graphical-user-interface/`、`user-interface-design/` | 桌面应用、接口测试与原型设计 |
| `troubleshooting/`、`system-administration/`、`system-optimization/` | 问题排查、系统管理与优化 |
| `interviews/` | 面试复习 |
| `artificial-intelligence/`、`programmatic-advertising/`、`algorithm-engine/`、`low-code-administration/` | 智能体、程序化广告、广告预测与后台选型 |

## 新增和维护文章

1. 在相应主题目录中新建 Markdown 文件。`index.md` 对应目录首页，其余文件名对应文章 URL。移动或重命名时，同步更新正文、首页、导航、侧边栏和构建排除配置中的相关路径。
2. 已配置侧边栏的目录会在启动或构建时扫描直接子文件。新增子目录时，需要在 `docs/.vitepress/sidebar/` 对应领域的配置中声明目录。
3. 使用 frontmatter 调整标题、顺序和侧边栏可见性。详细规则见 [侧边栏维护说明](docs/.vitepress/sidebar/README.md)。更改文章或目录后，重启开发服务器以重新生成侧边栏。
4. 顶部导航维护在 `docs/.vitepress/nav.mjs`；未完成的文章可加入 `docs/.vitepress/content.mjs` 的 `srcExclude`。被排除的文章仍保留在仓库中。
5. 提交前运行 `npm run docs:check` 和 `npm run docs:build`。

```yaml
---
title: 文章标题
order: 20
---
```

`sidebar: false` 只隐藏侧边栏条目，不会阻止页面发布。导航检查仅校验配置中的页面目标，不检查外部网站或页内锚点；正文链接由构建检查。

内容目录和资源子目录统一用小写英文全词，多个词用连字符连接，例如 `artificial-intelligence/`、`data-structures/` 和 `cascading-style-sheets/`。产品和语言专名保留通用名称并转成小写，例如 `mysql/`、`java/` 和 `c-plus-plus/`。`.vitepress/`、`.obsidian/` 及构建输出沿用工具约定。

文章图片放在就近的 `images/` 目录，通过相对路径引用。站点共用图片放在 `docs/public/`，例如 `/weixin.jpg`。

## 构建和部署

构建产物位于 `docs/.vitepress/dist/`。推送到 `main` 或手动运行 `deploy.yml` 工作流，会检查导航、构建并部署到 GitHub Pages。工作流保留完整 Git 历史，供文章的最近更新时间使用。

`node_modules/`、VitePress 缓存与构建产物、`.tmp/`、日志和各级 `.obsidian/` 配置均不应提交。维护说明放在项目根目录或 `.vitepress/` 中，避免被当作站点文章发布。

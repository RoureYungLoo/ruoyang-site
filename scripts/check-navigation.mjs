import { statSync } from "node:fs";
import { resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { isSourceExcluded } from "../docs/.vitepress/content.mjs";
import { nav } from "../docs/.vitepress/nav.mjs";
import { sidebar } from "../docs/.vitepress/sidebar/index.mjs";

const docsRoot = fileURLToPath(new URL("../docs/", import.meta.url));
const failures = [];
let checked = 0;

function checkItems(items, location) {
  for (const item of items) {
    const label = `${location} > ${item.text ?? "(未命名)"}`;
    if (typeof item.link === "string") checkLink(item.link, label);
    if (Array.isArray(item.items)) checkItems(item.items, label);
  }
}

function checkLink(link, label) {
  // External links and same-page anchors are outside this source-file check.
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(link)) return;
  checked += 1;

  if (!link.startsWith("/")) {
    failures.push(`${label}: 站内导航链接应以 / 开头 (${link})`);
    return;
  }

  let route;
  try {
    route = decodeURIComponent(link.split(/[?#]/, 1)[0]).slice(1);
  } catch {
    failures.push(`${label}: URL 编码无效 (${link})`);
    return;
  }

  const source = route === "" || route.endsWith("/")
    ? `${route}index.md`
    : `${route.replace(/\.(?:html|md)$/, "")}.md`;
  const target = resolve(docsRoot, source);

  if (!target.startsWith(`${resolve(docsRoot)}${sep}`)) {
    failures.push(`${label}: 链接超出 docs 目录 (${link})`);
  } else if (isSourceExcluded(source)) {
    failures.push(`${label}: 页面被 content.mjs 排除 (${link})`);
  } else if (!statSync(target, { throwIfNoEntry: false })?.isFile()) {
    failures.push(`${label}: 找不到 ${source} (${link})`);
  }
}

checkItems(nav, "顶部导航");
for (const [prefix, items] of Object.entries(sidebar)) {
  checkItems(items, `侧边栏 ${prefix}`);
}

if (failures.length) {
  console.error(`导航检查失败（${failures.length} 项）：\n${failures.join("\n")}`);
  process.exitCode = 1;
} else {
  console.log(`导航检查通过：${checked} 个站内链接均指向参与构建的 Markdown 文件。`);
}

import { readdirSync, readFileSync } from "node:fs";
import { basename, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { isSourceExcluded } from "../content.mjs";

const docsRoot = fileURLToPath(new URL("../../", import.meta.url));
const naturalCollator = new Intl.Collator("en", {
  numeric: true,
  sensitivity: "base",
});

function parseScalar(value) {
  const trimmedValue = value.trim();

  if (
    (trimmedValue.startsWith('"') && trimmedValue.endsWith('"')) ||
    (trimmedValue.startsWith("'") && trimmedValue.endsWith("'"))
  ) {
    return trimmedValue.slice(1, -1);
  }

  if (trimmedValue === "true") return true;
  if (trimmedValue === "false") return false;

  const numberValue = Number(trimmedValue);
  if (trimmedValue !== "" && Number.isFinite(numberValue)) return numberValue;

  return trimmedValue;
}

function readFrontmatter(markdown) {
  const lines = markdown.replace(/^\uFEFF/, "").split(/\r?\n/);
  if (lines[0]?.trim() !== "---") return {};

  const closingLine = lines.findIndex(
    (line, index) => index > 0 && line.trim() === "---",
  );
  if (closingLine === -1) return {};

  const metadata = {};
  for (const line of lines.slice(1, closingLine)) {
    const match = line.match(/^\s*(title|order|sidebar)\s*:\s*(.*?)\s*$/);
    if (match) metadata[match[1]] = parseScalar(match[2]);
  }

  return metadata;
}

function readFirstHeading(markdown) {
  const content = markdown.replace(/^\uFEFF/, "").replace(
    /^---\s*\r?\n[\s\S]*?\r?\n---\s*(?:\r?\n|$)/,
    "",
  );
  const heading = content.match(/^#\s+(.+?)\s*$/m)?.[1];

  return heading?.replace(/[`*_]/g, "").trim();
}

function createPage(sourceDirectory, routeBase, fileName) {
  const absolutePath = join(docsRoot, sourceDirectory, fileName);
  const sourcePath = relative(docsRoot, absolutePath).replaceAll("\\", "/");
  if (isSourceExcluded(sourcePath)) return undefined;

  const markdown = readFileSync(absolutePath, "utf8");
  const frontmatter = readFrontmatter(markdown);
  if (frontmatter.sidebar === false) return undefined;

  const slug = basename(fileName, extname(fileName));
  const isIndex = slug.toLowerCase() === "index";

  return {
    text: frontmatter.title || readFirstHeading(markdown) || slug,
    link: isIndex ? routeBase : `${routeBase}${slug}`,
    order:
      typeof frontmatter.order === "number"
        ? frontmatter.order
        : isIndex
          ? Number.MIN_SAFE_INTEGER
          : 1000,
    fileName,
  };
}

/**
 * Generates one VitePress sidebar section from the Markdown files directly
 * inside a docs directory. Frontmatter supports title, order and sidebar.
 */
export function generateSidebar({
  directory,
  base,
  text,
  collapsed,
}) {
  const absoluteDirectory = resolve(docsRoot, directory);
  const routeBase = base.endsWith("/") ? base : `${base}/`;

  const items = readdirSync(absoluteDirectory, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isFile() && extname(entry.name).toLowerCase() === ".md",
    )
    .map((entry) => createPage(directory, routeBase, entry.name))
    .filter(Boolean)
    .sort(
      (left, right) =>
        left.order - right.order ||
        naturalCollator.compare(left.fileName, right.fileName),
    )
    .map(({ text: itemText, link }) => ({ text: itemText, link }));

  if (!text) return items;

  return [
    {
      text,
      ...(typeof collapsed === "boolean" ? { collapsed } : {}),
      items,
    },
  ];
}

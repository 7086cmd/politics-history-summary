import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { createFileList } from "./list.js";
import { resolve } from "node:path";
import config from "../.vitepress/config.js";
import { getTopics } from "./toc.js";

const __dirname = resolve();

export function createFile(filter = "/") {
  const filelist = createFileList(filter).result;

  let content =
    (filter === "/"
      ? `
# 政史地综合提纲

[[TOC]]

<div class="divider"></div>

`
      : `
[[TOC]]

<div class="divider"></div>

`) + `
<style>
main {
  /* font-family: "仿宋" !important */
}
</style>`;

  filelist.forEach((file) => {
    if (existsSync(file)) {
      const filec = readFileSync(file, "utf-8").toString();
      content += `
${filec}
<div class="divider"></div>
`;
    } else {
      content += `
${file} is not found.
<div class="divider"></div>
`;
    }
  });

  content += `
<div class="divider"></div>

# Copyrights

作者: [7086cmd](https://github.com/7086cmd).<br>

<p style="font-size: 24px">
本文遵循 <code>CC BY-NC-SA 4.0</code> 协议。未经允许，请勿擅自改动、商用这些内容，并且若转载请注明出处。
</p>

**等到2023年6月以后，资源将会全部开放，届时许可证也会从 \`CC BY-NC-ND 4.0\` 协议改到 \`MIT\` 协议**
`;

  const TOC = getTopics(content);

  content = content.replace("[[TOC]]", TOC);

  writeFileSync(
    resolve(__dirname, filter.replace("/", ""), "print.md"),
    content
  );
}

createFile();
const { nav, sidebar } = config.themeConfig;

nav.forEach((element) => {
  if ("items" in element) {
    element.items.forEach((node) => {
      createFile(node.link);
      if (node.link in sidebar) {
        const content = sidebar[node.link];
        content.forEach((book) => {
          const { items } = book;
          items.forEach((page) => {
            const linklist = page.link.split("/");
            linklist.pop();
            createFile(linklist.join("/"));
            linklist.pop();
            createFile(linklist.join("/"));
          });
        });
      }
    });
  } else {
    if (!element.link.startsWith("/整活资料/")) {
      createFile(element.link);
      if (element.link in sidebar) {
        const content = sidebar[element.link];
        content.forEach((book) => {
          const { items } = book;
          items.forEach((page) => {
            const linklist = page.link.split("/");
            linklist.pop();
            createFile(linklist.join("/"));
            linklist.pop();
            createFile(linklist.join("/"));
          });
        });
      }
    }
  }
});

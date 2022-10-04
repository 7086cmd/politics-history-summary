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

Author: [7086cmd](https://github.com/7086cmd).<br>
Realname: Wu Chengyu.<br>
Now is in a middle school in China.<br>

<p style="font-size: 24px">
These content are followed CC BY-NC-ND 4.0. So, it is not allowed to edit or use for business unless the author agrees.

If you do so, you will be punished.
</p>

**This repo will be  public after 2023.6**
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

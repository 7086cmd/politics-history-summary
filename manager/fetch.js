import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { createFileList } from "./list.js";
import { resolve } from "node:path";
import config from "../.vitepress/config.js";
import { getTopics } from "./toc.js";

const __dirname = resolve();

export function createFile(filter = "/") {
  const filelist = createFileList(filter).result;

  let content = `
  <style>
  #title {
    padding-top: 40%;
    font-size: 96px;
    padding-bottom: 24%;
  }

  #ending {
    padding-top: 60%;
    font-size: 48px;
    padding-bottom: 12%;
  }

  .center {
    text-align: center;
  }
  .right {
    text-align: right;
  }

  #inform {
    padding-right: 8%;
    font-size: 18px;
  }

  .topic {
    padding-top: 12%;
    padding-bottom: 8%;
    font-size: 48px;
  }
</style>
<div class="center">
  <div id="title">{{ printTitle }}</div>
</div>
<div class="right">
  <p id="inform">姓名：________________</p>
  <p id="inform">学号：________________</p>
  <p id="inform">班级：________________</p>
  <p id="inform">学校：________________</p>

  <hr />
  <div>
    {{ printDate }}<br />
    制作：<a href="https://github.com/7086cmd/">7086cmd</a><br />
    仓库地址：<a href="https://github.com/7086cmd/politics-history-summary"
      >https://github.com/7086cmd/politics-history-summary</a
    >
  </div>
</div>


<div class="divider_top"></div>

<div class="divider_top"></div>

<div class="center">
  <div class="topic">目录</div>
</div>

[[TOC]]

<div class="divider"></div>

`;

  filelist.forEach((file) => {
    if (existsSync(file)) {
      const filec = readFileSync(file, "utf-8").toString();
      content += `
${filec}
<div class="divider"></div>
`;
    } else {
      content += `
位于 ${file} 的文件不存在。无法加入页面。
<div class="divider"></div>
`;
    }
  });

  const TOC = getTopics(content);

  content = content.replace("[[TOC]]", TOC);

  content += `
<div class="divider"></div>

# 版权声明

作者: [7086cmd](https://github.com/7086cmd).<br>

<p style="font-size: 24px">
本文遵循 <code>CC BY-NC-SA 4.0</code> 协议。未经允许，请勿擅自改动、商用这些内容，并且若转载请注明出处。
</p>

<script setup>
import { ref } from "vue";

const printTitle = ref(new URL(location.href).pathname === '/print' ? "政史地总资料" : document.title
.split("|")[0]
.trim());

const printDate = ref(\`导出日期：\${new Date().toLocaleDateString()} \${new Date().toLocaleTimeString()}\`);

</script>

<div class="divider_top"></div>

<div class="center">
  <div id="ending">初中政史地提纲整理</div>
</div>

<div class="right">
  <p>未经作者许可禁售。</p>
</div>
`;

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

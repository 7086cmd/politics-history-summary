import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { createFileList } from "./list.js";
import { resolve } from "node:path";

const __dirname = resolve();

let content = `
# 政史地综合提纲

[[TOC]]

<div class="divider"></div>

`

const filelist = createFileList();

filelist.forEach(file => {
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
These content are followed CC-BY&NC&ND 4.0. So, it is not allowed to edit or use for business unless the author agrees.

If you do so, you will be punished.
</p>

**This repo will be  public after 2023.6**
`

writeFileSync(resolve(__dirname, "print.md"), content);

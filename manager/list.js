import config from "../.vitepress/config.js";
import { resolve } from "node:path";

const { nav, sidebar } = config.themeConfig;
const __dirname = resolve("");

export function createFileList() {
  const navs = [];

  const files = [];

  nav.forEach((element) => {
    if ("items" in element) {
      navs.push(...element.items);
    } else {
      navs.push(element);
    }
  });

  function createIndex(path) {
    console.log(path)
    return resolve(__dirname, path.replace("/", "").replace("\\", ""), "index.md");
  }

  navs.forEach((block) => {
    // console.log(block);
    if (block.link in sidebar) {
      const blockFile = createIndex(block.link);
      files.push(blockFile);
      const content = sidebar[block.link];
      content.forEach((book) => {
        // console.log(book, index);
        const { text, items } = book;
        items.forEach((page, index) => {
          const content = createIndex(page.link);
          if (index === 0) {
            files.push(resolve(content, "..", "..", "index.md"));
          }
          files.push(content);
        });
      });
    }
  });
  return files
}

createFileList()

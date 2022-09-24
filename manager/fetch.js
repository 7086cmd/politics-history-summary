import config from "../.vitepress/config.js";
import { resolve } from "node:path";

const { nav, sidebar } = config.themeConfig

// console.log(nav);
// console.log(sidebar);

// step 1 flatten
const __dirname = resolve("")

const navs = [];

nav.forEach((element) => {
  if ("items" in element) {
    navs.push(...element.items);
  } else {
    navs.push(element);
  }
});

// console.log(navs);

navs.forEach(block => {
  if (block.link in sidebar) {
    const content = sidebar[block.link];
    // const { text, items } = content;
    // console.log(text, items, block.link)
    content.forEach(book => {
      const { text, items } = book;
      // console.log(text, items.length, block.link);
      items.forEach(page => {
        const content = resolve(__dirname, page.link.replace("\\", "").replace("/", ""));
        console.log(content)
      });
    });
  };
});

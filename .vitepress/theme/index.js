import DefaultTheme from "vitepress/theme";
// import Mermaid from "vitepress-plugin-mermaid/Mermaid.vue";

import "./index.css";
import "./vars.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // app.component("Mermaid", Mermaid);
  },
};

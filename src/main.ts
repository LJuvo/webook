import { createApp } from "vue";
import ArcoVue from "@arco-design/web-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@arco-design/web-vue/dist/arco.css";
// import VMdEditor from "@kangc/v-md-editor/lib/codemirror-editor";
import "@kangc/v-md-editor/lib/style/codemirror-editor.css";
import githubTheme from "@kangc/v-md-editor/lib/theme/github.js";
import "@kangc/v-md-editor/lib/theme/style/github.css";

// highlightjs
import hljs from "highlight.js";

// codemirror 编辑器的相关资源
// import Codemirror from "codemirror";
// mode
import "codemirror/mode/markdown/markdown";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/vue/vue";
// edit
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/matchbrackets";
// placeholder
import "codemirror/addon/display/placeholder";
// active-line
import "codemirror/addon/selection/active-line";
// scrollbar
import "codemirror/addon/scroll/simplescrollbars";
import "codemirror/addon/scroll/simplescrollbars.css";
// style
import "codemirror/lib/codemirror.css";

import VMdPreview from "@kangc/v-md-editor/lib/preview";
import "@kangc/v-md-editor/lib/style/preview.css";
import "@kangc/v-md-editor/lib/theme/style/github.css";

// import VMdPreviewHtml from "@kangc/v-md-editor/lib/preview-html";
// import "@kangc/v-md-editor/lib/style/preview-html.css";

// 引入使用主题的样式
import "@kangc/v-md-editor/lib/theme/style/vuepress.css";

// import VueMarkdownEditor from "@kangc/v-md-editor";
import "@kangc/v-md-editor/lib/style/base-editor.css";
// import createHljsTheme from "@kangc/v-md-editor/lib/theme/hljs";
import createTipPlugin from "@kangc/v-md-editor/lib/plugins/tip/index";
import "@kangc/v-md-editor/lib/plugins/tip/tip.css";

import createLineNumbertPlugin from "@kangc/v-md-editor/lib/plugins/line-number/index";

import createCopyCodePlugin from "@kangc/v-md-editor/lib/plugins/copy-code/index";
import "@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css";

import mitt from "mitt";
const mitter = mitt();

// const hljsTheme = createHljsTheme({
//   Hljs: hljs,
// });

VMdPreview.use(githubTheme, {
  Hljs: hljs,
});
VMdPreview.use(createTipPlugin());
VMdPreview.use(createLineNumbertPlugin());
VMdPreview.use(createCopyCodePlugin());

// VMdEditor.Codemirror = Codemirror;
// VMdEditor.use(githubTheme, {
//   Hljs: hljs,
// });

// VueMarkdownEditor.vMdParser.theme(hljsTheme);

// VueMarkdownEditor.use(createTipPlugin());

const app = createApp(App);
app.use(ArcoVue);
// app.use(VMdEditor);
app.use(VMdPreview);
// app.use(VMdPreviewHtml);
// app.use(VueMarkdownEditor);
app.config.globalProperties.mitter = mitter;

app.use(store).use(router).mount("#app");

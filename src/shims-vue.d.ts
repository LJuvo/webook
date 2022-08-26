/* eslint-disable */

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "@kangc/v-md-editor";
declare module "@kangc/v-md-editor/lib/codemirror-editor";
declare module "@kangc/v-md-editor/lib/theme/github.js";
declare module "@kangc/v-md-editor/lib/preview";
declare module "@kangc/v-md-editor/lib/preview-html";
declare module "@kangc/v-md-editor/lib/theme/hljs";
declare module "@kangc/v-md-editor/lib/plugins/tip/index";
declare module "@kangc/v-md-editor/lib/plugins/line-number/index";
declare module "@kangc/v-md-editor/lib/plugins/copy-code/index";
declare module "codemirror";

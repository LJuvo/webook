<template>
  <a-layout>
    <a-layout-content style="padding: 0 24px">
      <button @click="saveMd">保存</button>
      <v-md-editor v-model="text" height="400px"></v-md-editor>
      <v-md-preview :text="previewTxt"></v-md-preview>
      <v-md-preview :text="text"></v-md-preview>
      <v-md-preview-html
        :html="htmlTxt"
        preview-class="vuepress-markdown-body"
      ></v-md-preview-html>
    </a-layout-content>
  </a-layout>
</template>
<script lang="ts">
import { ref } from "vue";
import { Message } from "@arco-design/web-vue";
import mdModel from "./test";
import { defineComponent } from "vue";
import VueMarkdownEditor, { xss } from "@kangc/v-md-editor";
import { getMarkDown } from "../../api/preview";

export default defineComponent({
  data() {
    return {
      previewTxt: ref(""),
    };
  },
  setup() {
    const text = ref("");
    const collapsed = ref(false);
    const onCollapse = (val: boolean) => {
      collapsed.value = val;
    };
    const saveMd = () => {
      const html = xss.process(
        VueMarkdownEditor.vMdParser.themeConfig.markdownParser.render(
          text.value
        )
      );
      console.log("html ->", html);
    };

    const htmlTxt = ref(mdModel.info);

    return {
      text,
      htmlTxt,
      collapsed,
      onCollapse,
      onClickMenuItem(key: string) {
        Message.info({ content: `You select ${key}`, showIcon: true });
      },
      saveMd,
    };
  },
  mounted() {
    this.fetchMdData();
  },

  methods: {
    fetchMdData: function () {
      getMarkDown("way_01")
        .then((response: any) => {
          console.log("正常响应");
          console.log(response);
          this.previewTxt = response;
        })
        .catch((error: any) => {
          //发生错误时执行的代码
          console.log("异常响应");
          console.log(error);
        });
    },
  },
});
</script>

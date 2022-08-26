<template>
  <a-layout style="height: 100%; overflow: hidden">
    <a-layout-sider collapsible breakpoint="xl" :width="220">
      <a-menu
        auto-open
        :defaultSelectedKeys="['way_01']"
        @menuItemClick="onClickMenuItem"
      >
        <a-sub-menu key="0">
          <template #icon><icon-apps></icon-apps></template>
          <template #title>零基础入门</template>
          <a-menu-item key="way_01">专业、语言、行业介绍</a-menu-item>
          <a-menu-item key="way_02">职业前景</a-menu-item>
          <a-menu-item key="way_03">开发变革</a-menu-item>
          <a-menu-item key="way_04">大前端时代</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="1">
          <template #icon><icon-bug></icon-bug></template>
          <template #title>前端学习路线</template>
          <a-menu-item key="way_11">2022最新学习路线</a-menu-item>
          <a-menu-item key="way_12">主要技术栈</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="2">
          <template #icon><icon-bulb></icon-bulb></template>
          <template #title>全栈学习路线</template>
          <a-menu-item key="way_21">全栈学习技能成长路线</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout-content class="content-wrapper">
      <v-md-preview :text="previewTxt"></v-md-preview>
    </a-layout-content>
  </a-layout>
</template>
<script lang="ts">
import { ref } from "vue";
import { defineComponent } from "vue";
import { IconApps, IconBug, IconBulb } from "@arco-design/web-vue/es/icon";
import { getMarkDown } from "@/api/preview";
export default defineComponent({
  components: {
    IconApps,
    IconBug,
    IconBulb,
  },
  setup() {
    const previewTxt = ref("");
    function fetchMdData(id: string) {
      getMarkDown(id)
        .then((response) => {
          previewTxt.value = response.toString();
        })
        .catch((error) => {
          console.log("异常响应 ->", error);
        });
    }

    fetchMdData("way_01");
    return {
      previewTxt,
      onClickMenuItem(key: string) {
        fetchMdData(key);
      },
    };
  },
});
</script>
<style lang="less" scoped>
.content-wrapper {
  padding: 0 24px;
  height: 100%;
  overflow-y: auto;
}
</style>

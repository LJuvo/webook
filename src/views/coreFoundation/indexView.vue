<template>
  <a-layout style="height: 100%; overflow: hidden">
    <a-layout-sider collapsible breakpoint="xl" :width="220">
      <a-menu
        auto-open
        :defaultSelectedKeys="['core_00']"
        @menuItemClick="onClickMenuItem"
      >
        <a-menu-item key="core_00">核心基础介绍</a-menu-item>
        <a-sub-menu key="0">
          <template #icon><icon-apps></icon-apps></template>
          <template #title>前端基础</template>
          <a-menu-item key="core_01">HTML/HTML5</a-menu-item>
          <a-menu-item key="core_02">CSS/CSS3</a-menu-item>
          <a-menu-item key="core_03">JavaScript基础</a-menu-item>
          <a-menu-item key="core_04">JavaScript高级</a-menu-item>
          <a-menu-item key="core_05">CSS布局</a-menu-item>
          <a-menu-item key="core_06">JS特效案例库</a-menu-item>
          <a-menu-item key="core_07">常见设计模式</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="1">
          <template #icon><icon-bug></icon-bug></template>
          <template #title>模块化/组件化</template>
          <a-menu-item key="core_11">ES6基础+高级</a-menu-item>
          <a-menu-item key="core_12">前后端数据交互</a-menu-item>
          <a-menu-item key="core_13">移动WebApp开发</a-menu-item>
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
import { IconApps, IconBug } from "@arco-design/web-vue/es/icon";
import { getMarkDown } from "@/api/preview";
export default defineComponent({
  components: {
    IconApps,
    IconBug,
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

    fetchMdData("core_00");
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

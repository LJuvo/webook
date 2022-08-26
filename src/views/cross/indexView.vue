<template>
  <a-layout style="height: 100%; overflow: hidden">
    <a-layout-sider collapsible breakpoint="xl" :width="220">
      <a-menu
        auto-open
        :defaultSelectedKeys="['cross_01']"
        @menuItemClick="onClickMenuItem"
      >
        <a-menu-item key="cross_01">跨端开发介绍</a-menu-item>
        <a-menu-item key="cross_02">小程序基础+实战</a-menu-item>
        <a-menu-item key="cross_03">Vue3.x基础+实战</a-menu-item>
        <a-menu-item key="cross_04">TypeScript基础+高级</a-menu-item>
        <a-menu-item key="cross_05">React基础+实战</a-menu-item>
        <a-menu-item key="cross_06">Angular基础+实战</a-menu-item>
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
import { getMarkDown } from "@/api/preview";
export default defineComponent({
  components: {},
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

    fetchMdData("cross_01");
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

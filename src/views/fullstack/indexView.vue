<template>
  <a-layout style="height: 100%; overflow: hidden">
    <a-layout-sider collapsible breakpoint="xl" :width="220">
      <a-menu
        auto-open
        :defaultSelectedKeys="['fullstack_01']"
        @menuItemClick="onClickMenuItem"
      >
        <a-menu-item key="fullstack_01">Web全栈学习路线</a-menu-item>
        <a-menu-item key="fullstack_02">大厂必备完整版</a-menu-item>
        <a-menu-item key="fullstack_03">NodeJS基础</a-menu-item>
        <a-menu-item key="fullstack_04">NodeJS高级</a-menu-item>
        <a-menu-item key="fullstack_05">Koa基础</a-menu-item>
        <a-menu-item key="fullstack_06">Koa实战</a-menu-item>
        <a-menu-item key="fullstack_07">数据库基础</a-menu-item>
        <a-menu-item key="fullstack_08">数据库实战</a-menu-item>
        <a-menu-item key="fullstack_09">前后端分离项目部署</a-menu-item>
        <a-menu-item key="fullstack_10">团队协同/工程化/监控运维</a-menu-item>
        <a-menu-item key="fullstack_11">Git团队开发与跨团队开发</a-menu-item>
        <a-menu-item key="fullstack_12">Restful API接口管理</a-menu-item>
        <a-menu-item key="fullstack_13">项目自动化构建及部署</a-menu-item>
        <a-menu-item key="fullstack_14">Nginx负载均衡/日志与监控</a-menu-item>
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

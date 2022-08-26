<template>
  <a-layout style="height: 100%; overflow: hidden">
    <a-layout-sider collapsible breakpoint="xl" :width="220">
      <a-menu
        auto-open
        :defaultSelectedKeys="['interview_01']"
        @menuItemClick="onClickMenuItem"
      >
        <a-menu-item key="interview_01">面试方法论</a-menu-item>
        <a-menu-item key="interview_02">如何搞定所有面试题</a-menu-item>
        <a-menu-item key="interview_03">核心基础面试题</a-menu-item>
        <a-menu-item key="interview_04">HTML5</a-menu-item>
        <a-menu-item key="interview_05">CSS3</a-menu-item>
        <a-menu-item key="interview_06">JavaScript</a-menu-item>
        <a-menu-item key="interview_07">ES6</a-menu-item>
        <a-menu-item key="interview_08">前端进阶面试题</a-menu-item>
        <a-menu-item key="interview_09">浏览器、性能、安全</a-menu-item>
        <a-menu-item key="interview_10">框架与全栈面试题</a-menu-item>
        <a-menu-item key="interview_11">Vue面试题</a-menu-item>
        <a-menu-item key="interview_12">React面试题</a-menu-item>
        <a-menu-item key="interview_13">全栈面试题</a-menu-item>
        <a-menu-item key="interview_14">就业指导</a-menu-item>
        <a-menu-item key="interview_15">求职前准备</a-menu-item>
        <a-menu-item key="interview_16">求职方法论</a-menu-item>
        <a-menu-item key="interview_17">收尾工作</a-menu-item>
        <a-menu-item key="interview_18">入职前后注意事项</a-menu-item>
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

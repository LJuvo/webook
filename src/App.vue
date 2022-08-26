<template>
  <a-layout :style="{ height: '100%', ...themeStyle }">
    <a-layout-header v-if="!isFull">
      <a-menu
        :selectedKeys="selectedKeys"
        mode="horizontal"
        @menu-item-click="setectMenuItem"
        @sub-menu-click="selectSubMenu"
      >
        <a-menu-item key="index" :style="{ padding: 0, marginRight: '38px' }">
          <div
            :style="{
              width: '80px',
              height: '30px',
              borderRadius: '2px',
              background: 'var(--color-fill-3)',
              cursor: 'pointer',
              'text-align': 'center',
            }"
          >
            WEBOOK
          </div>
        </a-menu-item>
        <a-menu-item key="0_11" disabled>
          <IconHome />
          创新
        </a-menu-item>
        <a-menu-item key="way">
          <IconCalendar />
          学习路线
        </a-menu-item>
        <a-menu-item key="core"><IconCalendar />核心基础</a-menu-item>
        <a-sub-menu key="7">
          <template #title>
            <span><IconCalendar />开发能力</span>
          </template>
          <a-menu-item key="cross"><IconCalendar />跨端开发</a-menu-item>
          <a-menu-item key="fullstack"><IconCalendar />全栈开发</a-menu-item>
          <a-menu-item key="8_1">30天挑战</a-menu-item>
          <a-menu-item key="8_2">90天挑战</a-menu-item>
          <a-menu-item key="8_3">120天挑战</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="interview"><IconCalendar />面试题</a-menu-item>
        <a-menu-item key="demo">
          <IconCalendar />
          演示平台
        </a-menu-item>
        <a-menu-item key="visual">
          <IconCalendar />
          可视化平台
        </a-menu-item>
        <a-menu-item key="about">
          <IconCalendar />
          寻找大部队
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <router-view />
  </a-layout>
</template>
<script lang="ts">
import { IconCalendar, IconHome } from "@arco-design/web-vue/es/icon";
import { getCurrentInstance, onMounted, onUnmounted, Ref, ref } from "vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

interface RouterItemModel {
  key: string;
  label: string;
  url: string;
}
export interface ThemeStyleModel {
  "--primary": string;
}

export default defineComponent({
  components: {
    IconHome,
    IconCalendar,
  },
  data() {
    return {
      previewTxt: ref(""),
    };
  },
  setup() {
    // route = useRoute();
    const routerArr = ref([
      { key: "index", label: "首页", url: "/" },
      { key: "new", label: "创新", url: "" },
      { key: "way", label: "学习路线", url: "/way" },
      { key: "core", label: "核心基础", url: "/core" },
      { key: "cross", label: "跨端开发", url: "/cross" },
      { key: "interview", label: "面试题", url: "/interview" },
      { key: "fullstack", label: "全栈开发", url: "/fullstack" },
      { key: "8", label: "挑战计划", url: "" },
      { key: "8_1", label: "挑战计划", url: "/preview/axdw-qeqw" },
      { key: "8_2", label: "挑战计划", url: "/preview/fdws-bsad" },
      { key: "8_3", label: "挑战计划", url: "/preview/guide" },
      { key: "demo", label: "演示平台", url: "/demo" },
      { key: "visual", label: "可视化平台", url: "/visual" },
      { key: "about", label: "寻找大部队", url: "/about" },
    ]);

    const selectedKeys: Ref<string[]> = ref([]);
    const router = useRouter();
    const isFull = ref(false);
    onMounted(() => {
      if (
        window.location.href.indexOf("visual") > -1 ||
        window.location.href.indexOf("redbook") > -1
      ) {
        isFull.value = true;
      }
    });

    const themeStyle = ref({ "--primary": "#f3c30d" });

    const mitter =
      getCurrentInstance()?.appContext.config.globalProperties.mitter;
    mitter.on("handleChange", someMethed);
    function someMethed(val: ThemeStyleModel) {
      themeStyle.value = val;
    }
    onUnmounted(() => {
      mitter.off("handleChange", someMethed);
    });

    return {
      themeStyle,
      selectedKeys,
      routerArr,
      isFull,
      setectMenuItem: (key: string) => {
        const item: RouterItemModel | undefined = routerArr.value.find(
          (o: RouterItemModel) => o.key === key
        );
        isFull.value = false;
        if (key == "visual") isFull.value = true;
        selectedKeys.value = [key];
        router.push(item && item.url ? item.url : "");
      },
      selectSubMenu: (key: string) => {
        console.log("selectSubMenu ->", key);
      },
    };
  },
});
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
  display: flex;
}
</style>
<style lang="less" scoped>
.arco-layout-header {
  // border-bottom: 1px solid var(--color-border);
  background-color: var(--color-bg-2);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 4%);
  z-index: 2;
}

.layout-demo :deep(.arco-layout-header),
.layout-demo :deep(.arco-layout-footer),
.layout-demo :deep(.arco-layout-sider-children),
.layout-demo :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-white);
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}

.layout-demo :deep(.arco-layout-header),
.layout-demo :deep(.arco-layout-footer) {
  height: 64px;
  background-color: var(--color-primary-light-4);
}
</style>

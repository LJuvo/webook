<template>
  <div
    class="visual-container"
    style="background-image: url(assets/images/visual/start/bg.png)"
    id=""
  >
    <div class="visual-container-mask"></div>
    <div
      v-if="currentChoose !== ''"
      class="visual-container-back"
      @click="backChoose()"
    >
      返回
    </div>

    <section class="visual-container-wrapper">
      <div style="margin-top: 300px" v-if="currentChoose === ''">
        <span class="visual-color" @click="handleClick">变色</span>
        <visual-list
          :list="visualArr"
          @choose="chooseVisual($event)"
        ></visual-list>
      </div>
      <cloud-city v-if="currentChoose === 'cloudcity'"></cloud-city>
      <GaodeMap v-if="currentChoose === 'map'"></GaodeMap>
      <cute-city v-if="currentChoose === 'cutecity'"></cute-city>
      <!-- <LightLine></LightLine> -->
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance, ref } from "vue";
import CloudCity from "./visual/cloudCtity.vue";
import GaodeMap from "./visual/gaodeMap.vue";
import VisualList from "./visual/visualList.vue";
import CuteCity from "./visual/cuteCity.vue";
// import LightLine from "./visual/lightLine.vue";
export default defineComponent({
  components: {
    CloudCity,
    GaodeMap,
    VisualList,
    CuteCity,
    // LightLine,
  },
  setup() {
    let flag = false;
    const mitter =
      getCurrentInstance()?.appContext.config.globalProperties.mitter;
    const handleClick = () => {
      flag = !flag;
      mitter.emit("handleChange", { "--primary": flag ? "#fff" : "#f3c30d" });
    };

    const currentChoose = ref("");
    return {
      currentChoose,
      chooseVisual: (key: string) => {
        currentChoose.value = key;
      },
      backChoose: () => {
        currentChoose.value = "";
      },
      visualArr: [
        { key: "cloudcity" },
        { key: "cloudcity" },
        { key: "cutecity" },
      ],
      handleClick,
    };
  },
});
</script>

<style lang="less" scoped>
.visual-container {
  width: 100%;
  height: 100%;
  background: #1e1e1e;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
  &-mask {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.45);
    backdrop-filter: blur(10px);
    z-index: 1;
  }
  &-wrapper {
    z-index: 10;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
  }
  &-back {
    z-index: 99;
    position: absolute;
    left: 20px;
    top: 20px;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
  }
}
.visual-color {
  color: var(--primary);
}
</style>

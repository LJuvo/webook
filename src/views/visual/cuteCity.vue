<template>
  <div
    class="cute-container"
    style="background-image: url(assets/images/visual/start/bg.png)"
    id=""
  >
    <div class="cute-container-mask"></div>

    <section class="cute-container-wrapper">
      <h1>后勤保障管理中心</h1>
      <div class="cute-container-btn-group">
        <div class="cute-container-btn">
          <img src="assets/images/visual/start/btn_00.png" />
          <span>管理模式</span>
        </div>
        <div class="cute-container-btn">
          <img src="assets/images/visual/start/btn_01.png" />
          <span>游客模式</span>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
.cute-container {
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
    // backdrop-filter: blur(10px);
    z-index: 1;
    animation: mask-hide 2s linear 1;
  }
  &-wrapper {
    z-index: 10;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    text-align: center;
    h1 {
      width: 576px;
      height: 104px;
      font-family: SourceHanSansCN-Bold;
      font-size: 72px;
      font-weight: bold;
      letter-spacing: 0em;
      background-clip: text;
      /*设置元素的背景（背景图片或颜色）延伸范围 */
      color: transparent;
      background-image: linear-gradient(
        180deg,
        #ffffff 0%,
        #ffffff 30%,
        #ffffff00 100%
      );
      margin: 0 auto 60px;
    }
  }
  &-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      font-family: SourceHanSansCN-Bold;
      font-size: 36px;
      font-weight: bold;
      line-height: 36px;
      letter-spacing: 0em;
      color: #ffffff;
      white-space: nowrap;
    }
  }
  &-btn:first-child {
    margin-right: 120px;
  }
  &-btn-group {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
}
@keyframes mask-hide {
  0% {
    backdrop-filter: blur(10px);
  }
  100% {
    backdrop-filter: blur(0px);
  }
}
</style>

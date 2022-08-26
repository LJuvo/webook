<template>
  <div class="right">
    <input
      class="right-range"
      v-model="currentProgress"
      min="0"
      max="100"
      type="range"
    />
    <div
      class="right_drag_wrap"
      style="transform: translate(0%, -60%) translate(0px, 312px)"
    >
      <div class="guide-light-img guide-img">
        <img
          src="https://img.js.design/assets/static/f6534a20f8c8b949944aca6a8cad7b15.png"
          class="width-full"
        />
      </div>
      <div class="drag-mask" :style="'width: ' + currentProgress + '%'">
        <div class="guide-dark-img guide-img">
          <img
            src="https://img.js.design/assets/static/b14c448118c24927478a047de659d429.png"
            class="width-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const currentProgress = ref(80);
    return {
      currentProgress,
    };
  },
});
</script>
<style lang="less" scoped>
:root {
  --shadow-1: 0px 2px 4px rgba(23, 28, 39, 0.14);
  --shadow-2: rgba(0, 0, 0, 0.08) 0px 4px 6px 0px,
    rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  --shadow-3: rgba(23, 25, 29, 0.2) 0px 16px 16px -16px,
    rgba(23, 25, 29, 0.03) 0px 14px 20px 0px,
    rgba(23, 25, 29, 0.04) 0px 0px 0px 1px;
  --shadow-4: rgba(23, 25, 29, 0.5) 0px 16px 16px -16px,
    rgba(23, 25, 29, 0.03) 0px 14px 20px 0px,
    rgba(23, 25, 29, 0.04) 0px 0px 0px 1px;
  --shadow-5: rgba(23, 25, 29, 0.34) 0px 12px 40px -8px,
    rgba(23, 25, 29, 0.03) 0px 8px 40px 0px;
  --shadow-6: 0px 3px 6px rgba(23, 25, 29, 0.2);
  --light-panel-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.05),
    0px 4px 10px rgba(0, 0, 0, 0.1);
  --dark-panel-shadow: 0px 0px 0px 1px #45464d, 0px 4px 14px rgba(0, 0, 0, 0.3);
  --light-popup-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.05),
    0px 8px 14px rgba(0, 0, 0, 0.12);

  --transition-easeOut-1: all var(--duration-150) var(--easeOut);
  --duration-50: 50ms;
  --duration-150: 150ms;
  --duration-200: 200ms;
  --duration-250: 250ms;
  --duration-300: 300ms;
  --duration-350: 350ms;
  --duration-500: 500ms;
  --duration-600: 600ms;
  --duration-700: 700ms;
  --duration-800: 800ms;

  --easeLinear: linear;
  --easeIn: cubic-bezier(0.32, 0, 0.67, 0);
  --easeOut: cubic-bezier(0.33, 1, 0.68, 1);
  --easeOutBack: cubic-bezier(0.34, 1.56, 0.64, 1);
}
.right_drag_wrap {
  z-index: 1;
  position: absolute;
  width: 800px;
  height: 520px;
  overflow: hidden;
  left: -153.5px;
  border-radius: var(--radius-8);
  box-shadow: var(--shadow-3);
  transform: translateY(60%);
}

.right_drag_wrap .guide-img {
  position: absolute;
  width: 800px;
  right: 0px;
  pointer-events: none;
}
.width-full {
  width: 100%;
}

.right-range {
  position: absolute;
  left: -100px;
  top: -80px;
  width: 200px;
  height: 520px;
}

.right_drag_wrap .drag-mask {
  width: 80.8%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  right: 0px;
  transition: var(--transition-easeOut-1);
}

.right_drag_wrap .guide-img {
  position: absolute;
  width: 800px;
  right: 0px;
  pointer-events: none;
}
.right {
  width: 50%;
  height: 100%;
  position: absolute;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  left: 56%;
  top: 0px;
  background-color: var(--black-900);
  background-image: url(https://img.js.design/assets/Resources/background/home-bg-2.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0px 82%;
}
</style>

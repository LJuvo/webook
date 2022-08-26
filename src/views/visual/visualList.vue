<template>
  <section class="visual-list">
    <div class="visual-list-cell" @click="chooseCell('cloudcity')">
      <div class="visual-list-node">云城</div>
    </div>
    <div class="visual-list-cell" @click="chooseCell('mountain')">
      <div class="visual-list-node">百山</div>
    </div>
    <div
      class="visual-list-cell"
      v-for="(item, key) in list"
      :key="key"
      @click="chooseCell(item.key)"
    >
      <div class="visual-list-node">元素</div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["list"],
  setup(props, { emit }) {
    const chooseCell = (key: string): void => {
      emit("choose", key);
      return;
    };
    return {
      chooseCell,
    };
  },
});
</script>
<style lang="less" scoped>
@property --rotate {
  syntax: "<angle>";
  initial-value: 132deg;
  inherits: false;
}
:root {
  --card-height: 30vh;
  --card-width: var(--card-height);
}
.visual-list {
  margin: 0 auto;
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  &-cell {
    width: calc(25% - 40px);
    padding: 20px;
  }
  &-node {
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    // border: 2px solid rgba(255, 255, 255, 0.6);
    border-radius: 4px;
    min-height: 200px;
    background: #191c29;
    width: var(--card-width);
    height: var(--card-height);
    padding: 3px;
    position: relative;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    font-size: 1.5em;
    color: rgb(88 199 250 / 0%);
    cursor: pointer;
    font-family: cursive;
    color: #fff;
  }
}

@keyframes spin {
  0% {
    --rotate: 0deg;
  }
  100% {
    --rotate: 360deg;
  }
}

.visual-list-node::before {
  content: "";
  width: 104%;
  height: 104%;
  border-radius: 4px;
  background-image: linear-gradient(
    var(--rotate),
    #5ddcff,
    #3c67e3 43%,
    #4e00c2
  );
  position: absolute;
  z-index: -1;
  top: -2%;
  left: -2%;
  animation: spin 2s linear infinite;
}

.visual-list-node::after {
  position: absolute;
  content: "";
  top: calc(var(--card-height) / 6);
  left: 0;
  right: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  transform: scale(0.8);
  filter: blur(calc(var(--card-height) / 6));
  background-image: linear-gradient(
    var(--rotate),
    #5ddcff,
    #3c67e3 43%,
    #4e00c2
  );
  opacity: 1;
  transition: opacity 0.5s;
  animation: spin 2s linear infinite;
}
</style>

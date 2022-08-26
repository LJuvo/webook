<template>
  <div class="about">
    <h1>This is an Demo page</h1>
    <div class="zm-pic-wrapper">
      <div class="zm-pic-box" v-for="(item, key) in imgList" :key="key">
        <img :src="item" />
      </div>
    </div>
    <!-- <mask-run></mask-run> -->
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
// import MaskRun from "../components/mask/pageRun.vue";
export default defineComponent({
  // components: { MaskRun },

  setup() {
    const imgList = [
      "https://ci.xiaohongshu.com/bw1/295371ef-1f24-4d08-9cad-803620146f56?imageView2/2/w/0/format/jpg/v3",

      "https://ci.xiaohongshu.com/bw1/0b7beb52-e91f-426f-abc1-f8187527a816?imageView2/2/w/0/format/jpg/v3",

      "https://ci.xiaohongshu.com/bw1/3b3ba39a-b752-4dd0-9904-f99ce3f93824?imageView2/2/w/0/format/jpg/v3",

      "https://ci.xiaohongshu.com/bw1/f6540962-47b1-4d9e-8983-37bf56d37b0d?imageView2/2/w/0/format/jpg/v3",

      "https://ci.xiaohongshu.com/bw1/18704349-182c-4572-b271-1d123fb3b70a?imageView2/2/w/0/format/jpg/v3",

      "https://ci.xiaohongshu.com/bw1/9b3c42c6-337b-49cc-8985-bba89cd53d29?imageView2/2/w/0/format/jpg/v3",
    ];
    return {
      imgList,
    };
  },
});
</script>
<style lang="less" scoped>
.zm-pic-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.zm-pic-box {
  width: 200px;
  img {
    width: 100%;
  }
}
</style>

<template>
  <div class="red-book">
    <textarea
      class="red-book-textarea"
      v-model="imgStr"
      id="redTextarea"
      ref="redTextarea"
      placeholder="请输入内容"
    ></textarea>
    <div class="red-book-tools">
      <button
        class="red-book-btn"
        style="margin-right: 24px"
        @click="pasteText()"
      >
        粘贴
      </button>
      <button class="red-book-btn" @click="splitText()">拆解</button>
    </div>
    <section class="zm-pic-wrapper">
      <div class="zm-pic-box" v-for="(item, key) in imgList" :key="key">
        <img :src="item" />
      </div>
    </section>
    <!-- <mask-run></mask-run> -->
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
// import MaskRun from "../components/mask/pageRun.vue";
export default defineComponent({
  // components: { MaskRun },

  setup() {
    const imgList = ref([""]);
    const imgStr = ref("");

    let redTextarea = ref(null);
    return {
      redTextarea,
      imgStr,
      imgList,
      pasteText: () => {
        // const el = this;
        //   let ev = document.createEvent("HTMLEvents");
        //   ev.initEvent("paste", true, true);
        //   el.dispatchEvent(ev);
        if (navigator && navigator.clipboard) {
          navigator.clipboard.readText().then((clipText) => {
            imgStr.value = clipText;
          });
        } else {
          // document.querySelector("#redTextarea").focus();
          // document.querySelector("#redTextarea").select();
          const i = document.querySelector("textarea");
          // 获得焦点
          i?.select();
          document.execCommand("paste");
        }
      },
      splitText: () => {
        let code: Array<string> = imgStr.value.split(/[(\r\n)\r\n]+/); // 根据换行或者回车进行识别
        code.forEach((item, index) => {
          // 删除空项
          if (!item) {
            code.splice(index, 1);
          }
        });
        code = Array.from(new Set(code));
        imgList.value = code;
      },
    };
  },
});
</script>
<style lang="less" scoped>
.red-book {
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.red-book-textarea {
  border-radius: 4px;
  border-color: #ccc;
  height: 120px;
}
.red-book-tools {
  margin: 24px 0;
}
.red-book-btn {
  background: cornflowerblue;
  padding: 8px 24px;
  border: 1px solid cornflowerblue;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
}
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

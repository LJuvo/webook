<template>
  <div class="home">
    <a-carousel
      :style="{
        height: '540px',
      }"
      autoPlay
      :default-current="2"
      @change="handleChange"
    >
      <a-carousel-item v-for="(image, key) in images" :key="key">
        <img
          :src="image"
          :style="{
            width: '100%',
          }"
        />
      </a-carousel-item>
    </a-carousel>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const images = ref([
      "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
      "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
      "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
    ]);
    const handleChange = (value: unknown) => {
      console.log(value);
    };
    return {
      images,
      handleChange,
    };
  },
});
</script>

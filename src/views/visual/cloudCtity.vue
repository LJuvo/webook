<template>
  <section
    class="cloud-city"
    style="background: url('assets/images/visual/bg_color17b9.svg') no-repeat"
  >
    <div class="cloud-city-wrapper">
      <div class="cloud-city-area">
        <img
          src="assets/images/visual/sence_cityb87f.png"
          class="model___2OqoF"
          alt=""
          style="
            clip-path: polygon(0% 48%, 74% 27%, 100% 80%, 0% 100%);
            bottom: 177px;
            left: 168px;
            width: 1063px;
          "
        />
        <img
          src="assets/images/visual/projecta0c0.svg"
          class="project___1r7cx"
          alt=""
          style="
            transform: rotateX(53deg) rotateY(3.8deg) rotateZ(-16.7deg)
              translateX(90px) translateY(-250px) scale(1.22, 1.4);
          "
        />

        <div class="cloud_box___amSXM" style="transform: translateY(88px)">
          <img
            src="assets/images/visual/cloud_l1bf19.png"
            class="cloud1___AT043"
            alt=""
          />
          <img
            src="assets/images/visual/cloud5.png"
            class="cloud3___3bUiw"
            alt=""
          />
          <img
            src="assets/images/visual/cloud5.png"
            class="cloud4___1uZwI"
            alt=""
          />
          <img
            src="assets/images/visual/cloud4.png"
            class="cloud6___bH5Na"
            alt=""
          />
        </div>
        <img class="model___2OqoF" src="assets/images/visual/model_citya.png" />
        <!-- <img
          src="assets/images/visual/data.png"
          class="project___1r7cx"
          alt=""
          style="
            transform: rotateX(53deg) rotateY(3.8deg) rotateZ(-16.7deg)
              translateX(90px) translateY(-250px) scale(1.22, 1.4);
          "
        /> -->
        <div class="cloud_box___amSXM" style="transform: translateY(126px)">
          <img
            src="assets/images/visual/cloud2.png"
            class="cloud2___6UuzL"
            alt=""
          /><img
            src="assets/images/visual/cloud6.png"
            class="cloud5___1JAyM"
            alt=""
          /><img
            src="assets/images/visual/cloud3.png"
            class="cloud7___Lks8R"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // setup() {},
});
</script>

<style lang="less" scoped>
.cloud-city {
  height: 100vh;
  min-width: 1440px;
  font-family: "-apple-system, BlinkMacSystemFont, FontAwesome, Segoe UI, Helvetica Neue, Arial, Pingfang SC, Microsoft Yahei, WenQuanYi Micro Hei, sans-serif";
  color: #fff;
  position: relative;
  width: 100%;

  background-size: contain;
  box-sizing: border-box;
  overflow: hidden;
  &-wrapper {
    width: 100%;
    height: calc(100vh - 20px);
    min-height: 1150px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: end;
    align-items: flex-end;
    padding-bottom: 160px;
    box-sizing: border-box;
  }
  &-area {
    position: relative;
    width: 1360px;
    height: 766px;
    margin: 175px auto 0;
    perspective: 3000px;
  }
  &-model {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
  }
  &-cloud {
    position: absolute;
    &-a {
      top: 20%;
      left: 30%;
      z-index: 1;
    }
    &-b {
      top: 10%;
      left: 10%;
      z-index: 2;
    }
    &-c {
      top: 45%;
      right: 10%;
      z-index: 12;
    }
  }
}
.model___2OqoF {
  position: absolute;
  width: 100%;
  bottom: 160px;
  left: 4px;
  transition: all 0.4s;
}
.project___1r7cx {
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  // transform: rotateX(53deg) rotateY(3.8deg) rotate(-16.7deg) translateX(90px) translateY(-250px) scale(1.22,1.4);
  transform-origin: center;
  transition: all 0.4s;
}
.cloud_box___amSXM {
  transition: all 0.4s;
}
.project___1r7cx {
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  // transform: rotateX(53deg) rotateY(3.8deg) rotate(-16.7deg) translateX(90px) translateY(-250px) scale(1.22,1.4);
  transform-origin: center;
  transition: all 0.4s;
}
.cloud1___AT043 {
  position: absolute;
  width: 254px;
  animation: smooth_1___2TD_g 160s linear infinite;
  left: 3px;
  top: -15px;
}
.cloud2___6UuzL {
  position: absolute;
  width: 300px;
  animation: smooth_2___1GsGw 130s linear infinite;
  left: 159px;
  top: -32px;
}
.cloud3___3bUiw {
  position: absolute;
  width: 260px;
  animation: smooth_3___2Pgwr 200s linear infinite;
  left: 180px;
  top: -67px;
}
.cloud4___1uZwI {
  position: absolute;
  width: 300px;
  animation: smooth_4___3bbNv 160s linear infinite;
  left: 363px;
  top: -104px;
}
.cloud5___1JAyM {
  position: absolute;
  width: 138px;
  animation: smooth_5___VrD5P 130s linear infinite;
  left: 538px;
  top: 25px;
}
.cloud6___bH5Na {
  position: absolute;
  width: 223px;
  animation: smooth_6___1QZNr 200s linear infinite;
  left: 650px;
  top: -59px;
}
.cloud7___Lks8R {
  position: absolute;
  width: 252px;
  animation: smooth_7___1TFeH 130s linear infinite;
  left: 701px;
  top: 10px;
}
@keyframes smooth_1___2TD_g {
  0% {
    opacity: 0;
    transform: translateX(0);
  }

  5% {
    opacity: 1;
  }

  95% {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translateX(45.72917vw);
  }
}

@keyframes smooth_2___1GsGw {
  0% {
    opacity: 1;
    transform: translateX(0);
  }

  82% {
    opacity: 1;
  }

  87% {
    opacity: 0;
    transform: translateX(35.26042vw);
  }

  87.1% {
    opacity: 0;
    transform: translateX(-4.89583vw);
  }

  92% {
    opacity: 1;
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes smooth_3___2Pgwr {
  0% {
    opacity: 1;
    transform: translateX(0);
  }

  81% {
    opacity: 1;
  }

  86% {
    opacity: 0;
    transform: translateX(36.25vw);
  }

  86.1% {
    opacity: 0;
    transform: translateX(-5.98958vw);
  }

  91% {
    opacity: 1;
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes smooth_4___3bbNv {
  0% {
    opacity: 1;
    transform: translateX(0);
  }

  56% {
    opacity: 1;
  }

  61% {
    opacity: 0;
    transform: translateX(24.63542vw);
  }

  61.1% {
    opacity: 0;
    transform: translateX(-15.52083vw);
  }

  66% {
    opacity: 1;
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes smooth_5___VrD5P {
  0% {
    opacity: 1;
    transform: translateX(0);
  }

  45% {
    opacity: 1;
  }

  49% {
    opacity: 0;
    transform: translateX(23.95833vw);
  }

  49.1% {
    opacity: 0;
    transform: translateX(-24.63542vw);
  }

  54% {
    opacity: 1;
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes smooth_6___1QZNr {
  0% {
    opacity: 1;
    transform: translateX(0);
  }

  31% {
    opacity: 1;
  }

  36% {
    opacity: 0;
    transform: translateX(13.69792vw);
  }

  36.1% {
    opacity: 0;
    transform: translateX(-30.46875vw);
  }

  41% {
    opacity: 1;
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes smooth_7___1TFeH {
  0% {
    opacity: 1;
    transform: translateX(0);
  }

  17% {
    opacity: 1;
  }

  22% {
    opacity: 0;
    transform: translateX(9.53125vw);
  }

  22.1% {
    opacity: 0;
    transform: translateX(-33.125vw);
  }

  27% {
    opacity: 1;
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>

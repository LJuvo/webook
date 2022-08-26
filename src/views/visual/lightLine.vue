<template>
  <div>
    <svg class="dv-border-svg-container" :width="'100%'" :height="height">
      <defs>
        <path :id="path" :d="pathD" fill="transparent" />
        <radialGradient :id="gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fff" stop-opacity="1" />
          <stop offset="100%" stop-color="#fff" stop-opacity="0" />
        </radialGradient>

        <mask :id="mask">
          <circle cx="0" cy="0" r="150" :fill="`url(#${gradient})`">
            <animateMotion
              :dur="`${dur}s`"
              :path="pathD + 'Q3.6990600000000002,230.055 ,-150,230'"
              rotate="auto"
              repeatCount="indefinite"
            />
          </circle>
        </mask>
      </defs>

      <use :stroke="mergedColor[0]" stroke-width="1" :xlink:href="`#${path}`" />

      <use
        :stroke="mergedColor[1]"
        stroke-width="3"
        :xlink:href="`#${path}`"
        :mask="`url(#${mask})`"
      >
        <animate
          attributeName="stroke-dasharray"
          :from="`0, ${length}`"
          :to="`${length}, 0`"
          :dur="`${dur}s`"
          repeatCount="indefinite"
        />
      </use>
    </svg>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["list"],
  setup(props, { emit }) {
    const id = "24235";
    const width = 300,
      height = 300;
    const length = (width + height - 5) * 2;
    // const pathD = `M2.5 2.5 Q${width / 2 - 2.5} 2.5 ,${width / 2 - 2.5} ${
    //   height / 2 - 2.5
    // }, ${width - 100} 70, 200 200`;

    const pathD = `M547,128.904Q535.573,128.904,524.816,123.371Q515.334,118.493,505.832,108.991Q497.988,101.146,488.992,88.923Q483.621,81.6239,473.199,66.0691Q462.7,50.3999,457.292,43.0616Q448.322,30.8913,440.517,23.1231 Q431.24,13.8898,422.056,9.203669999999999Q411.858,4,401.042,3.99999Q388.979,4,380.133,8.060089999999999Q372.158,11.72068,365.995,19.102Q360.69,25.4555,355.747,35.8673Q353.717,40.144,351.344,45.9287 Q349.904,49.4397,347.021,56.8144Q342.168,69.2318,339.362,75.6623Q334.623,86.5237,329.697,95.1352Q323.702,105.615,316.622,114.27Q308.576,124.106,298.747,132.078Q284.105,143.954,268.55,149.442Q254.635,154.351,239.137,154.407Q226.263,154.454,210.401,151.061Q204.077,149.708,196.187,147.585Q191.461,146.314,182.003,143.596Q172.368,140.828,167.521,139.527Q159.466,137.364,152.963,135.978Q136.751,132.525,123.409,132.525Q64.2629,132.525,3.6990600000000002,230.055 `;

    // const pathD = `M2.5, 2.5 L${width - 2.5}, 2.5 L${width - 2.5}, ${
    //   height - 2.5
    // } L2.5, ${height - 2.5} L2.5, 2.5`;

    return {
      ref: "border-box-8",
      path: `border-box-8-path-${id}`,
      gradient: `border-box-8-gradient-${id}`,
      mask: `border-box-8-mask-${id}`,

      defaultColor: ["#235fa7", "#4fd2dd"],

      mergedColor: ["#235fa7", "#4fd2dd"],
      length,
      pathD,
      dur: 3,
      backgroundColor: "transparent",
      width,
      height,
    };
  },
});
</script>

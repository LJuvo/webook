<template>
  <a-layout>
    <a-layout-content style="padding: 0 24px">
      <v-md-preview :text="previewTxt"></v-md-preview>
    </a-layout-content>
  </a-layout>
</template>
<script>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { getMarkDown } from "../../api/preview";
import { onBeforeRouteUpdate } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    onMounted(() => {
      // 打印
      const { id } = router.currentRoute.value.params;
      fetchMdData(id);
    });
    const previewTxt = ref("");
    function fetchMdData(id) {
      getMarkDown(id)
        .then((response) => {
          previewTxt.value = response.toString();
        })
        .catch((error) => {
          console.log("异常响应 ->", error);
        });
    }

    onBeforeRouteUpdate((to) => {
      const { id } = to.params;
      fetchMdData(id);
    });

    return {
      previewTxt,
    };
  },
};
</script>

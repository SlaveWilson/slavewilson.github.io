<template lang="pug">
main
  section.fullpage
    Intro
  section
    WorkValue
  section.fullpage
    h1 Section 3
  section.fullpage
    h1 Section 4
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, Ref, ref } from "vue";
import Intro from "@/components/sections/Intro.vue";
import WorkValue from "@/components/sections/WorkValue.vue";

export default defineComponent({
  name: "App",
  components: {
    Intro,
    WorkValue,
  },
});
</script>

<style lang="scss" scoped>
.fullpage {
  height: 100vh;
  width: 100vw;
}
</style>

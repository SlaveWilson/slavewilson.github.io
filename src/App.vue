<template lang="pug">
main
  section.fullpage
    Intro
  section
    WorkValue
  section.fullpage
    Game
  section
    Noq
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Intro from "@/components/sections/Intro.vue";
import WorkValue from "@/components/sections/WorkValue.vue";
import Game from "@/components/sections/Game.vue";
import Noq from "@/components/sections/Noq.vue";

export default defineComponent({
  name: "App",
  components: {
    Intro,
    WorkValue,
    Game,
    Noq,
  },
});
</script>

<style lang="scss" scoped>
.fullpage {
  height: 100vh;
  width: 100vw;
}
</style>

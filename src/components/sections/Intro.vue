<template lang="pug">
h1 Hello;
.paragraph
  p I am Tommy Ng;
  p a frontend/game developer;
  p specializing in website and game developmemnt;
.paragraph
  p You can see some of my works below;
  p for more detail;
  p please feel free to visit my #[a(href="https://github.com/SlaveWilson", target="_blank") github];
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "intro",
});
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 2em;
}
.paragraph {
  margin-top: 2em;
}
</style>

<template lang="pug">
.flex.container
  h1 My Works;
  .grid.works
    BaseCard
    BaseCard
    BaseCard
    BaseCard
    BaseCard
    BaseCard
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseCard from "@/components/common/BaseCard.vue";

export default defineComponent({
  name: "work value",
  components: {
    BaseCard,
  },
  // setup() {},
});
</script>

<style lang="scss" scoped>
.container {
  flex-direction: column;
}
h1 {
  flex: 0;
}
.works {
  flex: 1;
  margin-top: 2em;
  grid-template-columns: 47.5% 47.5%;
  column-gap: 5%;
  row-gap: 2.5%;
  @include desktop {
    grid-template-columns: 30% 30% 30%;
    row-gap: 5%;
  }
}
</style>

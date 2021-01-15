<template lang="pug">
p.sub-title my work 01;
h2 #[.strong My Work Value.] Developed for CLAP for Youth@JC using #[a(href="https://unity.com/", target="_blank") Unity]
.flex.images
  .flex-full
    img.small(src="@/assets/images/workvalue-sm.jpg")
  .screenshot.flex-zero
    img(src="@/assets/images/workvalue.jpg")
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "work value",
  // setup() {},
});
</script>

<style lang="scss" scoped>
.container {
  flex-direction: column;
}

.sub-title {
  font-size: calc(1rem + 0.33vw);
  margin-left: 4vw;
  margin-right: 5vw;
  margin-top: 1em;
  font-weight: 300;
  float: left;
}

h2 {
  margin-left: 4vw;
  margin-top: 4em;
  font-weight: 200;
  word-break: keep-all;
}

.content {
  margin-left: 4vw;
  word-break: keep-all;
  font-size: calc(1.5rem + 0.33vw);
}

.images {
  margin-top: 7em;
  margin-left: 1em;
  margin-right: 5vw;
  flex-direction: column;
  @include desktop {
    flex-direction: row;
    align-items: flex-end;
  }
}

img {
  max-width: 100%;
}

.small {
  width: 250px;
  margin-bottom: 2em;
  @include desktop {
    width: auto;
    height: 200px;
    float: right;
    margin-right: 12.5vw;
  }
}

.screenshot {
  max-width: min(100%, 512px);
  img {
    max-width: min(100%, 512px);
    @include desktop {
      float: right;
    }
  }
}
</style>

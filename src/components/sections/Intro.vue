<template lang="pug">
.flex.container.bg-primary.relative
  .content.flex-full.z-1
    h1 Hello;
    .paragraph
      p I am Tommy Ng;
      p a frontend/game developer; 
      p specializing in  #[a(href="https://vuejs.org/", target="_blank") Vue], #[a(href="https://nuxtjs.org/", target="_blank") Nuxt] and #[a(href="https://unity.com/", target="_blank") Unity];
    .paragraph
      p You can see some of my works below;
      p for more details, please feel free to visit my #[a(href="https://github.com/SlaveWilson", target="_blank") github];
  .content.flex-none.swipe.z-1
    p.strong Scroll For More
  .absolute.image.z-0
    .absolute.backdrop.z-1
    picture
      source(media="(min-width:768px)", srcset="@/assets/images/dog-desktop.jpg")
      img(src="@/assets/images/dog-mobile.jpg")
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "intro",
});
</script>

<style lang="scss" scoped>
.container {
  flex-direction: column;
  color: white;
}

.content {
  width: 60vw;
}

h1 {
  margin-top: 0.5em;
  @include tablet {
    margin-top: 2em;
  }
}

.paragraph {
  margin-top: 2em;
}

.swipe {
  margin-bottom: 2em;
}

.image {
  bottom: 12em;
  right: 4em;
  @include tablet {
    bottom: 12em;
    right: 6em;
  }
  @include desktop {
    bottom: initial;
    top: 8em;
    right: 6em;
  }
}

.backdrop {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(color(primary), 0.3);
}

img {
  max-width: 40vw;
  max-height: 80vh;
}
</style>

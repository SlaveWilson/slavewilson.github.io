<template lang="pug">
.flex.container
  .content
    h1 Hello;
    .paragraph
      p I am Tommy Ng;
      p a frontend/game developer;
      p specializing in website and game developmemnt;
    .paragraph
      p You can see some of my works below;
      p for more detail;
      p please feel free to visit my #[a(href="https://github.com/SlaveWilson", target="_blank") github];
  .content.bg-secondary
  //- .content
  //-   picture.relative
  //-     source(media="(min-width:768px)", srcset="@/assets/images/dog-desktop.jpg")
  //-     img.image(src="@/assets/images/dog-mobile.jpg")
  //-     .caption.absolute
  //-       p This is my sister's dog. Just want to show you how cute he is.
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "intro",
});
</script>

<style lang="scss" scoped>
.flex {
  flex-direction: column;
  @include desktop {
    flex-direction: row;
  }
}

.content {
  width: 80vw;
  @include tablet {
    width: 40vw;
  }
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

.image {
  margin-top: 1em;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);

  @include tablet {
    max-width: 100%;
    max-height: 70vh;
    margin-top: 4em;
    // margin-left: 6em;
  }
}

.bg-secondary {
  background: color(secondary);
}
</style>

<template lang="pug">
p.sub-title my work 02;
h2 #[.strong NoQ Product Page. 2020.] Developed for Redso using #[a(href="https://vuejs.org", target="_blank") Vue], #[a(href="https://nuxtjs.org/", target="_blank") Nuxt] and #[a(href="https://strapi.io/", target="_blank") Strapi]
.flex.images
  .screenshot
    img(src="@/assets/images/noq.jpg", data-aos="zoom-out-up")
.description
  p.sub-title description;
  p.content Built for web and seo. A product website to demostrate products. Mainly focus on SEO using #[span.strong Server-side Rendering] to render the webpage.
.link
  p.sub-title link;
  p.content #[a(href="https://www.noq.hk/", target="_blank") NoQ Url]
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
  line-height: 1.5;
}

.images {
  margin-top: 7em;
  margin-left: 1em;
  margin-right: 5vw;
  flex-direction: column;
  align-items: flex-end;
  overflow: hidden;
  @include desktop {
    justify-content: flex-end;
    flex-direction: row;
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
  max-width: min(100%, 768px);
  @include desktop {
    margin-right: 10vw;
  }
  img {
    max-width: min(100%, 768px);
    @include desktop {
      float: right;
    }
  }
}

.description {
  margin-top: 1em;
}

.content {
  word-break: keep-all;
  line-height: 1.1;
  margin-bottom: 1em;
  margin-left: 4vw;
  font-size: calc(2.2rem + 0.33vw);
}

.link {
  margin-top: 1em;
  margin-bottom: 16em;
  a {
    white-space: pre-wrap;
  }
}
</style>

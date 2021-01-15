<template lang="pug">
.flex.justify-center.items-center.container
  .flex.flex-full.items-center.content
    .ipad.flex-full.relative
      .absolute
    p.flex-none Mockup psd created by zlatko_plamenov - #[a(href="https://www.freepik.com/psd/mockup", target="_blank") www.freepik.com]
</template>

<style lang="scss" scoped>
.container {
  background: color(grey);
}

.content {
  height: 100%;
  flex-direction: column;
}

.ipad {
  width: 100%;
  background: url("../../assets/images/ipad.png") no-repeat center;
  background-size: contain;
}

p {
  margin-top: 1em;
}
</style>

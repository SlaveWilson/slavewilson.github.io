<template lang="pug">
.flex.justify-center.items-center.container
  .flex.flex-full.items-center.content
    a.ipad.flex-full.relative(href="https://slavewilson.itch.io/over-genius", target="_blank")
      .absolute
</template>

<style lang="scss" scoped>
.container {
  background: color(grey);
}

.content {
  height: 100%;
  flex-direction: column;
}

a::after {
  content: none;
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

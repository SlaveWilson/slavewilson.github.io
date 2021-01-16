<template lang="pug">
footer
  p.sub-title want to contact me?
  p.content tommynhm@gmail.com
  hr
  p.sub-title instagram
  a.content(href="https://instagram.com/tntommynhm", target="_blank") @tntommynhm
  hr
</template>

<style lang="scss" scoped>
.sub-title {
  font-size: calc(1rem + 0.33vw);
  margin-left: 4vw;
  margin-right: 5vw;
  margin-top: 1em;
  font-weight: 300;
}

.content {
  margin-left: 4vw;
  font-size: calc(2.2rem + 0.33vw);
  font-weight: 200;
  word-break: break-all;
  line-height: 1.5;
}

hr {
  border-top: 1px solid color(primary);
  border-bottom: 0;
}
</style>

<template lang="pug">
  ul.links.mt-2
    li.link
      a.anchor(href='https://tyokinuhata.github.io/zakkuri-bra/', target='_blank') ざっくりBRA
    li.link
      a.anchor(href='https://github.com/tyokinuhata/codic-cli', target='_blank') codic-cli
    li.link
      a.anchor(href='https://tyokinuhata.github.io/trouble-traveler/', target='_blank') Trouble Traveler
</template>

<style lang="scss" scoped>
  @import '~assets/scss/_variable.scss';

  .links {
    line-height: 2em;
  }

  .anchor {
    text-decoration: none;
    color: $gray;
  }
</style>

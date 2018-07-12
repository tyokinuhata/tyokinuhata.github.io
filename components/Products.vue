<template lang="pug">
  ul.links.mt-2
    li.link
      details
        summary
          a.anchor(href='https://tyokinuhata.github.io/zakkuri-bra/', target='_blank') ざっくりBRA
        span おっぱいのサイズに応じた最適なカップ数を算出するツールです.
    li.link
      details
        summary
          a.anchor(href='https://www.npmjs.com/package/codic-cli', target='_blank') codic-cli
        span 変数やメソッド名の適切な名前を提案をしてくれるCLIアプリケーションです.
    li.link
      details
        summary
          a.anchor(href='https://tyokinuhata.github.io/trouble-traveler/', target='_blank') Trouble Traveler
        span 旅行先ルーレット🗾🗻🗼⛩
    li.link
      details
        summary
          a.anchor(href='https://packagist.org/packages/tyokinuhata/html-builder', target='_blank') HTML Builder
        span PHPのメソッドチェーンでHTMLとCSSを記述できるライブラリです.
    li.link
      details
        summary
          a.anchor(href='https://github.com/tyokinuhata/gyakupo', target='_blank') 逆ポ
        span 電卓.
    li.link
      details
        summary
          a.anchor(href='https://todoom.herokuapp.com', target='_blank') todoom
        span 面白いTODOアプリです.
</template>

<style lang="scss" scoped>
  @import '~assets/scss/_variable.scss';

  .links {
    line-height: 2em;
    padding: 0;
  }

  .link {
    list-style-type: none;
  }

  .anchor {
    text-decoration: none;
    color: $gray;
  }
</style>

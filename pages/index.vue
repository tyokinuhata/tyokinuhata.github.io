<template lang="pug">
  section.container
    .icon-wrapper
      img.icon(src='~static/icon.png', alt='icon')
    h1.name Kazukichi
    p.bio 2015年, ツイッター芸人として活動を開始. 大阪を中心に活動を続け, 数々の人間を笑顔にさせてきた. 近年はラーメンやエンジニアリングにも活動範囲を広げ, 国内外問わず高い人気を誇っている. 今, 世界で最も注目されている人間の１人である.
    hr.border
    h2.title Links
    ul.links
      li.link
        a.anchor(href='https://twitter.com/h_tyokinuhata', target='_blank') Twitter
      li.link
        a.anchor(href='http://kazukichi.hatenadiary.com/', target='_blank') よくきたわね、いらっしゃい
      li.link
        a.anchor(href='http://kazukichi.hatenablog.jp/', target='_blank') 新しいフォルダー（１）
      li.link
        a.anchor(href='https://github.com/tyokinuhata', target='_blank') GitHub
      li.link
        a.anchor(href='http://qiita.com/h_tyokinuhata', target='_blank') Qiita
      li.link
        a.anchor(href='https://studyplus.jp/users/h_tyokinuhata', target='_blank') Studyplus
    h2.title Products
    ul.links
      li.link
        a.anchor(href='https://tyokinuhata.github.io/zakkuri-bra/', target='_blank') ざっくりBRA
      li.link
        a.anchor(href='https://github.com/tyokinuhata/codic-cli', target='_blank') codic-cli
      li.link
        a.anchor(href='https://tyokinuhata.github.io/trouble-traveler/', target='_blank') Trouble Traveler
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style lang="scss">
  @import '~assets/scss/_variable.scss';
  @import '~assets/scss/_mixin.scss';

  body {
    background: #f8f8f8;
    font-family: 'Quicksand', sans-serif;
    color: #626063;
  }

  .container {
    margin: 0 auto;
    max-width: 100%;
    width: 650px;
    height: 100%;
  }

  .icon-wrapper {
    text-align: center;
  }

  .icon {
    width: 200px;
    @include desktop() {
      margin-top: 50px;
    }
  }

  .name {
    text-align: center;
  }

  .bio {
    line-height: 2em;
    text-align: left;
  }

  .border {
    max-width: 640px;
    width: 100%;
    border: 1px dashed #bbbbbb;
  }

  .title {
    text-align: center;
  }

  .links {
    list-style: none;
    line-height: 2em;
    padding: 0;
    text-align: center;
  }

  .anchor {
    text-decoration: none;
    color: #626063;
  }
</style>

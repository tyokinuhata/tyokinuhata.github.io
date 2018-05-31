<template lang="pug">
  section.container
    .icon-wrapper
      img.icon(src='~static/icon.png', alt='icon')
    h1.name Kazukichi
    p.bio 2015年, ツイッター芸人として活動を開始. 大阪を中心に活動を続け, 数々の人間を笑顔にさせてきた. 近年はラーメンやエンジニアリングにも活動範囲を広げ, 国内外問わず高い人気を誇っている. 今, 世界で最も注目されている人間の１人である.
    b-tabs
      b-tab(title='Links', active)
        links
      b-tab(title='Products')
        products
</template>

<script>
  import Links from '~/components/Links.vue'
  import Products from '~/components/Products.vue'

  export default {
    components: {
      Links,
      Products
    },
    created() {
      console.log('肉まんを...憎まんでください...')
    }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/scss/_variable.scss';
  @import '~assets/scss/_mixin.scss';

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
</style>

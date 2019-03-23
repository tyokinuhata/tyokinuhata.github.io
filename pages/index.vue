<template>
  <section class="container">
    <div class="icon-wrapper"><img class="icon" src="~static/icon.png" alt="icon" /></div>
    <h1 class="name">Kazukichi</h1>
    <p class="bio">{{ bio }}</p>
    <b-tabs>
      <b-tab title="Links" active="active">
        <links></links>
      </b-tab>
      <b-tab title="Products">
        <products></products>
      </b-tab>
    </b-tabs>
  </section>
</template>

<script>
  import Links from '~/components/Links.vue'
  import Products from '~/components/Products.vue'

  export default {
    data() {
      return {
        bio: '2015年, ツイッター芸人として活動を開始. ' +
             '大阪を中心に活動を続け, 数々の人間を笑顔にさせてきた. ' +
             '近年はラーメンやエンジニアリングにも活動範囲を広げ, 国内外問わず高い人気を誇っている. ' +
             '今, 世界で最も注目されている人間の１人である.',
        commands: '',
      }
    },
    components: {
      Links,
      Products
    },
    mounted() {
      this.nikuman();
      this.konamiCommand();
    },
    methods: {
      konamiCommand() {
        document.addEventListener('keydown', event => {
          if (event.key === 'ArrowUp') {
            this.commands += '上';
          }
          else if (event.key === 'ArrowDown') {
            this.commands += '下';
          }
          else if (event.key === 'ArrowLeft') {
            this.commands += '左';
          }
          else if (event.key === 'ArrowRight') {
            this.commands += '右';
          }
          else if (event.key === 'A') {
            this.commands += 'A';
          }
          else if (event.key === 'B') {
            this.commands += 'B';
          }
          else if (event.key !== 'Shift') {
            this.commands = '';
          }

          if (this.commands.length > 10) {
            this.commands = this.commands.slice(1);
          }

          if (this.commands === '上上下下左右左右BA') {
            this.$router.push('/majime');
          }
        });
      },
      nikuman() {
        console.log('肉まんを...憎まんでください...')
      },
    }
  }
</script>

<style lang="scss">
  @import '~assets/scss/_mixin.scss';
  @import '~assets/scss/_base.scss';

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

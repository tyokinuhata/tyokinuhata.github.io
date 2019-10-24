<template>
  <section id="about" class="about">
    <div class="about_wrapper">
      <div class="about_hn">KAZUKICHI</div>
      <div class="about_name">Tobita Kazuki</div>
      <div class="about_email">
        <font-awesome-icon icon="envelope" />
        <span>kazukiti201@gmail.com</span>
      </div>
      <div class="about_sns">
        <a href="https://github.com/tyokinuhata" target="_blank" class="about_snsLink">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a href="https://twitter.com/h_tyokinuhata" target="_blank" class="about_snsLink">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>
        <a href="https://www.instagram.com/tyokinuhata/" target="_blank" class="about_snsLink">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
        <a href="http://kazukichi.hatenadiary.com/" target="_blank" class="about_snsLink">
          <font-awesome-icon icon="question" />
        </a>
        <a href="https://qiita.com/h_tyokinuhata" target="_blank" class="about_snsLink">
          <font-awesome-icon icon="search" />
        </a>
      </div>
      <div class="about_birthday">
        <font-awesome-icon icon="birthday-cake" />
        <a href="https://www.amazon.jp/hz/wishlist/ls/35F1TMJOKBUB7?ref_=wl_share" target="_blank" class="about_birthdayLink">1998/06/30</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .about {
    font-family: 'Big Shoulders Text', sans-serif;
    width: 100vw;
    height: 100vh;
    position: relative;
  }

  .about_wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform : translate(-50%, -50%);
  }

  .about_hn {
    font-size: 128px;
    line-height: 106px;
    &:first-letter {
      color: #dc143c;
    }
    @media (max-width: 550px) {
      font-size: 64px;
      line-height: 58px;
    }
  }

  .about_name {
    font-size: 64px;
    line-height: 62px;
    margin-left: 5px;
    &::before {
      content: '';
      display: inline-block;
      width: 50px;
      height: 50px;
      background-image: url('~static/icon.png');
      background-size: contain;
    }
    @media (max-width: 550px) {
      font-size: 32px;
      line-height: 28px;
      &::before {
        width: 26px;
        height: 26px;
      }
    }
  }

  .about_email {
    font-size: 32px;
    line-height: 35px;
    margin-left: 7px;
    @media (max-width: 550px) {
      font-size: 16px;
      line-height: 20px;
    }
  }

  .about_sns {
    font-size: 32px;
    line-height: 35px;
    margin-left: 7px;
    &Link {
      color: #626063;
      &:hover {
        color: #dc143c;
      }
    }
    @media (max-width: 550px) {
      font-size: 16px;
      line-height: 20px;
    }
  }

  .about_birthday {
    font-size: 32px;
    line-height: 35px;
    margin-left: 7px;
    &Link {
      color: #626063;
      &:hover {
        color: #dc143c;
      }
    }
    @media (max-width: 550px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
</style>

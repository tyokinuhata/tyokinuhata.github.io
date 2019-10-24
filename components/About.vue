<template>
  <section id="about" class="about">
    <div class="about_wrapper">
      <div class="about_hn">KAZUKICHI</div>
      <div class="about_name">Tobita Kazuki</div>
      <div class="about_email">📧 kazukiti201@gmail.com</div>
      <div class="about_birthday">🎂 1998/06/30</div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .about {
    background: #fff;
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
  }

  .about_name {
    font-size: 64px;
    line-height: 62px;
    padding-left: 5px;
    &::before {
      content: '';
      display: inline-block;
      width: 50px;
      height: 50px;
      background-image: url('~static/icon.png');
      background-size: contain;
    }
  }

  .about_email {
    font-size: 32px;
    line-height: 35px;
    padding-left: 7px;
  }

  .about_birthday {
    font-size: 32px;
    line-height: 35px;
    padding-left: 5px;
  }
</style>

<template>
  <section id="histories" class="histories">
    <h2 class="h2">Histories</h2>
    <ul>
      <li class="histories_history">
        <font-awesome-icon icon="school" />
        <a href="http://www2.kobe-c.ed.jp/snk-hs/" target="_blank" class="histories_historyLink">神戸市立神港高等学校</a>
        <span>情報処理科 (2014 - 2017)</span>
      </li>
      <li class="histories_history">
        <font-awesome-icon icon="school" />
        <a href="https://www.oic.ac.jp/" target="_blank" class="histories_historyLink">大阪情報コンピュータ専門学校</a>
        <span>総合情報メディア学科 (2017 - 現在)</span>
      </li>
      <li class="histories_history">
        <font-awesome-icon icon="building" />
        <a href="https://chatbox-inc.com/" target="_blank" class="histories_historyLink">株式会社chatbox</a>
        <span>(2017 - 現在)</span>
      </li>
      <li class="histories_history">
        <font-awesome-icon icon="building" />
        <a href="https://www.inform.co.jp/" target="_blank" class="histories_historyLink">インフォームシステム株式会社</a>
        <span>(2017 - 2018)</span>
      </li>
      <li class="histories_history">
        <font-awesome-icon icon="building" />
        <a href="https://geeks.ne.jp/" target="_blank" class="histories_historyLink">GEEKS株式会社</a>
        <span>(2018 - 現在)</span>
      </li>
      <li class="histories_history">
        <font-awesome-icon icon="bicycle" />
        <span>大阪 - 名古屋 ママチャリ走破 (2019)</span>
      </li>
      <li class="histories_history">
        <font-awesome-icon icon="trophy" />
        <a href="https://spajam.jp/2019/entry/kansai/" target="_blank" class="histories_historyLink">SPAJAM2019 関西予選</a>
        <span>最優秀賞受賞 (2019)</span>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
  .histories {
    background: #fff;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .histories_history {
    list-style-type: none;
    font-size: 20px;
    &Link {
      color: #626063;
      &:hover {
        color: #dc143c;
      }
    }
    @media (max-width: 600px) {
      font-size: 16px;
    }
  }
</style>

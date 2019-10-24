<template>
  <section id="histories" class="histories">
    <h2 class="h2">Histories</h2>
    <ul>
      <li class="histories_history">
        <font-awesome-icon icon="school" />
        <span>神戸市立神港高等学校 情報処理科 (2014 - 2017)</span>
      </li>
      <li class="histories_history">
        <font-awesome-icon icon="school" />
        <span>大阪情報コンピュータ専門学校 総合情報メディア学科 (2017 - 現在)</span>
      </li>
      <li class="histories_history">
        <font-awesome-icon icon="building" />
        <span>株式会社chatbox (2017 - 現在)</span>
      </li>
      <li class="histories_history">
        <font-awesome-icon icon="building" />
        <span>インフォームシステム株式会社 (2017 - 2018)</span>
      </li>
      <li class="histories_history">
        <font-awesome-icon icon="building" />
        <span>GEEKS株式会社 (2018 - 現在)</span>
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
    @media (max-width: 600px) {
      font-size: 16px;
    }
  }
</style>
